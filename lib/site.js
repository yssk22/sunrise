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
    abspath = require('./utils').abspath,
    parallel = require('./utils').parallel;
var createApp = require('./app').createApp;

// application specific middleware
var pageMiddlewre = require('./middleware/page'),
    dbMiddleware = require('./middleware/db'),
    authMiddleware = require('./middleware/auth');

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

  var middleware = [
    express.cookieParser(),
    session,
    express.bodyParser(),
    express.methodOverride(),
    function(req, res, next){
      req.locales = req.app.i18n.resolveLocales(req);
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
  ];

  if( process.env.NODE_ENV != 'test' ){
    middleware.unshift(express.logger());
  }

  var site = createApp(abspath(sitepath), {
    middlewares: middleware
  });
  site._installedApps = {};
  site.error(require('./middleware/error')(site.set('errors')));
  site.helpers(require('./helpers'));
  site.dynamicHelpers(require('./dynamicHelpers'));

  /**
   * Install application on the given url.
   */
  site.install = function(apppath, rootUrl, options){
    options = merge({
      rootUrl: rootUrl,
      menuOrder: Object.keys(site._installedApps).length
    }, options);
    var app = createApp(apppath, options);
    app._installOptions = options;
    app.init();
    var appkey = app.ddoc._id.split('/')[1];
    site.use(rootUrl, app);
    site._installedApps[appkey] = app;

    // merge helpers
    var helpers = {};
    helpers['$' + appkey] = function(req, res){
      console.log('setup dynamicViewHelpers - ' + appkey);
      var self = this;
      var obj = {};
      if( app.dynamicViewHelpers ){
        for(var k in app.dynamicViewHelpers){
          if( k[0] != '$' ){
            obj[k] = app.dynamicViewHelpers[k].call(self, req, res);
          }
        }
      }
      // not only dynamicViewHeleprs but also viewHelpers are added dynamically,
      // because they are registered on the same key (${appname});
      if( app.viewHelpers ){
        for(var k in app.viewHelpers){
          obj[k] = app.viewHelpers[k];
        }
      }
      return obj;
    };

    site.dynamicHelpers(helpers);
    // update installedApps helper for view.
    site.helpers({
      installedApps: Object.keys(site._installedApps).map(function(k){
        var app = site._installedApps[k];
        var ddoc = app.ddoc;
        return {
          name: ddoc.name || k,
          description: ddoc.description,
          version: ddoc.version,
          author: ddoc.author,
          home: app.set('home'),
          menuOrder: app._installOptions.menuOrder,
          menuName: app._installOptions.menuName || ddoc.name || ddoc._id.split('/')[1]
        };
      }).sort(function(a, b){ return a.menuOrder > b.menuOrder; })
    });

    // update helpers in all applicaitons
    Object.keys(site._installedApps).forEach(function(k){
      var app = site._installedApps[k];
      app.helpers(site.viewHelpers);
      app.dynamicHelpers(site.dynamicViewHelpers);
    });
    return app;
  };

  /**
   * Deploy all installed applications
   */
  site.deployAll = function(cb){
    var apps = Object.keys(site._installedApps).map(function(k){
      return site._installedApps[k];
    });
    apps.unshift(site);
    var funs = apps.map(function(a){ return a.deploy; });
    funs.push(cb);
    parallel.apply(this, funs);
  };

  site.init();
  return site;
};
