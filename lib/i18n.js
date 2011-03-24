/*!
 * Sunrise - Internationalization
 * Copyright (c) 2011 Yohei Sasaki <yssk22@gmail.com>
 * MIT Licensed
 */

var fs = require('fs'),
    path = require('path');
var merge = require('./utils').merge;

var DEFAULT_LOCALE = 'en';

/**
 * i18n constructor
 *
 * @param {Stirng} locale the default locale string.
 *
 */
var i18n = function(locale){
  this._defaultLocale = locale || DEFAULT_LOCALE;
  this._messages = {};
  this._messages[this._defaultLocale] = {};
};

/**
 * Returns the default locale.
 */
i18n.prototype.__defineGetter__('defaultLocale', function(){
  return this._defaultLocale;
});


/**
 * Install the message resources from the given directory.
 *
 * @param {String} dir the message resources directory.
 */
i18n.prototype.installMessages = function(dir){
  var self = this;
  var stats = fs.statSync(dir);
  if( stats && stats.isDirectory() ){
    var files = fs.readdirSync(dir);
    for(var i in files){
      var file = path.join(dir, files[i]);
      var locale = path.basename(file, '.json');
      var defs = JSON.parse(fs.readFileSync(file));
      self.addMessages(defs, locale);
    }
  }else{
    throw new Error(dir + ' is not a directory.');
  }
  return this;
};

/**
 * Add message table to the given locale.
 *
 * @param {Object} msgs Message table hash.
 * @param {String} locale the locale string.
 *
 */
i18n.prototype.addMessages = function(msgs, locale){
  if( locale == undefined ){
    locale = this._defaultLocale;
  }
  this._messages[locale] = merge(this._messages[locale], msgs);
  return this;
};

/**
 * Translate the message.
 *
 * @param {String} msgId message id.
 * @param {String} locale locale string.
 * @return {String} translated message or message id.
 * @api public
 */
i18n.prototype.translate = function(msgId, locale){
  if( locale == undefined ){
    locale = this._defaultLocale;
  }
  var table = this._messages[locale] || this._messages[locale.split('-')[0]];
  var defaultTable = this._messages[this._defaultLocale];
  if( table ){
    return table[msgId] || defaultTable[msgId] || msgId;
  }else{
    return defaultTable[msgId] || msgId;
  }
};

i18n.prototype.resolveLocales = function(req){
  var locales = exports.resolveLocales(req);
  for(var i in locales){
    if( this._messages[locales[i]]){
      return locales[i];
    }
  }
  return this._defaultLocale;
}


exports.i18n = i18n;

var regex = new RegExp(/([a-z]{1,8}(-[a-z]{1,8})?)\s*(;\s*q\s*=\s*(1|0\.[0-9]+))?/gi);

/**
 * Resolve the user locale from the http request
 *
 * @param {Object} req http request object.
 *
 */
exports.resolveLocales = function(req){
  var str = req.headers['accept-language'];
  if( str ){
    var values = str.split(',');
    var list = [];
    for(var i in values){
      var m = values[i].replace(regex, '{"locale": "$1", "q": "$4"}');
      if( m ){
        try{
          var obj = JSON.parse(m);
          var loc = obj.locale;
          var q = obj.q != '' ? parseFloat(obj.q) : 1.0;
          if( 0 <= obj.q && obj.q <= 1 ){
            list.push([loc, q]);
          }
          // loc-code type locale
          var loc2 = loc.split('-');
          if( loc2[0] != loc ){
            list.push([loc2[0], q]);
          }
        }catch(e){
          // pass invalid header value
        }
      }
    }
    return list.sort(function(a, b){
      return a[1] < b[1];
    }).map(function(a){
      return a[0];
    });
  }else{
    return [];
  }
}