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

// application specific middleware
var pageMiddlewre = require('./middleware/page'),
    dbMiddleware = require('./middleware/db');

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
    site.use(app.set('home'), app);
    return app;
  };
  return site;
};
