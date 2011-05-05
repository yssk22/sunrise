/**
 * Sunrise - HTTP Server extension
 *
 * Copyright (c) Yohei Sasaki <yssk22@gmail.com>
 * MIT Licensed
 */
var assert = require('assert');
var server = require('server');

module.exports = {
  "test createServer": function(){
    var s = server.createServer();
    assert.eql(s.constructor.name, 'HTTPServer');
    assert.eql(s.logger.constructor.name, 'Logger');
    assert.eql(s.db.name, 'sunrise');
    assert.eql(s.i18n.defaultLocale, 'en');

    // SSL option
    s = server.createServer({ssl: true});
    assert.eql(s.constructor.name, 'HTTPSServer');
    assert.eql(s.logger.constructor.name, 'Logger');
    assert.eql(s.db.name, 'sunrise');

    // DB and locale option
    s = server.createServer({database: 'foo', locale: 'ja'});
    assert.eql(s.constructor.name, 'HTTPServer');
    assert.eql(s.logger.constructor.name, 'Logger');
    assert.eql(s.db.name, 'foo');
    assert.eql(s.i18n.defaultLocale, 'ja');

    // DB and locale option (SSL)
    s = server.createServer({ssl: true, database: 'foo', locale: 'ja'});
    assert.eql(s.constructor.name, 'HTTPSServer');
    assert.eql(s.logger.constructor.name, 'Logger');
    assert.eql(s.db.name, 'foo');
    assert.eql(s.i18n.defaultLocale, 'ja');


  }
}