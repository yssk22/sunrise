/*!
 * Sunrise - View helper module
 * Copyright (c) 2011 Yohei Sasaki <yssk22@gmail.com>
 * MIT Licensed
 */
var assert = require('assert'),
    path = require('path');
var env = require('./env');
var createSite = require('site').createSite,
    abspath = require('utils').abspath;
var app = require('app');
app.paths.push(abspath(path.join(__dirname, '/fixtures/app/')));


module.exports = {
  "test querystring": function(){
    var site = createSite(path.join(__dirname, '/fixtures/site/test_site'));
    var test_app = site.install('test_app', '/test_app/');
    assert.response(site, {url: '/test_helpers/querystring'}, {
      body: 'foo=bar\n'
    });
  },

  "test qs": function(){
    var site = createSite(path.join(__dirname, '/fixtures/site/test_site'));
    var test_app = site.install('test_app', '/test_app/');
    assert.response(site, {url: '/test_helpers/qs'}, {
      body: 'foo=bar\n'
    });
  },

  "test php": function(){
    var site = createSite(path.join(__dirname, '/fixtures/site/test_site'));
    var test_app = site.install('test_app', '/test_app/');
    assert.response(site, {url: '/test_helpers/php'}, {
      body: 'trimed\n'
    });
  },

  "test markdown": function(){
    var site = createSite(path.join(__dirname, '/fixtures/site/test_site'));
    var test_app = site.install('test_app', '/test_app/');
    assert.response(site, {url: '/test_helpers/markdown'}, {
      body: '<h1>This is an H1</h1>\n'
    });
  },

  "test sanitize": function(){
    var site = createSite(path.join(__dirname, '/fixtures/site/test_site'));
    var test_app = site.install('test_app', '/test_app/');
    assert.response(site, {url: '/test_helpers/sanitize'}, {
      body: '<h1>This is an H1</h1>\n\n'
    });

    // various options to test
    var sanitizer = site.viewHelpers.sanitizer;
    assert.eql('', sanitizer.htmlSanitize('<object></object>'));
    assert.eql('<object></object>', sanitizer.htmlSanitize('<object></object>', {
      elements: {
        object: 0
      }
    }));
    assert.eql('<p></p>', sanitizer.htmlSanitize('<p></p>'));
    assert.eql('', sanitizer.htmlSanitize('<p></p>', {
       elements: {
         p: 16
       }
    }));

    assert.eql('<p>a</p>', sanitizer.htmlSanitize('<p style="float:left;">a</p>'));
    assert.eql('<p style="float:left;">a</p>',
               sanitizer.htmlSanitize('<p style="float:left;">a</p>',
                                      { attribs: {
                                        "p::style": 0
                                      }}));

  }
}