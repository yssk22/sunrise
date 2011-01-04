var assert = require('assert');
var env = require('./test_env');
var createSite = require('sunrise/site').createSite;


module.exports = {
  "test createSite": function(){
    var site = createSite(env.fixtureFile('test_site'));
    assert.eql(typeof site.setup, 'function');
    assert.eql(typeof site.install, 'function');
  },

  "test site start": function(){
    var site = createSite(env.fixtureFile('test_site'));
    site.setup({
      setup: function(site){
        site.get('/', function(req, res, next){
          res.writeHead(200, {'Content-Type': "text/plain"});
          res.end("Hello World");
        });
      }
    });
    assert.response(site, {
      url: '/', method: "GET"
    }, {
      body: "Hello World"
    });
  },

  "test installed application": function(){
    var site = createSite(env.fixtureFile('test_site'));
    site.install(env.fixtureFile('test_app'), function(){
      assert.response(site, {
        url: '/test_app/foo', method: 'GET'
      }, {
        body: "Hello World"
      });
      assert.response(site, {
        url: '/test_app/session', method: 'POST'
      }, {
        body: "Session Test"
      });
      assert.response(site, {
        url: '/test_app/multifilter', method: 'GET'
      }, {
        body: 'Multifilter GET'
      });
      assert.response(site, {
        url: '/test_app/multifilter', method: 'POST'
      }, {
        body: 'Multifilter POST'
      });
    });
  }
};
