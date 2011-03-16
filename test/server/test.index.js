var assert = require('assert');
var env = require('../env');
var createServer = require('server').createServer;

module.exports = {
  "test createServer": function(){
    var s = createServer();
    assert.isNotNull(s);
    assert.isNotNull(s.i18n);
    assert.isNotNull(s.db);
    assert.isNotNull(s.logger);

    assert.eql(s.db.name, 'sunrise');
    assert.eql(s.i18n.defaultLocale, 'en');

    s.get('/foo', function(req, res, next){
      res.writeHead(200);
      res.end("Hello World");
    });

    assert.response(s, {
      url: '/foo', method: "GET"
    }, {
      body: "Hello World"
    });
  }
}
