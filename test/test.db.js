var assert = require('assert');
var env = require('./test_env');
var db = require('sunrise/db').connect({database: "test_sunrise"});

module.exports = {
   "setup": function(fn){
      db.reset(function(err, res){
         fn();
      });
   },

   "test uuid": function(){
      db.uuid(function(err, id){
         assert.ok(id);
      });
   },

   "test docId": function(){
      assert.eql(db.docId("bar", "foo"),     "foo:bar");
      assert.eql(db.docId("foo:bar", "foo"), "foo:bar");
   },

   "test load": function(){
      db.load(env.fixtureFile('test_db.json'), {
         is_fixture: true
      }, function(err, list){
         assert.equal(err, undefined);
         db.get('test_db:foo', function(err, doc){
            assert.equal(doc.title, 'foo');
         });
         db.get('test_db:bar', function(err, doc){
            assert.equal(doc.title, 'bar');
         });
      });
   }
}