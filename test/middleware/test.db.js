/**
 * CouchDB Integration as Node middleware.
 * Copyright (c) Yohei Sasaki <yssk22@gmail.com>
 * MIT Licensed
 */
var assert = require('assert');

var path = require('path');
var env = require(__dirname + '/../env');
var createSite = require('site').createSite;
var abspath = require('utils').abspath;
var app = require('app');
app.paths.push(abspath(path.join(__dirname, '/../fixtures/middleware/')));

module.exports = {
  "setup": function(done){
    this.site = createSite(path.join(__dirname, '/../fixtures/site/test_site'));
    this.db_app = site.install('db_app', '/db_app/');
    this.db_app.deploy(() => {
      db_app.db.save('foo', {
        bar: "This is a test data"
      }, (err, data) => {
        done();
      });
    });
  },

  "test db.bind": function(){
    var site = this.site;
    var db_app = this.db_app;
    var bind = db_app.middleware.db.bind;
    db_app.get('/bind/foo',
               bind('get', 'foo', { as: 'result' }),
               (req, res, next) => {
                 res.send(JSON.stringify(res.local('result')));
               }
              );
    assert.response(site, {
      url: "/db_app/bind/foo", method: "GET"
    }, res => {
      var obj = JSON.parse(res.body);
      assert.isNull(obj.error);
      assert.isNotNull(obj.data);
      assert.eql(obj.data.bar, 'This is a test data');
    });

    db_app.get('/bind/foo/with_template',
               bind('get', 'foo', { as: 'result', render: 'test_bind.ejs' }),
               (req, res, next) => {
                 res.send(res.local('result').toString());
               }
              );
    assert.response(site, {
      url: "/db_app/bind/foo/with_template", method: "GET"
    }, {
      body: "This is a test data\n"
    });
  },

  "test db.bind with success option": function(){
    var site = this.site;
    var db_app = this.db_app;
    var bind = db_app.middleware.db.bind;

    db_app.get('/bind/success',
               bind('get', 'foo', {
                 as: 'result',
                 success(req, res, next) {
                   res.send(JSON.stringify(res.local('result')));
                 }
               }));
    assert.response(site, {
      url: "/db_app/bind/success", method: "GET"
    }, res => {
      var obj = JSON.parse(res.body);
      assert.isNull(obj.error);
      assert.isNotNull(obj.data);
      assert.eql(obj.data.bar, 'This is a test data');
    });

    db_app.get('/bind/success/with_template',
               bind('get', 'foo', { as: 'result', success: 'test_bind.ejs' }),
               (req, res, next) => {
                 res.send(res.local('result').toString());
               });
    assert.response(site, {
      url: "/db_app/bind/success/with_template", method: "GET"
    }, {
      body: "This is a test data\n"
    });
  },

  "test db.bind with failure option": function(){
    var site = this.site;
    var db_app = this.db_app;
    var bind = db_app.middleware.db.bind;

    db_app.get('/bind/failure',
               bind('get', 'bar', {
                 as: 'result',
                 failure(req, res, next) {
                   res.send(JSON.stringify(res.local('result')));
                 }
               }));
    assert.response(site, {
      url: "/db_app/bind/failure", method: "GET"
    }, res => {
      var obj = JSON.parse(res.body);
      console.log(res.body);
      assert.isNotNull(obj.error);
      assert.eql(obj.error.error, 'not_found');
      assert.isUndefined(obj.data);
    });

    db_app.get('/bind/failure/with_template',
               bind('get', 'bar', { as: 'result', failure: 'test_bind.ejs' }),
               (req, res, next) => {
                 res.send(res.local('result').toString());
               });
    assert.response(site, {
      url: "/db_app/bind/failure/with_template", method: "GET"
    }, {
      body: "not_found\n"
    });
  }

}
