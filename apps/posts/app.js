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
ddoc.views = require('./views');

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
    doc.is_draft = doc.is_draft == 'true';
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

  function renderList(req, res, next){
    // TODO: content negotiation
    res.partial('parts/posts', {
      object: res.local('posts').data,
      as: this
    });
  }

  var m = merge(app.middleware, ddoc.middleware);
  var db = app.middleware.db;
  var logger = app.logger;
  // common client side application
  app.get('*',
          js('js/posts.js'),
          css('css/posts.css'));

  // ':id' param precondition
  app.param('id', m.byId('id'));

  // Public URIs
  app.get('/',
          parallel(
            m.byUpdatedAt({perPage: config.postsPerPage}),
            m.countByDate()
          ),
          m.feedOrHtml('index.ejs'));

  app.get('/a/:year/:month/',
          function(req, res, next){
            try{
              var y = parseInt(req.params.year);
              var m = parseInt(req.params.month[0] == '0' ? req.params.month.substr(1) : req.params.month);
              if( m <= 0 || m > 12 ){
                throw new Error("invalid month parameter");
              }
            }catch(e){
              logger.warn('Invalid parameter request - ' + e + ' (' + req.url + ')');
              return res.redirect('/');
            }
            req.query.startkey = (new Date(y, m - 1, 1)).toJSON();
            req.query.endkey = (new Date(y, m , 1)).toJSON();
            req.query.descending = false;
            return next();
          },
          parallel(
            m.byUpdatedAt({perPage: 'unlimited'}),
            m.countByDate()
          ),
          m.feedOrHtml('by_month.ejs'));


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

  // Public APIs
  app.get('/-/',
          m.byUpdatedAt({perPage: config.postsPerPage}),
          renderList);

  app.get('/-/count/tag',
          m.countByTag());

  app.get('/-/count/date',
          m.countByTag());


  // Admin URIs
  app.get('/admin/',
          m.byUpdatedAt({
            perPage: config.postsPerPage,
            includeDraft: true
          }),
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


  // Admin APIs
  app.get('/admin/-/',
          m.byUpdatedAt({
            perPage: config.postsPerPage,
            includeDraft: true
          }),
          renderList);

};

couchapp.loadAttachments(ddoc, path.join(__dirname, '_attachments'));
