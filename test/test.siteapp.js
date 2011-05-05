/**
 * site and application integration test
 *
 * Copyright (c) Yohei Sasaki <yssk22@gmail.com>
 * MIT Licensed
 */
var assert = require('assert'),
    path = require('path');
var env = require('./env');
var createSite = require('site').createSite,
    abspath = require('utils').abspath;
var app = require('app');
app.paths.push(abspath(path.join(__dirname, '/fixtures/app/')));


require('view');

module.exports = {
  "test installed application": function(){
    var site = createSite(path.join(__dirname, '/fixtures/site/test_site'));
    var test_app = site.install('test_app', '/test_app/');
    test_app.get('/test_template', function(req, res, next){
      res.render('test.ejs', {layout: false});
    });
    assert.response(site, {
      url: '/test_app/', method: "GET"
    }, {
      body: "Hello World"
    });
    assert.response(site, {
      url: '/test_app/test_template', method: "GET"
    }, {
      body: "This is Test Application.\n"
    });
  },

  "test layout chain": function(){
    var site = createSite(path.join(__dirname, '/fixtures/site/test_site'));
    var test_app = site.install('test_app', '/test_app/');
    test_app.get('/test_layout', function(req, res, next){
      res.render('test.ejs');
    });
    assert.response(site, {
      url: '/test_app/test_layout', method: "GET"
    },  {
      body: "<html><body>This is Test Application.\n</body></html>\n"
    });
  }
}
