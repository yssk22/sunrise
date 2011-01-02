var assert = require('assert');
var env = require('./test_env');
var createServer = require('sunrise/server').createServer;

module.exports = {
  "test Server default instance": function(){
    var s = createServer();
    assert.eql(s.namespace, '/');
    assert.eql(s.i18n.defaultLocale, 'en');
    assert.isNotNull(s.i18n);;
    assert.isNotNull(s.db);
    assert.isNotNull(s.logger);

    s.get('/foo', function(req, res, next){
      assert.eql(req.locale, 'en');
      assert.isNotNull(req.logger);
      assert.isNotNull(res.bindings);
      res.writeHead(200);
      res.end("Hello World");
    });

    assert.response(s, {
      url: '/foo', method: "GET"
    }, {
      body: "Hello World"
    });
  },

  "test Server with namespaced": function(){
    var s = createServer({namespace: '/foo'});
    s.get('/bar', function(req, res, next){
      assert.eql(req.url, '/foo/bar');
      res.writeHead(200);
      res.end("Hello World");
    });
    assert.response(s, {
      url: '/foo/bar', method: "GET"
    }, {
      body: "Hello World"
    });

    assert.response(s, {
      url: '/bar', method: "GET"
    }, {
      status: 404
    });
  }
}
