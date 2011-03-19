var assert = require('assert'),
    path = require('path');
var env = require('./env');
var createSite = require('site').createSite,
    abspath = require('utils').abspath;
var app = require('app');
app.paths.push(abspath(path.join(__dirname, '/fixtures/app/')));

module.exports = {
  "test createSite": function(){
    var site = createSite(path.join(__dirname, '/fixtures/site/test_site'));
    assert.response(site, {
      url: '/', method: "GET"
    }, {
      body: "Hello World"
    });
  },

  "test session": function(){
    var site = createSite(path.join(__dirname, '/fixtures/site/test_site'));
    assert.response(site, {
      url: '/test_session', method: "GET"
    }, function(res){
      var cookie = env.parseSetCookie(res);
      assert.eql('test_session = 1', res.body);
      assert.isNotNull(cookie['connect.sid']);
      assert.response(site, {
        url: '/test_session', method: 'GET',
        headers: {
          'cookie': 'connect.sid=' + cookie['connect.sid'].value
        }
      }, {
        body: 'test_session = 2'
      });
    });
  },

  "test installed application": function(){
    var site = createSite(path.join(__dirname, '/fixtures/site/test_site'));
    site.install('test_app', '/test_app/');
    assert.response(site, {
      url: '/test_app/', method: "GET"
    }, {
      body: "Hello World"
    });
    assert.response(site, {
      url: '/test_app/test', method: "GET"
    }, {
      body: "This is Test Application.\n"
    });
  }

};
