var path = require('path');
var util = require('util');
var $ = require('jquery');
var express = require('express');
var server = require('./server');
var logger = require('./logger').getLogger('server');
require('./server');

var MemoryStore = require('connect/middleware/session/memory');
var SupportedSessions = {
  "memory": require('connect/middleware/session/memory')
}

exports.createSite = function(options){
  options = $.extend({}, require('./config'), options);
  var site = server.createServer({
    database:  options.database,
    namespace: '/'
  });
  var sessionFun = SupportedSessions[options.web.session.store];
  var session = undefined;
  if( sessionFun ){
    session = express.session({
      store: new MemoryStore(
        options.web.session.options || {}
      ),
      secret: options.web.session.secret || "sunrise"
    });
  }else{
    throw new Error("Session Store \'" + options.web.session.store + "' is not supported.");
  }


  // TODO: access log configuration : store the CouchDB?
  site.configure(function(){
    site.set('views', path.join(__dirname, 'default/views'));
    site.use(express.bodyDecoder());
    site.use(express.cookieDecoder());
    site.use(express.methodOverride());
    site.use(session);
    site.use(function(req, res, next){
      req.logger = res.logger = site._logger;
      req.locale = require('./i18n').resolveLocales(req)[0] || site._i18n.defaultLocale;
      req.currentUser = function(){
        if( req.session && req.session.auth ){
          return req.session.auth;
        }else{
          return {
            userId: null,
            userName: 'Guest'
          };
        }
      };
      req.isLogin = function(){
        return req.currentUser().userId !== null;
      };

      res.bindings = {
        page: {
          /* SEO options */
          title: "",
          description: "",
          keywords: "",
          /* JS/CSS */
          javascripts: [],
          stylesheets: [],
          locale: req.locale
        }
      };
      next();
    });
    site.use(site.router);
  });

  site.configure('development', function(){
    //site.error(express.errorHandler({ dumpExceptions: true, showStack: true }));
  });

  site.configure('production', function(){
    // site.error(express.errorHandler({ showStack: true }));
  });

  return site;
};