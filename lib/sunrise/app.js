var path = require('path'),
    fs = require('fs');
var $ = require('jquery');
var logger = require('./logger').getLogger('app');
var express = require('express');
var staticProvider = require('./middleware/staticProvider');

var APP_PATH = [__dirname + '/apps'];

exports.paths = APP_PATH;

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
  exports.resolveAppPath(apppath, function(err, apppath){
    if( err ){
      callback(err);
    }else{
      makeApp(apppath, options, callback);
    }
  });
}

exports.resolveAppPath = function(apppath, callback){
  var search_paths = $.extend([], APP_PATH);
  var found_dir = null;
  function _search(){
    if( search_paths.length == 0 ){
      callback(new Error(apppath + ' is not found.'));
    }else{
      var dir = search_paths.pop();
      var abspath = path.join(dir, apppath);
      path.exists(abspath, function(exists){
        if( exists ){
          callback(undefined, abspath);
        }else{
          _search();
        }
      });
    }
  }

  if( apppath[0] != '/' ){
    _search();
  }else{
    path.exists(apppath, function(exists){
      if( exists ){
        callback(undefined, apppath);
      }else{
        callback(new Error(apppath + ' is not found.'));
      }
    });
  }
}

function makeApp(apppath, options, callback){
  try{
    var config = fs.readFileSync(path.join(apppath, 'sunrise.json'));
    options = $.extend(JSON.parse(config), options);
  }catch(e){
    if( e.errno != 2 && e.errno != 9 ){
      logger.error("failed to load " + path.join(apppath, 'sunrise.json'), e);
    }
  }

  options = $.extend({
    database    : encodeURIComponent(path.basename(apppath)),
    namespace   : "/" + path.basename(apppath),
    modelPath   : path.join(apppath, 'node/model.js'),
    handlerPath : path.join(apppath, 'node/handler.js'),
    helperPath  : path.join(apppath, 'node/helper.js'),
    dhelperPath : path.join(apppath, 'node/dhelper.js'),
    messageDir  : path.join(apppath, 'messages'),
    viewPath    : path.join(apppath, '_attachments/templates'),
    staticPath  : path.join(apppath, '_attachments'),
    withDeploy  : true
  }, options);

  // application variables
  var app = require('./server').createServer(options);
  app.dirname = apppath;
  app.logger.debug('initializing application');
  app.set('views', options.viewPath);
  app.use(express.compiler({src: options.staticPath, enable: ['less']}));
  app.use(express.staticProvider(options.staticPath));
  app.view = $.extend( { app: app },
                       require('./middleware/view'));


  var extension = {};
  var _wait = 0;
  function wait(fun){
    _wait++;
    fun(function(){
      _wait--;
      if( _wait == 0 ){
        // extends application
        try{
          if( exists(options.handlerPath) ){
            app.logger.debug('handler installing');
            var handler = require(options.handlerPath);
            if( typeof(handler) == 'function' ){
              handler(app);
            }else{
              throw new Error('handler module must be a function');
            }
          }else{
            app.logger.info('handler not found: ' + options.handlerPath);
          }
          callback(undefined, app);
        }catch(e){
          callback(e, null);
        }
      }
    });
  }


  // couchapp installation
  if( options.withDeploy ){
    wait(function(done){
      app.logger.info('deploying the couchapp application.');
      app.db.deployApp(apppath, function(err){
        if( err ){
          callback(err);
        }else{
          done();
        }
      });
    });
  }


  if( exists(options.messageDir) ){
    wait(function(done){
      app.i18n.installMessages(options.messageDir, function(err){
        if( err ){
          callback(e);
        }else{
          done();
        }
      });
    });
  }

  if( exists(options.dhelperPath) ){
    app.dynamicHelpers(require(options.dhelperPath));
  }
  if( exists(options.helperPath) ){
    app.helpers(require(options.helperPath));
  }
  if( exists(options.modelPath) ){
    app.model = $.extend( { app: app },
                          require('./middleware/db'),
                          require(options.modelPath));
  }

  wait(function(done){
    process.nextTick(function(){
      done();
    });
  });
}

function exists(path){
  try{
    fs.statSync(path);
    return true;
  }catch(e){
    return false;
  }
}