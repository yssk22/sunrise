var path = require('path');
var couchapp = require('couchapp');
var merge = require('sunrise').utils.merge;
var parallel = require('sunrise').middleware.utils.parallel,
    js = require('sunrise').middleware.utils.js,
    css = require('sunrise').middleware.utils.css;

var ddoc = {
  _id: "_design/posts" ,
  views: {},
  shows: {},
  lists: {},
  docTemplates: {
    posts: {
      type: 'post',
      title: '*Untitled*',
      content: '',
      tags: [],
      is_draft: false
    }
  }
};

module.exports = ddoc;

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


ddoc.init = function(app){
  function makeDoc(req, _new){
    var now = new Date();
    var doc = merge({}, ddoc.docTemplates.posts, req.body,
                    {
                      update_at: now,
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
    if( _new ){
      doc.created_at = now;
      doc.created_at = doc.updated_at;
      delete(doc._id);
      delete(doc._rev);
    }
    return doc;
  }

  var m = merge(app.middleware, require('./middleware'));
  var db = app.middleware.db;

  // common client side application
  app.get('*',
          js('js/posts.js'),
          css('css/posts.css'));

  // -- public --
  // pages
  app.get('/',
          parallel(
            m.feedOrHtml('index.ejs')));

  app.get('/admin/',
          function(req, res, next){
            res.render('admin/index.ejs');
          });
  app.get('/admin/new',
          function(req, res, next){
            res.render('admin/new.ejs');
          });

  app.get('/admin/edit/:id',
          function(req, res, next){
            res.render('admin/edit.ejs');
          });

  // permalink for post entries.
  app.get('/p/:id',  // get an entry
          function(req, res, next){
            console.log(req.params.id);
            db.bind('get', req.params.id, {as: 'post'})(req, res, next);
          },
          function(req, res, next){
            res.render('show.ejs');
          }
         );
  app.put('/p/:id'); // update an entry
  app.del('/p/:id'); // delete an entry
  app.post('/p/', // save a new entry
           function(req, res, next){
             var doc = makeDoc(req);
             req.app.db.save(doc, function(err, result){
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

  // apis
  app.get('/-/',
          m.byUpdatedAt());

  app.get('/-/count/tag',
          m.countByTag());

  app.get('/-/count/date',
          m.countByTag());
};

couchapp.loadAttachments(ddoc, path.join(__dirname, '_attachments'));
