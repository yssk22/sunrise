/**
 * Copyright (c) Yohei Sasaki <yssk22@gmail.com>
 * MIT Licensed
 */
var $ = require('jquery');

/**
 * Merge the objects into the first argument.
 *
 * @api private
 */
exports.merge = function(){
  return $.extend.apply($, arguments);
}

/**
 * Clone the object. This is the deep copy implementation
 *
 * @param {Object} obj
 * @api private
 */
exports.clone = function(obj){
  if( obj === null || obj === undefined ){
    return obj;
  }else{
    if( typeof(obj) == 'object' ){
      if( Array.isArray(obj) ){
        return $.extend.call($, true, [], obj);
      }else{
        return $.extend.call($, true, {}, obj);
      }
    }else{
      // not a object.
      return obj;
    }
  }
};