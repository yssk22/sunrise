/**
 * CouchApp x Node.js Integration
 *
 * Copyright (c) Yohei Sasaki <yssk22@gmail.com>
 * MIT Licensed
 */
var path = require('path'),
    fs = require('fs');
var couchapp = require('couchapp');
var staticProvider = require('express').static;
var compiler = require('./middleware/compiler');

var clone = require('./utils').clone,
    merge = require('./utils').merge,
    abspath = require('./utils').abspath,
    parallel = require('./utils').parallel;
var createServer = require('./server').createServer;

var APP_PATH = [abspath(__dirname + '/../apps')];

exports.paths = APP_PATH;

/**
 * Resolve the given application path
 *
 * @param {String} apppath the path to CouchApp directory.
 * @param {Function} callback
 *
 */
exports.resolveAppPath = function(apppath){
  if( apppath[0] == '/' ){
    // absolute path
    if( path.existsSync(apppath) ){
      return path.normalize(apppath);
    }else{
      throw new Error(apppath + ' is not found.');
    }
  }else{
    // relative path
    // search the path from APP_PATH.
    for(var i=0, len=APP_PATH.length; i<len; i++){
      var dir = path.join(APP_PATH[i], apppath);
      if( path.existsSync(dir) ){
        return path.normalize(dir);
      }
    }
    throw new Error(apppath + ' is not found in ' + JSON.stringify(APP_PATH));
  }
};

exports.createAppFromDesignDoc = function(db, designPath, options, callback){
  throw new Error('TBD');
};

/**
 * Create a new sunrise application
 *
 * @param apppath {String} application path.
 * @param options {Object} installation option. (TBD)
 * @param callback {Function} callback function called after the application created.
 **/
exports.createApp = function(apppath, options, callback){
  if( typeof(options) == 'function' ){
    callback = options;
    options = {};
  }
  if( callback == undefined ){
    callback = function(){};
  }
  apppath = exports.resolveAppPath(apppath);
  return makeApp(apppath, options || {}, callback);
};

function makeApp(apppath, options){
  var rootUrl = options.rootUrl || '/';
  if( rootUrl[0] != '/' ){
    throw new Error('rootUrl must start with "/"');
  }
  if( rootUrl[rootUrl.length-1] != '/' ){
    rootUrl = rootUrl + '/';
  }
  var app  = createServer(options);
  var ddoc = require(path.join(apppath, 'app.js'));
  app.documentRoot = apppath;
  app.ddoc = ddoc;

  app.init = function(options){
    if( app._initialized ){
      throw new Error("Duplicate initialization");
    }else{
      if( typeof(ddoc.init) == 'function' ){
        ddoc.init(app, options);
      }
      app._initialized = true;
    }
  };

  app.deploy = function(cb){
    var url = app.db.url;
    couchapp.createApp(ddoc, url, function(a){
      app.db.exists(function(err, exists){
        if( err ){
          cb(err);
        }else{
          if( exists ){
            a.push(cb);
          }else{
            app.db.create(function(err, res){
              if( err ){
                cb(err);
              }else{
                a.push(cb);
              }
            });
          }
        }
      });
    });
  };


  app.middleware = {
    page: require('./middleware/page')(app),
    db: require('./middleware/db')(app)
  };

  app.set('home', rootUrl);

  // setup middelwares
  if( options.middlewares ){
    options.middlewares.forEach(function(m){
      app.use(m);
    });
  }

  app.use(app.router);
  // directory settings
  var dirs = merge({
    templates: "_attachments/templates",
    errors: "_attachmenets/errors",
    static: "_attachments/"
  }, ddoc.dirs || {});
  // templates

  app.use(compiler({src: path.join(app.documentRoot, dirs.static), enable: ['less']}));
  app.use(staticProvider(path.join(app.documentRoot, dirs.static)));
  app.set('views', path.join(app.documentRoot, dirs.templates));
  app.set('errors', path.join(app.documentRoot, dirs.errors));
  app.set('view engine', 'ejs');

  // static file hosting
  return app;
};
