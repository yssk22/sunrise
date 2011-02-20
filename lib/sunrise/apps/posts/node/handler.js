var $ = require('sunrise').util;
var php = require(require('sunrise').dirname  + '/vendor/php');
module.exports = function(app){
  var posts = app.model;
  var view = app.view;


  function feedOrHtml(ejs){
    return view.render(function(req, res){
      if( req.params.format == 'rss' || req.query.format == 'rss'){
        return {
          view: 'feed.ejs',
          options: {
            layout: false
          }
        };
      }else{
        return ejs;
      }
    });
  }


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
            posts.countByTag(),
            posts.countByDate(),
            posts.byMonth(),
            $.title(function(req, res){
              return php.strftime(
                req.app.i18n.translate("posts.archive_label", req.locale),
                new Date(parseInt(req.params.year), parseInt(req.params.month) - 1, 1));
            }),
            $.feed(function(req, res){
              return [req.app.namespace, 'archives', req.params.year, req.params.month].join('/') + "/?format=rss";
            })
          ),
          feedOrHtml('archive.ejs')
         );

  app.get('/',
          $.parallel(
            posts.countByTag(),
            posts.countByDate(),
            posts.byUpdatedAt(),
            $.title("posts.recent"),
            $.feed(function(req, res){ return req.app.namespace + '/?format=rss'; })
          ),
          feedOrHtml('index.ejs')
         );

  app.get('/t/:tagName.:format?',
          $.parallel(
            posts.countByDate(),
            posts.byUpdatedAt(),
            function(req, res, next){
              var f = posts.byTag(req.params.tagName);
              f(req, res, next);
            },
            $.title(function(req, res){ return decodeURIComponent(req.params.tagName); }),
            $.feed(function(req, res){ return req.app.namespace + '/t/' + req.params.tagName + ".rss"; }),
            $.canonical(function(req,res){ return req.app.namespace + '/t/' + req.params.tagName; })
          ),
          feedOrHtml('tagged_by')
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
              res.redirect('/posts/p/' + req.params.id);
            }
          }),
          $.title("posts.edit"),
          view.render('admin/edit.ejs'));

  app.del('/p/:id',
          posts.delete({
            success: $.redirect('/posts/admin/')
          }));

}