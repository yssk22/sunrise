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
            assert.eql(JSON.parse(res.body).data.result.title, 'this is test');
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
         assert.eql(JSON.parse(res.body).data.result.id, 'test_save');
         conn.get('test_save', function(err, doc){
            assert.eql(doc.title, "foo");
         });
      });
   },

   "test view": function(){
      app.get('/view',
              db.bind(conn, 'view', 'foo/all', {
                 limit: 5
              },{
                 as: 'data'
              }),
              util.dumpBindings());
      conn.save('_design/foo', {
         all: {
            map: function(doc){
               if( doc.title == 'view_test'){
                  emit(null, doc);
               }
            }
         }
      }, function(err, res){
         var count = 0;
         var bulk = [];
         for(var i=0; i<10; i++){
            bulk.push({title: 'view_test'});
         }
         conn.save(bulk, function(err, res){
            assert.ok(res);
            assert.response(app, {
               url: '/view'
            }, function(res){
               var result = JSON.parse(res.body).data.result;
               assert.eql(result.total_rows, 10);
               assert.eql(result.rows.length, 5);
            });
         });
      });
   }
}