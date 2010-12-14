var $ = require('jquery');
var assert = require('assert');
/***
 * DO NOT use helper, which sets the test configuraton.
 * this test script just tests config function.
 *
 * // var helper = require('./helper');
 *
 ***/
require.paths.push(__dirname + '/../lib');
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
      config.load(__dirname + '/fixtures/test_conf_overwrite');
      assert.ok(config.db);
      assert.eql("192.168.1.1", config.db.host);
      assert.eql(15984, config.db.port);
      assert.eql("sunrise", config.db.database);
      assert.eql("admin", config.db.user);
      assert.eql("password", config.db.password);
   },

   "non existance directory does not affects anything": function(){
      var before = $.extend({}, config);
      config.load("path/to/non/existance");
      var after = $.extend({}, config);
      assert.eql(before, after);
   }
};

