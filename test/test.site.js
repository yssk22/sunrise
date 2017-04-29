/**
 * Application Container module
 *
 * Copyright (c) Yohei Sasaki <yssk22@gmail.com>
 * MIT Licensed
 */
var assert = require('assert');

var path = require('path');
var env = require('./env');
var createSite = require('site').createSite;
var abspath = require('utils').abspath;

module.exports = {
  "test createSite": function(){
    var site = createSite(path.join(__dirname, '/fixtures/site/test_site'));
    assert.response(site, {
      url: '/', method: "GET"
    }, {
      body: "Hello World"
    });
  },

  "test locals": function(){
    var site = createSite(path.join(__dirname, '/fixtures/site/test_site'));
    site.get('/locals/page', (req, res, next) => {
      res.send(JSON.stringify(res.local('page')));
    });

    assert.response(site, {
      url: '/locals/page', method: "GET"
    }, res => {
      var page = JSON.parse(res.body);
      assert.eql(page.title, '');
      assert.eql(page.feed, '');
      assert.eql(page.canonical, '');
      assert.eql(page.javascripts, []);
      assert.eql(page.stylesheets, []);
    });
  },

  "test session": function(){
    var site = createSite(path.join(__dirname, '/fixtures/site/test_site'));
    // session application
    site.get('/test_session', (req, res, next) => {
      var sess = req.session;
      if( req.session.test_session === undefined ){
        sess.test_session = 0;
      }
      sess.test_session += 1;
      res.send('test_session = ' + sess.test_session);
    });

    assert.response(site, {
      url: '/test_session', method: "GET"
    }, res => {
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
  }
};
