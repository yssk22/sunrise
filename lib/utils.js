/**
 * Copyright (c) Yohei Sasaki <yssk22@gmail.com>
 * MIT Licensed
 */
var path = require('path'),
    fs = require('fs');
var $ = require('jquery'),
    log4js = require('log4js')();

/**
 * Merge the objects into the first argument.
 *
 * @api private
 */
exports.merge = function merge(){
  return $.extend.apply($, arguments);
};

/**
 * Clone the object. This is the deep copy implementation
 *
 * @param {Object} obj
 * @api private
 */
exports.clone = function clone(obj){
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

/**
 * Returns abstract path
 *
 * @param {String} p path
 * @return {String} abstract path
 */
exports.abspath = function abspath(p){
  return p.indexOf('/') == 0 ? p : path.join(process.cwd(), p);
};

/**
 * Bind the context with the given target object.
 *
 * @param {Object} target object bound with.
 * @param {Object} context context object.
 * @param {Function} callback the callback function which receives (err, bound) arguments.
 *
 *
 */
exports.bindContext = function bindContext(target, context, callback){
  var type = typeof(target);
  if( typeof(context) == 'function' ){
    callback = context;
    context = {};
  }
  if( target == null ){ // null or undefined
    callback(null, target);
  }else if( type == 'object' ){  // object or array
    // Array or Object
    target = exports.clone(target);
    var wait = 0;
    var cb = function(err){
      wait -= 1;
      if( wait == 0 ){
        callback(err, target);
      }
    };
    for(var i in target){
      if( target.hasOwnProperty(i) ){
        wait += 1;
        (function(k){
          process.nextTick(function(){
            bindContext(target[k], context, function(err, result){
              if( result === undefined ){
                delete(target[k]);
              }else{
                target[k] = result;
              }
              cb(err);
            });
          });
        })(i);
      }
    }
  }else if( type == 'function' ){ // Function
    target.call(context, callback);
  }else{ // Number, String, or boolean
    callback(null, target);
  }
};

/**
 * Returns the logger.
 * This function is an wrapper for log4js to reduce dependencies.
 *
 * @param {String} name logger category name.
 * @return {Object} logger instance
 * @api public
 */
exports.getLogger = function getLogger(name){
  return log4js.getLogger(name || "sunrise");
};

/**
 * Load JSON file from the given filepath.
 *
 * @param {String} filepath path to json file.
 * @param {Function} callback
 * @api public
 */
exports.loadJSON = function(filepath, callback){
  fs.readFile(path, function(err, data){
    if( err ){
      callback(e);
    }else{
      try{
        callback(null, JSON.parse(data));
      }catch(e){
        callback(e);
      }
    }
  });
};

/**
 * Synchronized version of loadJSON
 */
exports.loadJSONSync = function(filepath){
  var obj = JSON.parse(fs.readFileSync(filepath));
  return obj;
};


/**
 * Parallel executions for function list.
 */
exports.parallel = function(){
  var args = Array.prototype.slice.call(arguments);
  var callback = args.pop();
  var remains = args.length;
  if( callback == undefined || remains < 1 ){
    throw new TypeError('one or more functions must be passed to `parallel`');
  }
  args.forEach(function(f){
    process.nextTick(function(){
      f(function(){
        remains--;
        if( remains == 0 ){
          callback();
        }
      });
    });
  });
};