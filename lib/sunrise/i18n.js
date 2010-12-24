var php = require('sunrise/vendor/php');
var $ = require('jquery');

var DEFAULT_LOCALE = 'en';

var i18n = function(locale){
   this._default = locale || DEFAULT_LOCALE;
   this._messages = {};
   this._messages[this._default] = {};
};

i18n.prototype.addMessages = function(msgs, locale){
   if( locale == undefined ){
      locale = this._default;
   }
   this._messages[locale] = $.extend({}, this._messages[locale], msgs);
}

i18n.prototype.translate = function(msg, locale){
   if( locale == undefined ){
      locale = this._default;
   }
   var table = this._messages[locale];
   var defaultTable = this._messages[this._default];
   if( table ){
      return table[msg] || defaultTable[msg] || msg;
   }else{
      return defaultTable[msg] || msg;
   }
}

exports.i18n = i18n;

var regex = new RegExp(/([a-z]{1,8}(-[a-z]{1,8})?)\s*(;\s*q\s*=\s*(1|0\.[0-9]+))?/gi);
exports.getLocales = function(req){
   var str = req.headers['Accept-Language'];
   if( str ){
      var values = str.split(',');
      var list = [];
      for(var i in values){
         if( values[i].match(regex) ){
            var q = parseFloat(RegExp.$4 || '1.0');
            if( 0 <= q && q <= 1 ){
               list.push([RegExp.$1, q]);
            }
         }
      }
      return list.sort(function(a, b){
         return a[1] < b[1];
      }).map(function(a){
         return a[0];
      });
   }else{
      return undefined;
   }
}