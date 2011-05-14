var assert = require('assert');
var env = require('./env');
var db = require('db');

module.exports = {
  "test createConnection": function(){
    assert.isDefined(db.createConnection);
    var instance = db.createConnection('foo');
    assert.isNotNull(instance);
    assert.isNotNull(instance.connection);
    assert.isNotNull(instance.url);
    assert.isNotNull(instance.deployApp);
    assert.isNotNull(instance.uuid);
  },

  "test uuid": function(){
    var instance = db.createConnection('foo');
    instance.uuid(function(err, id){
      assert.isNotNull(id);
    });
  },

  "test deployApp": function(){
    // TODO
  },

  "test load": function(){
    // TODO
  },

  "test reset": function(){
    // TODO
  },

  "test server": function(){
    var server = db.server;
    assert.isNotNull(server);
  },

  "test userDB": function(){
    db.userDB(function(userDB){
      assert.isNotNull(userDB);
      assert.eql('_users', userDB.name);
    });
  }
};