var $ = require('sunrise').util;
var php = require('sunrise/vendor/php');
module.exports = function(app){
  var posts = app.model;
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
          $.render(posts.template_dir + '/admin/new.ejs')
         );

  app.get('/admin/',
          $.javascripts("/javascripts/admin.js"),
          $.parallel(
            posts.countByDate(),
            posts.byUpdatedAt({},{
              template: posts.config.ADMIN_LIST_TEMPLATE
            }),
            $.title("posts.admin")
          ),
          $.render(posts.template_dir + '/admin/index.ejs')
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
          $.render(posts.template_dir + '/admin/edit.ejs')
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
            posts.countByDate(),
            posts.byMonth()
          ),
          $.render(posts.template_dir + '/index.ejs')
         );

  app.get('/',
          $.parallel(
            $.title("posts.recent"),
            posts.countByDate(),
            posts.byUpdatedAt()
          ),
          $.render(posts.template_dir + '/index.ejs')
         );


  app.get('/:id',
          $.parallel(
            posts.countByDate(),
            posts.byId({template: false})
          ),
          function(req, res, next){
            res.bindings.page.title = res.bindings.post.data.title;
            next();
          },
          $.render(posts.template_dir + '/show.ejs')
         );

  // Create/Update/Delete
  app.post('/',
           posts.save({
             success: $.redirect('/posts/')
           }),
           $.title("posts.new"),
           $.redirect('/posts/'));

  app.put('/:id',
          posts.save({
            merge: true,
            success: function(req, res, next){
              res.redirect('/posts/' + req.params.id);
            }
          }),
          $.title("posts.edit"),
          $.render(posts.template_dir + '/admin/edit.ejs'));

  app.del('/:id',
          posts.delete({
            success: $.redirect('/posts/admin/')
          }));

}