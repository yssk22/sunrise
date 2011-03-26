/**
 * CouchDB Integration as Node middleware.
 * Copyright (c) Yohei Sasaki <yssk22@gmail.com>
 * MIT Licensed
 */
var path = require('path');
var merge = require('../utils').merge;

BIND_DEFAULT_OPTIONS = {
  as: 'db$bind',       // bounded variable name
  success: undefined,  // template path or next middleware called after the response successes.
  failure: undefined,  // template path or next middleware called after the response fails.
  render:  undefined,  // the template path
  auth: undefined      // database connection auth info.
}

var View = require('express/lib/view/view');

module.exports = function(app){
  return {
    /**
     * Bind the cradle response to the local variable
     */
    bind: function(){
      var args = Array.prototype.slice.call(arguments);
      var funname = args.shift();
      var options = typeof(args[args.length-1]) == 'object' ? args.pop() : {};

      options = merge({}, BIND_DEFAULT_OPTIONS, options);
      return function(request, response, next){
        var db = app.db;
        args.push(function(err, data){
          var bound = {
            error: err,
            data: data
          };
          response.local(options.as, bound);
          var t = options.render;
          if( err ){
            t = options.failure || t;
          }else{
            // success
            t = options.success || t;
          }
          if( t ){
            if( typeof(t) == 'function'){
              t(request, response, next);
            }else{
              if( t[0] != '/' ){ // make absolute path.
                t = path.join(app.set('views'), t);
              }
              response.partial(t, {
                object: bound,
                as: options.as
              }, function(err, str){
                bound.toString = function(){
                  return err || str;
                };
                next();
              });
            }
          }else{
            next();
          }
        });
        db[funname].apply(db, args);
      };
    }
  };
};


// var helper = require('../helper');
// var $ = require('jquery');

// BIND_DEFAULT_OPTIONS = {
//   as : 'db$bind',
//   success : undefined,
//   failure : undefined,
//   template: undefined
// };


// /**
//  * Bind the result of db function.
//  *
//  * `options` are:
//  *
//  * - as         : bound variable name.
//  * - success    : the next middleware function when the db request finishes successfully.
//  * - failure    : the next middleware function when the db request fails.
//  * - onRequest  : the filter function invoked before the requesting to DB.
//  * - onResponse : the filter function invoked after the responding from DB.
//  */
// function bind(/* funName, [arg1, arg2, ...,], options */){
//   var args = Array.prototype.slice.call(arguments);
//   var funName = args.shift();
//   var options;
//   if( typeof(args[args.length-1]) == 'object'){
//     options = args.pop();
//   }
//   options = $.extend({}, BIND_DEFAULT_OPTIONS, options);
//   if( options.app == undefined ){
//     options.app = this.app;
//   }

//   return function(req, res, next){
//     var db = options.app.db || req.app.db;
//     var i18n = options.app.i18n || req.app.i18n;
//     // Web Context Object
//     var context = Object.create({
//       onRequest : options.onRequest || function(funName, args, cb){ cb(funName, args);},
//       onResponse : options.onResponse || function(err, data, args, cb){ cb(err, data);}
//     }, {
//       db       : { value: db  },
//       request  : { value: req },
//       response : { value: res }
//     });
//     // dynamic parameter evaluation
//     helper.dynamicObject(args, context, function(err, args){
//       if(err){
//         req.logger.error('dynamicObject failed', err);
//         // if error, do not access database
//         res.bindings[options.as] = { error: err };
//         options.failure ? options.failure(req, res, next) : next();
//       }else{
//         function response(err, data){ // callback
//           res.bindings[options.as] = {
//             error: err,
//             data: data
//           };
//           var template = options.template;
//           if( err ){
//             if( options.failure ){
//               if( typeof(options.failure) == 'string'){
//                 template = options.failure;
//               }else{
//                 return options.failure(req, res, next);
//               }
//             }
//           }else{
//             if( options.success ){
//               if( typeof(options.success) == 'string' ){
//                 template = options.success;
//               }else{
//                 return options.success(req, res, next);
//               }
//             }
//           }
//           // nothing callback specified, then next middleware called
//           res.logger.debug('using template: ' + template);
//           if( template ){
//             return res.render(template,
//                               $.extend({
//                                 layout: false,
//                                 appChain: options.app.getParents(),
//                                 locals: $.extend({
//                                   error: err,
//                                   data: data,
//                                   _: function(msgId){ // i18n for binding context.
//                                     return i18n.translate(msgId, req.locale);
//                                   }
//                                 }, res.bindings)
//                               }, options),
//                               function(err, str){
//                                 if( err ){
//                                   req.logger.error('Rendering Error : ' + template, err);
//                                 }
//                                 res.bindings[options.as] = Object.create({
//                                   toString: function(){
//                                     return err ? err.toString() : str;
//                                   }
//                                 }, {
//                                   error: {value: err},
//                                   data:  {value: data}
//                                 });
//                                 next();
//                               });
//           }else{
//             return next();
//           }
//         };


//         context.onRequest(funName, args, function(funName, args){
//           args.push(function(err, data){
//             res.logger.debug('=== DB binding [' + db.name + ']');
//             res.logger.debug(' function: ' + funName);
//             res.logger.debug('     args: ' + JSON.stringify(args));
//             res.logger.debug('    error: ' + JSON.stringify(err));
//             res.logger.debug('     data: ' + JSON.stringify(data));
//             res.logger.debug('    ====>: ' + options.as);
//             context.onResponse(err, data, args, function(_err, _data){
//               response(_err, _data);
//             });
//           });
//           db[funName].apply(db, args);
//         });
//       }
//     });
//   };
// };

// exports.bind = bind;
