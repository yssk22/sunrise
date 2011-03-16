var join = require('path').join;
var express = require('express');
var $ = require('jquery');
var createApp = require('./app').createApp;
require('./view');

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


Server.prototype.install = function(apppath, options, done){
  var self = this;
  if( typeof(options) == 'function' ){
    done = options;
    options = {};
  }
  createApp(apppath, options, function(err, app){
    if( err ){
      self.logger.error("Error installing " + apppath, err);
    }else{
      self.logger.info("Installed " + apppath + " on " + app.namespace);
      self.use(app.namespace, app);
    }
    done && done(err, app);
  });
};

Server.prototype.getParents = function(){
  function _getParents(app, tree){
    tree.unshift(app);
    if( app.parent ){
      return _getParents(app.parent, tree);
    }else{
      return tree;
    }
  }
  return _getParents(this, []);
}

exports.createServer = function(){
  var args = Array.prototype.slice.call(arguments);
  var options = args.pop();
  return new Server(options, args);
}