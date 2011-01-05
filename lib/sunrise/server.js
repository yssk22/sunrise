var join = require('path').join;
var express = require('express');
var $ = require('jquery');

/**
 * Server extension
 */
var Server = exports = module.exports = function Server(options, middleware){
  express.Server.call(this, middleware);
  options = $.extend({
    namespace: '/',
    database: 'sunrise',
    locale: 'en'
  }, options);


  var self = this;
  this._namespace = options.namespace; // TODO: replace for set('home', options.namespace) ???
  this._logger = require('log4js')().getLogger(options.namespace);
  this._i18n = new (require('./i18n').i18n)(options.locale); // TODO default lang
  this._db = require('./db').connect(options.database);
  this.dynamicHelpers(require('./dynamicHelpers'));
  this.helpers(require('./viewHelpers'));
  this.use(function(req, res, next){
    req.logger = res.logger = self._logger;
    req.locale = require('./i18n').resolveLocales(req)[0] || self._i18n.defaultLocale;
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
};
Server.prototype.__proto__ = express.Server.prototype;

/**
 * Return the database connection
 *
 * @return {Object}
 * @api public
 */
Server.prototype.__defineGetter__('db', function(){
  return this._db;
});

/**
 * Return the i18n object.
 *
 * @return {String}
 * @api public
 */
Server.prototype.__defineGetter__('i18n', function(){
  return this._i18n;
});

/**
 * Return the logger object.
 *
 * @return {String}
 * @api public
 */
Server.prototype.__defineGetter__('logger', function(){
  return this._logger;
});

/**
 * Return the namespace path.
 *
 * @return {String}
 * @api public
 */
Server.prototype.__defineGetter__('namespace', function(){
  return this._namespace;
});


exports.createServer = function(){
  var args = Array.prototype.slice.call(arguments);
  var options = args.pop();
  return new Server(options, args);
}