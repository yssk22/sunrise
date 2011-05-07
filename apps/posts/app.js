var path = require('path');
var couchapp = require('couchapp');
var merge = require('sunrise').utils.merge;
var parallel = require('sunrise').middleware.utils.parallel,
    js = require('sunrise').middleware.utils.js,
    css = require('sunrise').middleware.utils.css;
var raiseError = require('sunrise').raiseError;

var ddoc = {
  _id: "_design/posts" ,
  views: {},
  shows: {},
  lists: {},
  docTemplates: {
    post: {
      type: 'post',
      title: '*Untitled*',
      content: '',
      tags: [],
      is_draft: false
    }
  }
};

module.exports = ddoc;

ddoc.middleware = require('./middleware');

ddoc.views.all_by_updated_at = {
  map: function(doc){
    if( doc.type == 'post' ){
      emit(doc.updated_at, doc);
    }
  }
};

ddoc.views.by_updated_at = {
  map: function(doc){
    if( doc.type == 'post' && doc.is_draft != true ){
      emit(doc.updated_at, doc);
    }
  }
}

ddoc.views.all_by_tag = {
  map: function(doc){
    if( doc.type == 'post' ){
      if( doc.tags && typeof(doc.tags) === 'object'){
        for(var i in doc.tags){
          emit([doc.tags[i], doc.updated_at], doc);
        }
      }
    }
  }
}

ddoc.views.by_tag = {
  map: function(){
    if( doc.type == 'post' && doc.is_draft != true ){
      if( doc.tags && typeof(doc.tags) === 'object'){
        for(var i in doc.tags){
          emit([doc.tags[i], doc.updated_at], doc);
        }
      }
    }
  }
};


ddoc.init = function(app, config){
  config = merge({
    postsPerPage: 10
  }, config);
  function makeDoc(req, oldDoc){
    var now = new Date();
    var doc = merge({}, ddoc.docTemplates.post, req.body,
                    {
                      updated_at: now,
                      updated_by: req.currentUser
                    });
    // document normalization
    doc.type = 'post';
    doc.title = doc.title.toString();
    doc.content = doc.content.toString();
    if( doc.tags ){
      if( !Array.isArray(doc.tags) ){
        doc.tags = doc.tags.toString().split(',');
      }
      doc.tags = doc.tags.map(function(t){
        return t.replace(/^[\s　]+|[\s　]+$/g, '');
      });
    }else{
      doc.tags = [];
    }
    if( oldDoc ){
      doc._id = oldDoc._id;
      doc._rev = oldDoc._rev;
      doc.created_at = oldDoc.created_at;
      doc.created_by = oldDoc.created_by;
    }else{
      doc.created_at = now;
      doc.created_by = doc.updated_by;
      delete(doc._id);
      delete(doc._rev);
    }
    return doc;
  };

  var m = merge(app.middleware, ddoc.middleware);
  var db = app.middleware.db;
  var logger = app.logger;
  // common client side application
  app.get('*',
          js('js/posts.js'),
          css('css/posts.css'));

  // ':id' param precondition
  app.param('id', m.byId('id'));

  // -- public --
  // pages
  app.get('/',
          parallel(
            m.byUpdatedAt({perPage: config.postsPerPage})
          ),
          m.feedOrHtml('index.ejs'));

  app.get('/admin/',
          function(req, res, next){
            res.render('admin/index.ejs');
          });
  app.get('/admin/new',
          function(req, res, next){
            res.local('post', ddoc.docTemplates.post);
            res.render('admin/new.ejs');
          });

  app.get('/admin/edit/:id',
          function(req, res, next){
            res.render('admin/edit.ejs');
          });

  // permalink for post entries.
  app.get('/p/:id',  // get an entry
          m.byId('id'),
          function(req, res, next){
            // TODO; content negotiated response
            if( res.local('post').error ){
              raiseError(404);
            };
            res.render('show.ejs');
          }
         );

  app.post('/p/', // save a new entry
           function(req, res, next){
             logger.debug('Creating a new post');
             logger.debug(JSON.stringify(req.headers));
             logger.debug(JSON.stringify(req.body));
             var doc = makeDoc(req);
             app.db.save(doc, function(err, result){
               // TODO: content negotiated response
               if( err ){
                 res.send(JSON.stringify(err), 400);
               }else{
                 var location = (app.dynamicViewHelpers.url(req, res))('/p/' + result.id, {onlyPath: false});
                 doc._id = result.id;
                 doc._rev = result.rev;
                 res.send(JSON.stringify(doc), {
                   location: location
                 }, 201);
               }
             });
           });

  app.put('/p/:id',  // update an entry
          function(req, res, next){
            var doc = makeDoc(req, res.local('post').data);
            app.db.merge(doc, function(err, result){
               // TODO: content negotiated response
               if( err ){
                 res.send(JSON.stringify(err), 400);
               }else{
                 doc._id = result.id;
                 doc._rev = result.rev;
                 res.send(JSON.stringify(doc), 200);
               }
            });
          });

  app.del('/p/:id', // delete an entry
          function(req, res, next){
            var doc = res.local('post').data;
            app.db.remove(doc._id, doc._rev, function(err, result){
               if( err ){
                 res.send(JSON.stringify(err), 400);
               }else{
                 res.send(JSON.stringify(result), 200);
               }
            });
          });
  // apis
  app.get('/-/',
          m.byUpdatedAt(config),
          function(req, res, next){
            // TODO: content negotiation
            res.partial('parts/posts', {
              object: res.local('posts').data,
              as: this
            });
          });

  app.get('/-/count/tag',
          m.countByTag());

  app.get('/-/count/date',
          m.countByTag());
};

couchapp.loadAttachments(ddoc, path.join(__dirname, '_attachments'));
