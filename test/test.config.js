/*!
 * Sunrise - Configuration
 * Copyright (c) 2011 Yohei Sasaki <yssk22@gmail.com>
 * MIT Licensed
 */
var assert = require('assert');
var merge = require('utils').merge;
var config = require('config');

module.exports = {
  "test defaultConfiguration": function(){
    // default config is stored on ../conf directory;
    assert.isNotNull(config.db);
    assert.isNotNull(config.web);
    assert.isNotNull(config.auth);

    assert.eql(config.db.host, '127.0.0.1');
    assert.eql(config.web.port, 8888);
    assert.eql(config.auth.oauthProviders.twitter.consumerKey, 'you need prepare consumerKey');
  },

  "test reset and load": function(){
    config.reset();
    assert.eql(config.web.port, 8888);

    // load another configuration
    config.load(__dirname + '/fixtures/conf_test/');
    assert.eql(config.web.port, 3000);

    config.reset();
    assert.eql(config.web.port, 8888);
  }
};

