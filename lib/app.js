/**
 * CouchApp x Node.js Integration
 *
 * Copyright (c) Yohei Sasaki <yssk22@gmail.com>
 * MIT Licensed
 */
var path = require('path'),
    fs = require('fs');
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

function makeApp(apppath, options, callback){
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
  app.deploy = function(cb){
    var url = app.db.url;
    couchapp.createApp(ddoc, url, function(a){
      a.push(cb);
    });
  };

  app.set('home', rootUrl);
  // setup middelwares
  if( options.middlewares ){
    options.middlewares.forEach(function(m){
      app.use(m);
    });
  }

  // router
  if( typeof(ddoc.routes) == 'function' ){
    app.use(app.router);
    ddoc.routes(app);
  };
  // templates
  var templateDir = ddoc.templates || "_attachments/templates";
  app.set('views', path.join(app.documentRoot, templateDir));
  app.set('view engine', 'ejs');
  // static file hosting

  return app;
};
