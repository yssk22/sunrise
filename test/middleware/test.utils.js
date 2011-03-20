var assert = require('assert'),
    path = require('path');
var env = require(__dirname + '/../env');
var createSite = require('site').createSite,
    abspath = require('utils').abspath;
var utils = require('middleware/utils');

var app = require('app');
app.paths.push(abspath(path.join(__dirname, '/../fixtures/app/')));

module.exports = {
  "test debug": function(){
    var site = createSite(path.join(__dirname, '/../fixtures/site/test_site'));
    var debugs = [];
    site.get('/test_debug',
             function(req, res, next){
               req.app.logger.debug = function(msg){
                 debugs.push(msg);
               };
               next();
             },
             utils.debug('foo'),
             function(req, res, next){
               res.send("Hello World");
             }
            );
    assert.response(site,  { url: '/test_debug', method: "GET" },
                    function(res){
                      assert.eql(debugs[0], 'foo');
                      assert.isNotNull(debugs[1]);
                      assert.eql(res.body, "Hello World");
                    });
  },

  "test dumpBindings": function(){
    var site = createSite(path.join(__dirname, '/../fixtures/site/test_site'));
    var debugs = [];
    site.get('/test_dumpBindings', function(req, res, next){
      res.local('foo', 'bar');
      next();
    }, utils.dumpBindings());

    assert.response(site, { url: '/test_dumpBindings', method: "GET" },
                    function(res){
                      var obj = JSON.parse(res.body);
                      assert.eql(obj.foo, 'bar');
                    });
  },

  "test redirect": function(){
    var site = createSite(path.join(__dirname, '/../fixtures/site/test_site'));
    var app = site.install('test_app', '/test_app/');

    site.get('/test_redirect', utils.redirect('foo'));
    app.get('/test_redirect', utils.redirect('bar'));
    assert.response(site, {
      url: "/test_redirect", method: "GET",
      headers: {
        host: 'example.com'
      }
    }, function(res){
      assert.eql(res.statusCode, 302);
      assert.eql(res.headers.location, 'http://example.com/foo');
    });
    assert.response(site, {
      url: "/test_app/test_redirect", method: "GET",
      headers: {
        host: 'example.com'
      }
    }, function(res){
      assert.eql(res.statusCode, 302);
      assert.eql(res.headers.location, 'http://example.com/test_app/bar');
    });

    // redirect with status code
    site.get('/test_redirect_with_status', utils.redirect('foo', 303));
    assert.response(site, {
      url: "/test_redirect_with_status", method: "GET",
      headers: {
        host: 'example.com'
      }
    }, function(res){
      assert.eql(res.statusCode, 303);
      assert.eql(res.headers.location, 'http://example.com/foo');
    });
  },

  "test parallel": function(){
    var site = createSite(path.join(__dirname, '/../fixtures/site/test_site'));
    var f = function(req, res, next){
      setTimeout(function(){
        if( res.local('count') == undefined ){
          res.local('count', 0);
        }
        res.local('count', res.local('count') + 1);
        next();
      }, 100);
    };
    site.get('/test_parallel', utils.parallel(
      f, f, f, f
    ), function(req, res, next){
      res.send('count = ' + res.local('count'));
    });
    assert.response(site, {
      url: "/test_parallel", method: "GET"
    }, {
      body: "count = 4"
    });
  }
}