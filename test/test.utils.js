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
  }
}