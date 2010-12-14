var assert = require('assert');
var helper = require('./helper');
var server = require('sunrise/server');


module.exports = {
   "test createServer": function(){
      var app = server.createServer('foo');
      assert.eql(typeof app.setUp, 'function');
      assert.eql(typeof app.install, 'function');
   },

   "test application setUp": function(){
      var app = server.createServer('foo');
      app.setUp({
         setUp: function(app){
            app.get('/', function(req, res, next){
               res.writeHead(200, {'Content-Type': "text/plain"});
               res.end("Hello World");
            });
         }
      });
      assert.response(app, {
         url: '/', method: "GET"
      }, {
         body: "Hello World"
      });
   },

   "test sunriseHelper" : function(){
      var app = server.createServer('foo');
      app.setUp({
         setUp: function(app){
            app.get('/', function(req, res, next){
               assert.isDefined(req.logger);
               assert.isDefined(res.logger);
               assert.isDefined(res.bindings);
               assert.isDefined(res.bindings.page);
               assert.eql(res.bindings.page.title, "");
               assert.eql(res.bindings.page.description, "");
               assert.eql(res.bindings.page.keywords, "");
               assert.eql(res.bindings.page.javascripts, []);
               assert.eql(res.bindings.page.stylesheets, []);
               next();
            }, function(req, res, next){
               res.bindings.foo = 'Hello';
               next();
            }, function(req, res, next){
               res.writeHead(200, {'Content-Type': "text/plain"});
               res.end(res.bindings.foo);
            });
         }
      });
      assert.response(app, {
         url: '/', method: "GET"
      }, {
         body: "Hello"
      });
   }
};
