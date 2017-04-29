/**
 * Sunrise - Application server, CouchApp x Node.js Integration
 *
 * Copyright (c) Yohei Sasaki <yssk22@gmail.com>
 * MIT Licensed
 */
var path = require('path');

var fs = require('fs');
var staticProvider = require('express').static;
var compiler = require('./middleware/compiler');

var clone = require('./utils').clone;
var merge = require('./utils').merge;
var abspath = require('./utils').abspath;
var parallel = require('./utils').parallel;
var createServer = require('./server').createServer;

var APP_PATH = [abspath(__dirname + '/../apps')];

/**
 * Application search path.
 * This can be congigured by '-a path' option on booting.
 */
exports.paths = APP_PATH;

/**
 * Resolve the given application path
 *
 * @param {String} apppath the path to CouchApp directory.
 * @param {Function} callback
 * @api public
 */
exports.resolveAppPath = apppath => {
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

exports.createAppFromDesignDoc = (db, designPath, options, callback) => {
  // TODO: create application instance from existing design document.
  throw new Error('TBD');
};

/**
 * Create a new sunrise application
 *
 * @param apppath {String} application path.
 * @param options {Object} installation option. (TBD)
 * @param callback {Function} callback function called after the application created.
 **/
exports.createApp = (apppath, options, callback) => {
  if( typeof(options) == 'function' ){
    callback = options;
    options = {};
  }
  if( callback == undefined ){
    callback = () => {};
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

  app.init = options => {
    if( app._initialized ){
      throw new Error("Duplicate initialization");
    }else{
      if( typeof(ddoc.init) == 'function' ){
        ddoc.init(app, options);
      }
      app._initialized = true;
    }
  };

  app.deploy = cb => {
    var couchapp = require('./sunrise').couchapp;
    var url = app.db.url;
    couchapp.createApp(ddoc, url, a => {
      app.db.exists((err, exists) => {
        if( err ){
          cb(err);
        }else{
          if( exists ){
            a.push(cb);
          }else{
            app.db.create((err, res) => {
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

  // setup middelwares
  if( options.middlewares ){
    options.middlewares.forEach(m => {
      app.use(m);
    });
  }

  app.use(app.router);
  // directory settings
  var dirs = merge({
    templates: "_attachments/templates",
    errors: "_attachmenets/errors",
    m10n: "_attachments/messages",
    static: "_attachments/",
  }, ddoc.dirs || {});
  // templates

  for(var i in dirs){
    dirs[i] = path.join(app.documentRoot, dirs[i]);
  }

  app.use(compiler({src: dirs.static, enable: ['less']}));
  app.use(staticProvider(dirs.static));
  app.set('views', dirs.templates);
  app.set('hints', false);
  app.set('errors', dirs.errors);
  app.set('view engine', 'ejs');
  if( path.existsSync(dirs.m10n) ){
    app.i18n.installMessages(dirs.m10n);
    app.logger.debug("Message resource installed: " + dirs.m10n);
  }else{
    app.logger.warn("Message resources are not found: " + dirs.m10n);
  }

  // static file hosting
  return app;
}
