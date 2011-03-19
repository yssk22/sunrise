var assert = require('assert');
var utils = require('utils');

module.exports = {
  "test merge": function(){
    var a = {
      foo: 'hoge'
    };
    var b = {
      bar: 'hogehoge'
    };
    var c = {
      piyo: 'hogehogehoge'
    };
    utils.merge(a, b, c);
    assert.eql(a.foo, 'hoge');
    assert.eql(a.bar, 'hogehoge');
    assert.eql(a.piyo, 'hogehogehoge');
  },

  "test clone": function(){
    // for Objects
    var a = {
      foo: 'hoge'
    };
    var a1 = utils.clone(a);
    assert.eql(a.foo, a1.foo);
    a.foo = 'changed';
    assert.notEqual(a.foo, a1.foo);

    // for Array
    a = ['foo'];
    a1 = utils.clone(a);
    assert.eql(a[0], a1[0]);
    a[0] = 'changed';
    assert.notEqual(a[0], a1[0]);

    // for complexed type
    a = [{foo: 'hoge'}];
    a1 = utils.clone(a);
    assert.eql(a[0].foo, a1[0].foo);
    a[0].foo = 'changed';
    assert.notEqual(a[0].foo, a1[0].foo);

    // null, undefined, int, string
    assert.eql(null, utils.clone(null));
    assert.eql(undefined, utils.clone(undefined));
    assert.eql(1, utils.clone(1));
    assert.eql("hoge", utils.clone("hoge"));
  },

  "test abspath": function(){
    var root = process.cwd();
    assert.eql(utils.abspath('/path/to/foo/bar'), '/path/to/foo/bar');
    assert.eql(utils.abspath('foo'), root + '/foo');
  },

  "test bindContext": function(){
    // number, string, boolean, null, undefined

    utils.bindContext(1, function(err, result){
      assert.eql(1, result);
    });

    utils.bindContext("String", function(err, result){
      assert.eql("String", result);
    });

    utils.bindContext(true, function(err, result){
      assert.eql(true, result);
    });

    utils.bindContext(null, function(err, result){
      assert.eql(null, result);
    });

    utils.bindContext(undefined, function(err, result){
      assert.eql(undefined, result);
    });

    // Array (Simple)
    utils.bindContext([1,2,3], function(err, result){
      assert.eql([1,2,3], result);
    });

    // Object (Simple)
    utils.bindContext({foo: "bar"}, function(err, result){
      assert.eql({foo: "bar"}, result);
    });

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
    utils.bindContext(syncFun, ctx, function(err, result){
      assert.eql("sync", result);
    });
    utils.bindContext(asyncFun, ctx, function(err, result){
      assert.eql("async", result);
    });

    // nested objects
    var nested1 = [syncFun, asyncFun, 1];
    utils.bindContext(nested1, ctx, function(err, result){
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
    utils.bindContext(nested2, ctx, function(err, result){
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
    utils.bindContext(nested3, ctx, function(err, result){
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
  },

  "test parallel": function(){
    var a = 0;
    utils.parallel(function(done){
      setTimeout(function(){
        a++;
        done();
      }, 100);
    }, function(done){
      setTimeout(function(){
        a++;
        done();
      }, 200);
    }, function(){
      assert.eql(2, a);
    });
  }

};