/**
 * Sunrise - Application server, CouchApp x Node.js Integration
 *
 * Copyright (c) Yohei Sasaki <yssk22@gmail.com>
 * MIT Licensed
 */
var assert = require('assert');

var path = require('path');
var env = require('./env');
var abspath = require('utils').abspath;
var app = require('app');

app.paths.push(abspath(path.join(__dirname, '/fixtures/app/')));

var postsPath = path.normalize(abspath(__dirname + '/../apps/posts'));
var testAppPath = path.normalize(abspath(__dirname + '/fixtures/app/test_app'));

module.exports = {
  "test resolveAppPath": function(){

    var found = app.resolveAppPath('posts');
    assert.isNotNull(found);
    assert.eql(postsPath, found);

    found = app.resolveAppPath(postsPath);
    assert.isNotNull(found);
    assert.eql(postsPath, found);

    found = app.resolveAppPath('test_app');
    assert.isNotNull(found);
    assert.eql(testAppPath, found);

    assert.throws(() => {app.resolveAppPath('foo'); });

  },

  "test createApp": function(){
    var test_app = app.createApp('test_app');
    test_app.init();
    assert.isNotNull(test_app);
    assert.eql(testAppPath, test_app.documentRoot);
    assert.eql(typeof(test_app.deploy), 'function');
    assert.response(test_app, {
      url: '/', method: "GET"
    }, {
      body: "Hello World"
    });
  },

  'test view rendering': function(){
    var test_app = app.createApp('test_app');
    test_app.get('/test_template', (req, res, next) => {
      res.render('test.ejs', {layout: false});
    });
    assert.response(test_app, {
      url: "/test_template", method: 'GET'
    }, {
      body: "This is Test Application.\n"
    });
  },

  'test createApp in a context': function(){
    var test_app = app.createApp('test_app', {rootUrl: '/foo'});
    // if test_app is installed on /foo/, then the home is '/foo/'
    // before that, the home remains '/'.
    assert.eql(test_app.set('home'), '/');
  }
};