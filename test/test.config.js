var helper = require('./helper');
var config = require('sunrise/config');

module.exports = {
   "test default": function(test){
      test.ok(config.db);
      test.equal("127.0.0.1", config.db.host);
      test.equal(5984, config.db.port);
      test.equal("sunrise", config.db.database);
      test.equal("admin", config.db.user);
      test.equal("password", config.db.password);
      test.done();
   },

   "test config override" : function(test){
      config.load(__dirname + '/../fixtures/test_conf');
      test.ok(config.db);
      test.equal("192.168.1.1", config.db.host);
      test.equal(15984, config.db.port);
      // other fields not specified in the conf dir are as default.
      test.equal("sunrise", config.db.database);
      test.equal("admin", config.db.user);
      test.equal("password", config.db.password);
      test.done();
   },
}