var path = require('path');
var $ = require('jquery');
var logger = require('./logger').getLogger('app');
var express = require('express');
var APP_PATH = [__dirname + '/../../apps'];

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
  options = $.extend({
    // TODO: will be configurable by apppath/sunrise.json
    database    : path.basename(apppath),
    namespace   : "/" + path.basename(apppath),
    modelPath   : path.join(apppath, 'node/model.js'),
    handlerPath : path.join(apppath, 'node/handler.js'),
    messageDir  : path.join(apppath, 'messages'),
    withDeploy  : true
  }, options);


  // application variables
  var app = require('./server').createServer(options);
  // initialize
  var extension = {};
  var _wait = 0;
  function wait(fun){
    _wait++;
    fun(function(){
      _wait--;
      if( _wait == 0 ){
        // extends application
        path.exists(options.handlerPath, function(exists){
          if( exists ){
            try{
              var handler = require(options.handlerPath);
              handler(app);
              callback(undefined, app);
            }catch(e){
              callback(e);
            }
          }else{
            callback(undefined, app);
          }
        });
      }
    });
  }

  // couchapp installation
  if( options.withDeploy ){
    wait(function(done){
      app.db.deployApp(apppath, function(err){
        if( err ){
          callback(err);
        }else{
          done();
        }
      });
    });
  }

  // creating database middleware
  // message
  wait(function(done){
    path.exists(options.messageDir, function(exists){
      if( exists ){
        app.i18n.installMessages(options.messageDir, function(err){
          if( err ){
            callback(e);
          }else{
            done();
          }
        });
      }else{
        done();
      }
    });
  });

  // model
  wait(function(done){
    path.exists(options.modelPath, function(exists){
      if( exists ){
        try{
          app.db.__proto__ = $.extend({}, require('./middleware/db'), require(options.modelPath));
          done();
        }catch(e){
          callback(e);
        }
      }else{
        done();
      }
    });
  });
}