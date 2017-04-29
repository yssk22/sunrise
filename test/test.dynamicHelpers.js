/*!
 * Sunrise - View dynamicHelper module
 * Copyright (c) 2011 Yohei Sasaki <yssk22@gmail.com>
 * MIT Licensed
 */
var assert = require('assert');

var path = require('path');
var env = require('./env');
var createSite = require('site').createSite;
var abspath = require('utils').abspath;
var app = require('app');
app.paths.push(abspath(path.join(__dirname, '/fixtures/app/')));


module.exports = {
  "test session": function(){
    var site = createSite(path.join(__dirname, '/fixtures/site/test_site'));
    var test_app = site.install('test_app', '/test_app/');

    assert.response(site, {url: '/test_dynamicHelpers/session'},
                    res => {
                      var obj = JSON.parse(res.body);
                      assert.isNotNull(obj.lastAccess);
                      assert.isNotNull(obj.cookie);
                    });
  },

  "test currentUser": function(){
    var site = createSite(path.join(__dirname, '/fixtures/site/test_site'));
    var test_app = site.install('test_app', '/test_app/');

    assert.response(site, {url: '/test_dynamicHelpers/currentUser'},
                    {body: 'Guest\n'});
  },

  "test isLogin": function(){
    var site = createSite(path.join(__dirname, '/fixtures/site/test_site'));
    var test_app = site.install('test_app', '/test_app/');

    assert.response(site, {url: '/test_dynamicHelpers/isLogin'},
                    {body: 'false\n'});
  },

  "test url": function(){
    var site = createSite(path.join(__dirname, '/fixtures/site/test_site'));
    var test_app = site.install('test_app', '/test_app/');
    assert.response(site, {
      url: '/test_dynamicHelpers/url',
      headers: {
        host: 'example.com'
      }
    }, res => {
      var results = res.body.split('\n');
      assert.eql(results[0], '/foo');
      assert.eql(results[1], 'http://example.com/foo');
      assert.eql(results[2], 'http://example.com/foo');
      assert.eql(results[3], '/test_dynamicHelpers/bar');
      assert.eql(results[4], 'http://example.com/test_dynamicHelpers/bar');
      assert.eql(results[5], 'http://example.com/test_dynamicHelpers/bar');
      assert.eql(results[6], '/test_dynamicHelpers/url');
      assert.eql(results[7], 'http://example.com/test_dynamicHelpers/url');
    });
  },

  "test _": function(){
    var site = createSite(path.join(__dirname, '/fixtures/site/test_site'));
    var test_app = site.install('test_app', '/test_app/');
    assert.response(site, {
      url: '/test_dynamicHelpers/_',
      headers: {
        'accept-language' : 'ja'
      }
    }, res => {
      var results = res.body.split('\n');
      assert.eql(results[0], 'テスト');
      assert.eql(results[1], 'notfound');
    });
  }
}
