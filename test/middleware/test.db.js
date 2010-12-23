var assert = require('assert');
var helper = require('../test_env');
var conn = require('sunrise/db').connect({database: "test_sunrise"});
var server = require('sunrise/server');


var app = server.createServer(__dirname + "/../fixtures/test_app");
var util = require('sunrise/middleware/util');
var db  = require('sunrise/middleware/db');

module.exports = {
   "setup": function(fn){
      conn.reset(function(err, res){
         fn();
      });
   },

   "test get": function(){
      app.get('/',
              db.bind(conn, 'get', 'test_get', {
                 as: 'data'
              }),
              util.dumpBindings());
      conn.save('test_get', {
         title: "this is test"
      }, function(err, res){
         assert.response(app, {
            url: '/'
         }, function(res){
            assert.ok(JSON.parse(res.body).data.result.title, 'this is test');
         });
      });
   },

   "test save": function(){
      app.post('/',
               db.bind(conn, 'save', function(ctx, fn){
                  fn(undefined, ctx.req.query.id);
               }, {
                  title: function(ctx, fn){
                     fn(undefined, ctx.req.query.title);
                  }
               },{
                  as: 'data'
               }),
               util.dumpBindings());

      assert.response(app, {
         method: "POST",
         url: '/?id=test_save&title=foo'
      }, function(res){
         assert.ok(JSON.parse(res.body).data.result.id, 'test_save');
         conn.get('test_save', function(err, doc){
            assert.ok(doc.title, "foo");
         });
      });
   }
}