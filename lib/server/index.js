var join = require('path').join;
var merge = require('../utils').merge,
    clone = require('../utils').clone,
    i18n = require('../i18n').i18n,
    db = require('../db');
var express = require('express');

/**
 * Sunrise server constructor. A server object has common features.
 *
 * - server.namespace : current application namespace
 * - server.db        : database connection instance.
 * - server.logger    : loggger instance
 * - server.i18n      : i18n instance
 *
 * Sunrise site and applications are based on this `server`.
 *
 */
function constructor(options, middleware){
  options = merge({
    database: 'sunrise',
    locale: 'en'
  }, options);

  // common features
  this._logger = require('log4js')().getLogger(options.database);
  this._i18n = new (require('../i18n').i18n)(options.locale); // TODO default lang
  this._db = db.createConnection(options.database);
};

function defineProperties(klass){
  /**
   * Return the database connection
   *
   * @return {Object}
   * @api public
   */
  klass.prototype.__defineGetter__('db', function(){
    return this._db;
  });

  /**
   * Return the i18n object.
   *
   * @return {String}
   * @api public
   */
  klass.prototype.__defineGetter__('i18n', function(){
    return this._i18n;
  });

  /**
   * Return the logger object.
   *
   * @return {String}
   * @api public
   */
  klass.prototype.__defineGetter__('logger', function(){
    return this._logger;
  });

  /**
   * Return the namespace path.
   *
   * @return {String}
   * @api public
   */
  klass.prototype.__defineGetter__('namespace', function(){
    return this._namespace;
  });
}


var HTTPServer = function HTTPServer(options, middleware){
  express.HTTPServer.call(this, middleware);
  constructor.call(this, options, middleware);
};
HTTPServer.prototype.__proto__ = express.HTTPServer.prototype;
defineProperties(HTTPServer);

var HTTPSServer = function HTTPSServer(options, middleware){
  express.HTTPSServer.call(this, options, middleware);
  constructor.call(this, options, middleware);
};
HTTPSServer.prototype.__proto__ = express.HTTPSServer.prototype;
defineProperties(HTTPSServer);

exports.HTTPServer = HTTPServer;
exports.HTTPSServer = HTTPSServer;
exports.createServer = function(){
  if( typeof(options) == 'object' && options.ssl ) {
    return new HTTPSServer(options, Array.prototype.slice.call(arguments, 1));
  } else {
    return new HTTPServer(Array.prototype.slice.call(arguments));
  }
};

// TODO moved to somewhere;
/*

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
*/
