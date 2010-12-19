var assert = require('assert');
var helper = require('./test_env');

var db = require('sunrise/db');

function setUp(){
  return db.connect();
}

module.exports = {
   "test uuid": function(){
      var db = setUp();
      db.uuid(function(err, id){
         assert.ok(id);
      });
   },

   "test docId": function(){
      var db = setUp();
      assert.eql(db.docId("bar", "foo"),     "foo:bar");
      assert.eql(db.docId("foo:bar", "foo"), "foo:bar");
   }
}