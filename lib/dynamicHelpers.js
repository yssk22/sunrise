/*!
 * Sunrise - View dynamicHelper module
 * Copyright (c) 2011 Yohei Sasaki <yssk22@gmail.com>
 * MIT Licensed
 */
var path = require('path');
var merge = require('./utils').merge;

module.exports = {
  /**
   * Returns request object
   */
  request(req, res) {
    return req;
  },

  /**
   * Returns session object
   */
  session(req, res) {
    return req.session;
  },

  /**
   * Returns the user object
   */
  currentUser(req, res) {
    return req.currentUser;
  },

  /**
   * Returns true if the current user has logged in.
   */

  isLogin(req, res) {
    return req.isLogin;
  },

  /**
   * Returns the absolute URL for the given path
   *
   * @param {String} path the url path.
   * @api public
   */
  url(req, res) {
    var base = req.app.set('home');
    var secure = req.app.constructor.name == 'HTTPSServer';
    return (p, options) => {
      if( typeof(p) == 'object' ){
        options = p;
        p = undefined;
      }
      options = merge({
        fromAppRoot: true,
        onlyPath: true
      }, options);
      var s = '';
      if( options.onlyPath == false ){
        s = (secure ? "https" : "http") + "://" + req.header('host');
      }
      if( options.fromAppRoot && base != '/' ){
        if( base[base.length-1] == '/' ){
          s = s + base.substr(0, base.length - 1);
        }else{
          s = s + base;
        }
      }
      if( p ){
        if( p[0] == '/' ){
          return s + p;
        }else{
          return s + path.join(path.dirname(req.url), p);
        }
      }else{
        return s + req.url;
      }
    };
  },

  /**
   * Returns the translated message for the user locale.
   *
   * @param {String} msgId message id.
   * @api public
   */
  _(req, res) {
    return msgId => req.app.i18n.translate(msgId, req.locales);
  },


  title(req, res) {
    var _ = module.exports._(req, res);
    return t => {
      res.local("page").title = _(t);
      return t;
    };
  },

  canonical(req, res) {
    return url => {
      res.local("page").canonical = url;
      return url;
    };
  },

  feed(req, res) {
    return url => {
      res.local("page").feed = url;
      return url;
    };
  },

  js(req, res) {
    var app = this;
    var added = {};
    return function(...args) {
      var list = args;
      var l = res.local('page').javascripts;
      for(var i in list){
        var p = list[i][0] == '/' ? list[i] : path.join(app.route, list[i]);
        if( added[p] === undefined ){
          l.push(p); added[p] = true;
        }
      }
    };
  },

  css(req, res) {
    var app = this;
    var added = {};
    return function(...args) {
      var list = args;
      var l = res.local('page').stylesheets;
      for(var i in list){
        var p = list[i][0] == '/' ? list[i] : path.join(app.route, list[i]);
        if( added[p] === undefined ){
          console.log('added ' + p);
          l.push(p); added[p] = true;
        }
      }
    };
  }
};