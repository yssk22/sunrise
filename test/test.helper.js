require('./test_env');

var assert = require('assert');
var helper = require('sunrise/helper');

module.exports = {
   "test dynamicDocument": function(){
      // number, string, boolean, null, undefined

      helper.dynamicDocument(1, function(err, result){
         assert.eql(1, result);
      });

      helper.dynamicDocument("String", function(err, result){
         assert.eql("String", result);
      });

      helper.dynamicDocument(true, function(err, result){
         assert.eql(true, result);
      });

      helper.dynamicDocument(null, function(err, result){
         assert.eql(null, result);
      });

      helper.dynamicDocument(undefined, function(err, result){
         assert.eql(undefined, result);
      });

      /*
      // Array (Simple)
      helper.dynamicDocument([1,2,3], function(err, result){
         assert.eql([1,2,3], result);
      });

      // Object (Simple)
      helper.dynamicDocument({foo: "bar"}, function(err, result){
         assert.eql({foo: "bar"}, result);
      });
      */

      var ctx = {
         syncResult: "sync",
         asyncResult: "async"
      };

      // nested objects with synchronized function evaluation
      function syncFun(context, callback){
         callback(undefined, context.syncResult);
      }

      function asyncFun(context, callback){
         return setTimeout(function(){
            callback(undefined, context.asyncResult);
         }, 100);
      }

      // function
      helper.dynamicDocument(syncFun, ctx, function(err, result){
         assert.eql("sync", result);
      });
      helper.dynamicDocument(asyncFun, ctx, function(err, result){
         assert.eql("async", result);
      });

      // nested objects
      var nested1 = [syncFun, asyncFun, 1];
      helper.dynamicDocument(nested1, ctx, function(err, result){
         assert.eql("sync", result[0]);
         assert.eql("async", result[1]);
         assert.eql(1, result[2]);
         // confirm no changes are in input object;
         assert.eql(syncFun, nested1[0]);
         assert.eql(asyncFun, nested1[1]);
         assert.eql(1, nested1[2]);
      });
      var nested2 = {
         a: syncFun,
         b: asyncFun,
         c: 1
      };
      helper.dynamicDocument(nested2, ctx, function(err, result){
         assert.eql("sync", result.a);
         assert.eql("async", result.b);
         assert.eql(1, result.c);

         // confirm no changes are in input object;
         assert.eql(syncFun, nested2.a);
         assert.eql(asyncFun, nested2.b);
         assert.eql(1, nested2.c);
      });

      var nested3 = {
         a: [syncFun, asyncFun, 1],
         b: {
            a: [syncFun, asyncFun, 1]
         }
      };
      helper.dynamicDocument(nested3, ctx, function(err, result){
         assert.eql("sync", result.a[0]);
         assert.eql("async", result.a[1]);
         assert.eql(1, result.a[2]);
         assert.eql("sync", result.b.a[0]);
         assert.eql("async", result.b.a[1]);
         assert.eql(1, result.b.a[2]);

         // confirm no changes are in input object;
         assert.eql(syncFun, nested3.a[0]);
         assert.eql(asyncFun, nested3.a[1]);
         assert.eql(1, nested3.a[2]);
         assert.eql(syncFun, nested3.b.a[0]);
         assert.eql(asyncFun, nested3.b.a[1]);
         assert.eql(1, nested3.b.a[2]);
      });
   }

}