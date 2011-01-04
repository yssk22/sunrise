var fs = require('fs'),
    path = require('path');
var php = require('sunrise/vendor/php');
var $ = require('jquery');

var DEFAULT_LOCALE = 'en';

var i18n = function(locale){
  this._defaultLocale = locale || DEFAULT_LOCALE;
  this._messages = {};
  this._messages[this._defaultLocale] = {};
};

i18n.prototype.__defineGetter__('defaultLocale', function(){
  return this._defaultLocale;
});


i18n.prototype.installMessages = function(dir, callback){
  var self = this;
  var stats = fs.statSync(dir);
  if( stats && stats.isDirectory() ){
    var files = fs.readdirSync(dir);
    for(var i in files){
      var file = path.join(dir, files[i]);
      var locale = path.basename(file, '.json');
      try{
        var defs = JSON.parse(fs.readFileSync(file));
        self.addMessages(defs, locale);
      }catch(e){
        return callback && callback(e);
      }
    }
  }
  return callback && callback();
};

i18n.prototype.addMessages = function(msgs, locale){
  if( locale == undefined ){
    locale = this._defaultLocale;
  }
  this._messages[locale] = $.extend({}, this._messages[locale], msgs);
}

i18n.prototype.translate = function(msg, locale){
  if( locale == undefined ){
    locale = this._defaultLocale;
  }
  var table = this._messages[locale] || this._messages[locale.split('-')[0]];
  var defaultTable = this._messages[this._defaultLocale];
  if( table ){
    return table[msg] || defaultTable[msg] || msg;
  }else{
    return defaultTable[msg] || msg;
  }
};

exports.i18n = i18n;

var regex = new RegExp(/([a-z]{1,8}(-[a-z]{1,8})?)\s*(;\s*q\s*=\s*(1|0\.[0-9]+))?/gi);
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
          obj.q = obj.q != '' ? parseFloat(obj.q) : 1.0;
          if( 0 <= obj.q && obj.q <= 1 ){
            list.push([obj.locale, obj.q]);
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