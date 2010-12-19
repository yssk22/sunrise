/***
 * Helper library
 */
var $ = require('jquery');

/**
 * Evaluate object template in the context object.
 *
 */

function dynamicDocument(obj, context, callback){
   var type = typeof(obj);
   if( typeof(context) == 'function' ){
      callback = context;
      context = {};
   }
   if( obj == null ){
      callback(undefined, obj);
   }
   else if( type == 'object' ){
      // Array or Object
      if( Array.isArray(obj) ){
         obj = $.extend([], obj);
      }else{
         obj = $.extend({}, obj);
      }
      var wait = 0;
      var cb = function(err){
         wait -= 1;
         if( wait == 0 ){
            callback(err, obj);
         }
      };
      for(var i in obj){
         wait += 1;
         (function(k){
            process.nextTick(function(){
               dynamicDocument(obj[k], context, function(err, result){
                  obj[k] = result;
                  cb(err);
               });
            });
         })(i);
      }
   }else if( type == 'function' ){
      // Function
      obj(context, function(err, result){
         callback(err, result);
      });
   }else{
      // Number, String, or boolean
      callback(undefined, obj);
   }
}

exports.dynamicDocument = dynamicDocument;