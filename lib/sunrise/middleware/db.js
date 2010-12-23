var helper = require('../helper');
var $ = require('jquery');
var logger = require('log4js')().getLogger('db');

BIND_DEFAULT_OPTIONS = {
   as : 'db$bind',
   success : undefined,
   failure : undefined
};

/**
 * Bind the result of db function.
 *
 * `options` are:
 *
 * - as      : bound variable name.
 * - success : the next middleware function when the db request finishes successfully.
 * - failure : the next middleware function when the db request fails.
 *
 */
exports.bind = function(/* db, funName, [arg1, arg2, ...,], options */){
   var args = Array.prototype.slice.call(arguments);
   var db = args.shift();
   var funName = args.shift();
   var options;
   if( typeof(args[args.length-1]) == 'object'){
      options = args.pop();
   }
   options = $.extend({}, BIND_DEFAULT_OPTIONS, options);
   return function(req, res, next){
      // dynamic parameter evaluation
      var context = {
         req: req,
         res: res
      };
      helper.dynamicObject(args, context, function(err, obj){
         if(err){
            // if error, do not access database
            res.bindings[options.as] = { error: err };
            options.failure ? options.failure(req, res, next) : next();
         }else{
            obj.push(function(err, result){ // callback
               res.bindings[options.as] = {
                  error: err,
                  result: result
               };
               if( err ){
                  if( options.failure ){
                     return options.failure();
                  }
               }else{
                  if( options.success ){
                     return options.success();
                  }
               }
               // nothing callback specified, then next middleware called
               return next();
            });
            db[funName].apply(db, obj);
         }
      });
   };
};