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

exports.createServer = function(baseDir, options){
   if( options == undefined ){
      options = {};
   }
   var logger = options.logger;   // application logger
   if( logger == undefined ){
      logger = require('log4js')().getLogger();
   }

   var app = express.createServer();
   // TODO: session cofinguration
   // TODO: access log configuration : store the CouchDB?
   app.configure(function(){
      app.set('views', baseDir + 'views');
      app.use(express.compiler({ src: baseDir + '/public', enable: ['less'] }));
      app.use(express.bodyDecoder());
      app.use(express.cookieDecoder());
      // TODO session makes expresso test loop...?
      // app.use(express.session());
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