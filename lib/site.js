/**
 * Application Container module
 *
 * Copyright (c) Yohei Sasaki <yssk22@gmail.com>
 * MIT Licensed
 */
var path = require('path');
var express = require('express');

var server = require('./server');
var logger = require('./utils').getLogger(),
    merge = require('./utils').merge,
    abspath = require('./utils').abspath;
var createApp = require('./app').createApp;


// Session Object Map
MemoryStore = require('connect').middleware.session.MemoryStore;
var SUPPORTED_SESSIONS = {
  "memory": MemoryStore
}

exports.createSite = function(sitepath, options){
  options = merge({}, require('./config'), options);
  // session impl
  var sessFun = SUPPORTED_SESSIONS[options.web.session.store];
  var session = null;
  try{
    session = express.session({store: new sessFun(options.web.session.options),
                               secret: options.web.session.secret || "sunrise"});
  }catch(e){
    logger.warn("Session store '" + options.web.session.store + "' is not supported. use memory store.", e);
    session = express.session({store: new MemoryStore(),
                               secret: "sunrise"});
  }
  var site = createApp(abspath(sitepath), {
    middlewares: [
      express.logger(),
      express.cookieParser(),
      session,
      express.bodyParser(),
      express.methodOverride(),
      function(req, res, next){
        res.local('page', {
          title: '',
          feed: '',
          canonical: '',
          locale: req.locale,
          javascripts: [],
          stylesheets: []
        });
        next();
      }
    ]
  });

  /**
   * Install application on the given url.
   */
  site.install = function(apppath, rootUrl, options){
    options = merge({
      rootUrl: rootUrl
    }, options);
    var app = createApp(apppath, options);
    app.page = merge({
      app: app,
    }, pageMiddleware);
    site.use(app.set('home'), app);
    return app;
  };

  site.page = merge({
    app: site
  },pageMiddleware);
  return site;
};

var pageMiddleware = {
  /**
   * Set the fixed page title.
   *
   * @param {String} title the title string or messageId (for i18n)
   * @api public
   */
  title : function(title){
    return pageAttributeSetter(this.app, 'title', title, 'translate');
  },

  /**
   * Set the fixed page title.
   *
   * @param {String} canonicalUrl the canonical url of the page
   * @api public
   */
  canonical : function(canonicalUrl){
    return pageAttributeSetter(this.app, 'canonical', canonicalUrl, 'absoluteUrl');
  },


  /**
   * Set the feed url.
   *
   * @param {String} feedUrl the feed url of the page
   * @api public
   */
  feed : function(feedUrl){
    return pageAttributeSetter(this.app, 'feed', feedUrl, 'absoluteUrl');
  },

  /**
   * Set the javascripts for the page.
   *
   * @api public
   */
  javascripts : function(){
    var list = arguments;
    var app = this.app;
    return function(req, res, next){
      var l = res.local('page').javascripts;
      for(var i in list){
        var p = list[i];
        if( l.indexOf(path) < 0 ){
          l.push(path.join(app.route, p));
        }
      }
      next();
    };
  },

  /**
   * Set the stylesheets for the page.
   *
   * @api public
   */
  stylesheets : function(){
    var list = arguments;
    var app = this.app;
    return function(req, res, next){
      var l = res.local('page').stylesheets;
      for(var i in list){
        var p = list[i];
        if( l.indexOf(path) < 0 ){
          l.push(path.join(app.route, p));
        }
      }
      next();
    };
  }
};


function pageAttributeSetter(app, attr, val, convert){
  return function(req, res, next){
    var v = val;
    if( typeof(v) == 'function'){
      v = val(req, res);
    }
    switch(convert){
    case "translate":
      v = app.i18n.translate(v, req.locale);
      break;
    case "absoluteUrl":
      v = "http://" + req.header('host') + path.join(app.route, v);
      break;
    }
    res.local('page')[attr] = v;
    next();
  };
}