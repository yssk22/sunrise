var $ = require('sunrise').util;
var php = require('sunrise/vendor/php');
module.exports = function(app){
  var posts = app.model;
  var view = app.view;
  // administration
  app.all("*",
          $.javascripts("/javascripts/posts.js"),
          $.stylesheets("/stylesheets/posts.css"));

  app.get('/admin/new',
          $.parallel(
            $.title("posts.new"),
            posts.countByDate(),
            posts.editor({newDoc: true})
          ),
          view.render('admin/new.ejs')
         );

  app.get('/admin/',
          $.javascripts("/javascripts/admin.js"),
          $.parallel(
            posts.countByDate(),
            posts.byUpdatedAt({},{
              includeDraft: true,
              template: posts.config.ADMIN_LIST_TEMPLATE
            }),
            $.title("posts.admin")
          ),
          view.render('admin/index.ejs')
         );

  // partial views for list contents
  app.get('/admin/_/list/',
          posts.byUpdatedAt({},{
            template: posts.config.ADMIN_LIST_TEMPLATE
          }),
          function(req, res){
            res.writeHead(200);
            res.end(res.bindings.posts.toString());
          });


  app.get('/admin/edit/:id',
          $.parallel(
            $.title("posts.edit"),
            posts.countByDate(),
            posts.editor()
          ),
          view.render('admin/edit.ejs')
         );

  // Archives
  app.get('/archives/:year/:month/',
          $.parallel(
            function(req, res, next){
              res.bindings.page.title =
                php.strftime(req.app.i18n.translate("posts.archive_label", req.locale),
                             new Date(parseInt(req.params.year), parseInt(req.params.month) - 1, 1));
              next();
            },
            posts.countByTag(),
            posts.countByDate(),
            posts.byMonth()
          ),
          $.render('archive.ejs')
         );

  app.get('/',
          $.parallel(
            $.title("posts.recent"),
            posts.countByTag(),
            posts.countByDate(),
            posts.byUpdatedAt()
          ),
          view.render('index.ejs')
         );

  app.get('/t/:tagName',
          $.parallel(
            posts.countByDate(),
            posts.byUpdatedAt(),
            function(req, res, next){
              $.title(decodeURIComponent(req.params.tagName))(req, res, next);
            },
            function(req, res, next){
              var f = posts.byTag(req.params.tagName);
              f(req, res, next);
            }
          ),
          view.render('tagged_by.ejs')
         );

  app.get('/p/:id',
          $.parallel(
            posts.countByDate(),
            posts.byId({template: false})
          ),
          function(req, res, next){
            res.bindings.page.title = res.bindings.post.data.title;
            next();
          },
          view.render('show.ejs')
         );

  // Create/Update/Delete
  app.post('/p/',
           posts.save({
             success: $.redirect('/posts/')
           }),
           $.title("posts.new"),
           $.redirect('/posts/'));

  app.put('/p/:id',
          posts.save({
            merge: true,
            success: function(req, res, next){
              res.redirect('/posts/' + req.params.id);
            }
          }),
          $.title("posts.edit"),
          view.render('admin/edit.ejs'));

  app.del('/p/:id',
          posts.delete({
            success: $.redirect('/posts/admin/')
          }));

}