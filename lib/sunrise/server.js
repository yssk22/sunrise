var $ = require('jquery');
var express = require('express');

function sunriseHelper(logger){
   return function(req, res, next){
      req.logger = res.logger = logger;
      res.bindings = {
         page: {
            /* SEO options */
            title: "",
            description: "",
            keywords: "",
            /* JS/CSS */
            javascripts: [],
            stylesheets: []
         }
      };
      next();
   };
}

var SupportedSessions = {
   "memory": require('connect/middleware/session/memory')
}

exports.createServer = function(baseDir, options){
   if( options == undefined ){
      options = $.extend({}, require('./config').web);
   }
   var logger = require('log4js')().getLogger(options.logger);
   var app = express.createServer();
   var sessionFun = SupportedSessions[options.session.store];
   var session = undefined;
   if( sessionFun ){
      session = express.session({
         store: new sessionFun(
            options.session.options || {}
         )
      });
   }else{
      throw new Error("Session Store \'" + options.session.store + "' is not supported.");
   }

   // TODO: session cofinguration
   // TODO: access log configuration : store the CouchDB?
   app.configure(function(){
      app.set('views', baseDir + 'views');
      app.use(express.compiler({ src: baseDir + '/public', enable: ['less'] }));
      app.use(express.bodyDecoder());
      app.use(express.cookieDecoder());
      app.use(session);
      app.use(sunriseHelper());
      app.use(app.router);
      app.use(express.staticProvider(baseDir + '/public'));
   });
   app.configure('development', function(){
      app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
   });

   app.configure('production', function(){
      app.use(express.errorHandler());
   });

   // TODO: decide freely configurable or not.
   /**
    * if restritions required, then this may change to:
    *
    *   require(baseDir + 'app').setUp({
    *     get: function(){
    *       app.get.apply(arguments);
    *     }
    *     post: ....
    *   });
    *
    */
   // application module setup by hand.
   app.setUp = function(mod){
      if( typeof mod.setUp == 'function' ){
         mod.setUp(app);
      }else{
         throw new Error('module needs to implement setUp method.');
      }
   };

   // application installation without any configurations;
   app.install = function(name){
      throw new Error('not supported yet.');
   };

   return app;
};