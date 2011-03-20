var assert = require('assert'),
    path = require('path');
var env = require(__dirname + '/../env');
var createSite = require('site').createSite,
    abspath = require('utils').abspath;
var app = require('app');
app.paths.push(abspath(path.join(__dirname, '/../fixtures/app/')));


module.exports = {
  "test page middleware": function(){
    var site = createSite(path.join(__dirname, '/../fixtures/site/test_site'));
    var test_app = site.install('test_app', '/test_app/');

    var m = site.middleware;
    site.get('/page_middleware',
             m.page.title('title'),
             m.page.canonical('page_middleware'),
             m.page.feed('page_middleware.xml'),
             m.page.javascripts('foo.js'),
             m.page.stylesheets('bar.css'),
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

    m = test_app.middleware;
    test_app.get('/page_middleware',
             m.page.title('title'),
             m.page.canonical('page_middleware'),
             m.page.feed('page_middleware.xml'),
             m.page.javascripts('foo.js'),
             m.page.stylesheets('bar.css'),
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
}