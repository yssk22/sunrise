var assert = require('assert');
var helper = require('./helper');
var config = require('sunrise/config');

module.exports = {
   "assert configuraiton": function(){
      assert.ok(config.db);
      assert.eql("127.0.0.1", config.db.host);
      assert.eql(5984, config.db.port);
      assert.eql("sunrise", config.db.database);
      assert.eql("admin", config.db.user);
      assert.eql("password", config.db.password);
      assert.eql();

      // overide
      config.load(__dirname + '/fixtures/test_conf');
      assert.ok(config.db);
      assert.eql("192.168.1.1", config.db.host);
      assert.eql(15984, config.db.port);
      assert.eql("sunrise", config.db.database);
      assert.eql("admin", config.db.user);
      assert.eql("password", config.db.password);

   }
};

