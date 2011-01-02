require('./test_env');

var assert = require('assert');
var helper = require('sunrise/helper');

module.exports = {
  "test abspath" : function(){
    var base = process.cwd();
    assert.equal(base + "/foo/bar", helper.abspath("foo/bar"));
    assert.equal("/foo/bar", helper.abspath("/foo/bar"));
  },
  "test dynamicObject": function(){
    // number, string, boolean, null, undefined

    helper.dynamicObject(1, function(err, result){
      assert.eql(1, result);
    });

    helper.dynamicObject("String", function(err, result){
      assert.eql("String", result);
    });

    helper.dynamicObject(true, function(err, result){
      assert.eql(true, result);
    });

    helper.dynamicObject(null, function(err, result){
      assert.eql(null, result);
    });

    helper.dynamicObject(undefined, function(err, result){
      assert.eql(undefined, result);
    });

    /*
    // Array (Simple)
    helper.dynamicObject([1,2,3], function(err, result){
    assert.eql([1,2,3], result);
    });

    // Object (Simple)
    helper.dynamicObject({foo: "bar"}, function(err, result){
    assert.eql({foo: "bar"}, result);
    });
    */

    var ctx = {
      syncResult: "sync",
      asyncResult: "async"
    };

    // nested objects with synchronized function evaluation
    function syncFun(callback){
      callback(undefined, this.syncResult);
    }

    function asyncFun(callback){
      var self = this;
      return setTimeout(function(){
        callback(undefined, self.asyncResult);
      }, 100);
    }

    // function
    helper.dynamicObject(syncFun, ctx, function(err, result){
      assert.eql("sync", result);
    });
    helper.dynamicObject(asyncFun, ctx, function(err, result){
      assert.eql("async", result);
    });

    // nested objects
    var nested1 = [syncFun, asyncFun, 1];
    helper.dynamicObject(nested1, ctx, function(err, result){
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
    helper.dynamicObject(nested2, ctx, function(err, result){
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
    helper.dynamicObject(nested3, ctx, function(err, result){
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