var couchapp = require('couchapp');
var path = require('path');
var ddoc = {
  _id: "_design/sunrise" ,
  // CouchApp funs
  views: {},
  shows: {},
  lists: {},
  // Sunrise Funs
  dirs: {}
};

module.exports = ddoc;

// site initialize script
ddoc.init = function(site){

  site.get('/', function(req, res, next){
    res.render('index');
  });

  // install applications as you like
  // site.install('posts', '/posts/', {database: 'posts'});
};

//
// Custom templateDir
//
// ddoc.dirs.templates = '_attachments/templates';
//
// Error document Dir.
// {statusCode}.ejs will be rendered with layout.
//
// ddoc.dirs.errors = '_attachments/errors';
//
// Static file Dir
//
// ddoc.dirs.static = '_attachments'
//

if( !module.parent ){
  var compiler = require('sunrise').middleware.compiler;
  compiler.include(
    __dirname + '/_attachments/vendor/blueprint/blueprint/screen.css',
    __dirname + '/_attachments/vendor/blueprint/blueprint/print.css'
  );
  require('sunrise').boot(__dirname);
}