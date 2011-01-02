var assert = require('assert');
var env = require('./test_env');
var db = require('sunrise/db').connect("test_sunrise");

module.exports = {
  "setup": function(fn){
    db.reset(function(err, res){
      fn();
    });
  },

  "test uuid": function(next){
    db.uuid(function(err, id){
      assert.ok(id);
      next();
    });
  },

  "test load": function(next){
    db.load(env.fixtureFile('test_db.json'), {
      is_fixture: true
    }, function(err, list){
      assert.equal(err, undefined);
      db.get('foo', function(err, doc){
        assert.equal(doc.title, 'foo');
        db.get('bar', function(err, doc){
          assert.equal(doc.title, 'bar');
          next();
        });
      });
    });
  }
}