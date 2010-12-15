var assert = require('assert');
var helper = require('../helper');
var server = require('sunrise/server');
var util   = require('sunrise/middleware/util');

function setUp(){
  return server.createServer(__dirname + "/../fixtures/test_app");
}

module.exports = {
   "test title": function(){
      var app = setUp();
      app.get('/',
              util.title('title'),
              util.dumpBindings());
      assert.response(app, {
         url: '/'
      }, function(res){
         assert.ok(JSON.parse(res.body).page.title, 'title');
      });
   },

   "test javascripts and stylesheets": function(){
      var app = setUp();
      app.get('/',
              util.javascripts('a.js', 'b.js'),
              util.stylesheets('a.css', 'b.css'),
              util.dumpBindings());
      assert.response(app, {
         url: '/'
      }, function(res){
         assert.ok(JSON.parse(res.body).page.javascripts, ['a.js', 'b.js']);
         assert.ok(JSON.parse(res.body).page.stylesheets, ['a.css', 'b.css']);
      });
   },

   "test redirect": function(){
      var app = setUp();
      app.get('/', util.redirect('/'));
      assert.response(app, {
         url: '/'
      }, {
         status: 302,
         headers: {
            "location": '/'
         }
      });
   },
   "test redirect with status code": function(){
      var app = setUp();
      app.get('/', util.redirect('/', 303));
      assert.response(app, {
         url: '/'
      }, {
         status: 303,
         headers: {
            "location": '/'
         }
      });
   },

   "test render": function(){
      var app = setUp();
      app.get('/', function(req,res, next){
         res.bindings.foo = 'bar';
         next();
      }, util.render('test_render.ejs', {layout: false}));
      assert.response(app, {
         url: '/'
      }, {
         body: "bar\n"
      });
   },

   "test bindView": function(){
      var app = setUp();
      app.get('/',
              function(req,res, next){
                 res.bindings.foo = 'bar';
                 next();
              },
              util.bindView('test_render.ejs', {
                 as: 'hoge',
                 layout: false
              }),
              util.dumpBindings());
      assert.response(app, {
         url: '/'
      }, function(res){
         assert.ok(JSON.parse(res.body).foo, 'bar');
         assert.ok(JSON.parse(res.body).hoge, "bar\n");
      });
   },

   "test bindPartial": function(){
      var app = setUp();
      app.get('/',
              function(req,res, next){
                 res.bindings.foo = 'bar';
                 next();
              },
              util.bindPartial('test_partial.ejs', {
                 as: 'hoge',
                 object: {
                    abc: '123'
                 }
              }),
              util.dumpBindings());
      assert.response(app, {
         url: '/'
      }, function(res){
         assert.ok(JSON.parse(res.body).foo, 'bar');
         assert.ok(JSON.parse(res.body).hoge, "bar123\n");
      });
   },

   "test parallel": function(){
      var app = setUp();

      function fun(req, res, next){
         res.bindings.foo += 1;
         setTimeout(next, 1);
      }
      app.get('/',
              function(req, res, next){
                 res.bindings.foo = 0;
                 next();
              },
              util.parallel(
                 fun,
                 fun,
                 fun,
                 util.dumpBindings()
              ));
      assert.response(app, {
         url: '/'
      }, function(res){
         assert.ok(JSON.parse(res.body).foo, 3);
      });

   }
};