var path = require('path');
var util = require('util');
var $ = require('jquery');
var express = require('express');
var server = require('./server');
var logger = require('./logger').getLogger('server');
var createApp = require('./app').createApp;
require('./server');

var MemoryStore = require('connect/middleware/session/memory');
var SupportedSessions = {
  "memory": require('connect/middleware/session/memory')
}

exports.createSite = function(baseDir, options){
  options = $.extend({}, require('./config'), options);
  var site = server.createServer({
    database:  options.database,
    namespace: '/'
  });

  var sessionFun = SupportedSessions[options.web.session.store];
  var session = undefined;
  if( sessionFun ){
    logger.debug('session configuration:' + require('util').inspect(options.web.session.options));
    session = express.session({
      store: new MemoryStore(
        options.web.session.options || {}
      )
    });
  }else{
    throw new Error("Session Store \'" + options.web.session.store + "' is not supported.");
  }


  // TODO: access log configuration : store the CouchDB?
  site.configure(function(){
    site.set('views', path.join(baseDir, 'views'));
    site.use(express.compiler({ src: path.join(baseDir, 'public'), enable: ['less'] }));
    site.use(express.bodyDecoder());
    site.use(express.cookieDecoder());
    site.use(express.methodOverride());
    site.use(session);
    site.use(site.router);
    site.use(express.staticProvider(path.join(baseDir, 'public')));
  });
  site.configure('development', function(){
    site.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  });

  site.configure('production', function(){
    site.use(express.errorHandler());
  });

  site.setup = function(mod, callback){
    if( typeof mod.setup == 'function' ){
      mod.setup(site, callback);
    }else{
      throw new Error('site script needs to implement \'setup\' method.');
    }
  };

  // application installation;
  site.install = function(apppath, options, callback){
    if( typeof(options) == 'function' ){
      callback = options;
      options = {};
    }
    createApp(apppath, options, function(err, app){
      if( err ){
        logger.error("Error installing " + apppath, err);
      }else{
        site.use(app);
        callback && callback(app);
      }
    });
  };

  return site;
};