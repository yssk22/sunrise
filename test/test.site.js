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

  "test locals": function(){
    var site = createSite(path.join(__dirname, '/fixtures/site/test_site'));
    site.get('/locals/page', function(req, res, next){
      res.send(JSON.stringify(res.local('page')));
    });

    assert.response(site, {
      url: '/locals/page', method: "GET"
    }, function(res){
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
    site.get('/test_session', function(req, res, next){
      var sess = req.session;
      if( req.session.test_session === undefined ){
        sess.test_session = 0;
      }
      sess.test_session += 1;
      res.send('test_session = ' + sess.test_session);
    });

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

  "test page middleware": function(){
    var site = createSite(path.join(__dirname, '/fixtures/site/test_site'));
    var test_app = site.install('test_app', '/test_app/');
    site.get('/page_middleware',
             site.page.title('title'),
             site.page.canonical('page_middleware'),
             site.page.feed('page_middleware.xml'),
             site.page.javascripts('foo.js'),
             site.page.stylesheets('bar.css'),
             function(req, res, next){
               res.send(JSON.stringify(res.local('page')));
             });
    assert.response(site, {
      url: '/page_middleware', method: "GET",
      headers: {
        host: 'example.com'
      }
    },function(res){
      var obj = JSON.parse(res.body);
      assert.eql(obj.title, 'title');
      assert.eql(obj.canonical, 'http://example.com/page_middleware');
      assert.eql(obj.feed, 'http://example.com/page_middleware.xml');
      assert.eql(obj.javascripts, ['/foo.js']);
      assert.eql(obj.stylesheets, ['/bar.css']);
    });

    test_app.get('/page_middleware',
             test_app.page.title('title'),
             test_app.page.canonical('page_middleware'),
             test_app.page.feed('page_middleware.xml'),
             test_app.page.javascripts('foo.js'),
             test_app.page.stylesheets('bar.css'),
             function(req, res, next){
               res.send(JSON.stringify(res.local('page')));
             });

    assert.response(site, {
      url: '/test_app/page_middleware', method: "GET",
      headers: {
        host: 'example.com'
      }
    },function(res){
      var obj = JSON.parse(res.body);
      assert.eql(obj.title, 'title');
      assert.eql(obj.canonical, 'http://example.com/test_app/page_middleware');
      assert.eql(obj.feed, 'http://example.com/test_app/page_middleware.xml');
      assert.eql(obj.javascripts, ['/test_app/foo.js']);
      assert.eql(obj.stylesheets, ['/test_app/bar.css']);
    });
  }
};
