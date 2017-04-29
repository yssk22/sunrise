var assert = require('assert');
var path = require('path');
var env = require(__dirname + '/../env');
var createSite = require('site').createSite;
var abspath = require('utils').abspath;
var utils = require('middleware/utils');

var app = require('app');
app.paths.push(abspath(path.join(__dirname, '/../fixtures/middleware/')));

module.exports = {
  "test debug": function(){
    var site = createSite(path.join(__dirname, '/../fixtures/site/test_site'));
    var app = site.install('utils_app', '/utils_app');
    var debugs = { site: [], app: [] };
    site.get('/test_debug',
             (req, res, next) => {
               req.app.logger.debug = msg => {
                 debugs.site.push(msg);
               };
               next();
             },
             utils.debug('foo'),
             (req, res, next) => {
               res.send("Hello World");
             });
    app.get('/test_debug',
            (req, res, next) => {
              req.app.logger.debug = msg => {
                debugs.app.push(msg);
              };
              next();
            },
            utils.debug('foo'),
            (req, res, next) => {
              res.send("Hello World");
            });

    assert.response(site,  { url: '/test_debug', method: "GET" },
                    res => {
                      assert.eql(debugs.site[0].substr(0,4), 'foo\n');
                      assert.eql(res.body, "Hello World");
                    });
    assert.response(site,  { url: '/utils_app/test_debug', method: "GET" },
                    res => {
                      assert.eql(debugs.app[0].substr(0,4), 'foo\n');
                      assert.eql(res.body, "Hello World");
                    });
  },

  "test dumpBindings": function(){
    var site = createSite(path.join(__dirname, '/../fixtures/site/test_site'));
    var app = site.install('utils_app', '/utils_app');
    site.get('/test_dumpBindings', (req, res, next) => {
      res.local('foo', 'bar');
      next();
    }, utils.dumpBindings());
    app.get('/test_dumpBindings', (req, res, next) => {
      res.local('foo', 'bar');
      next();
    }, utils.dumpBindings());

    assert.response(site, { url: '/test_dumpBindings', method: "GET" },
                    res => {
                      var obj = JSON.parse(res.body);
                      assert.eql(obj.foo, 'bar');
                    });
    assert.response(site, { url: '/utils_app/test_dumpBindings', method: "GET" },
                    res => {
                      var obj = JSON.parse(res.body);
                      assert.eql(obj.foo, 'bar');
                    });
  },

  "test redirect": function(){
    var site = createSite(path.join(__dirname, '/../fixtures/site/test_site'));
    var app = site.install('utils_app', '/utils_app/');

    site.get('/test_redirect', utils.redirect('foo'));
    app.get('/test_redirect', utils.redirect('bar'));
    assert.response(site, {
      url: "/test_redirect", method: "GET",
      headers: {
        host: 'example.com'
      }
    }, res => {
      assert.eql(res.statusCode, 302);
      assert.eql(res.headers.location, 'http://example.com/foo');
    });
    assert.response(site, {
      url: "/utils_app/test_redirect", method: "GET",
      headers: {
        host: 'example.com'
      }
    }, res => {
      assert.eql(res.statusCode, 302);
      assert.eql(res.headers.location, 'http://example.com/utils_app/bar');
    });

    // redirect with status code
    site.get('/test_redirect_with_status', utils.redirect('foo', 303));
    assert.response(site, {
      url: "/test_redirect_with_status", method: "GET",
      headers: {
        host: 'example.com'
      }
    }, res => {
      assert.eql(res.statusCode, 303);
      assert.eql(res.headers.location, 'http://example.com/foo');
    });
  },

  "test parallel": function(){
    var site = createSite(path.join(__dirname, '/../fixtures/site/test_site'));
    var app = site.install('utils_app', '/utils_app');

    var f = (req, res, next) => {
      setTimeout(() => {
        if( res.local('count') == undefined ){
          res.local('count', 0);
        }
        res.local('count', res.local('count') + 1);
        next();
      }, 100);
    };
    site.get('/test_parallel', utils.parallel(
      f, f, f, f
    ), (req, res, next) => {
      res.send('count = ' + res.local('count'));
    });
    app.get('/test_parallel', utils.parallel(
      f, f, f, f
    ), (req, res, next) => {
      res.send('count = ' + res.local('count'));
    });
    assert.response(site, {
      url: "/test_parallel", method: "GET"
    }, {
      body: "count = 4"
    });
    assert.response(site, {
      url: "/utils_app/test_parallel", method: "GET"
    }, {
      body: "count = 4"
    });
  }
}