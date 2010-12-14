var assert = require('assert');
var helper = require('../helper');
var server = require('sunrise/server');
var util   = require('sunrise/middleware/util');

function setUp(){
  return server.createServer('foo');
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
   }
}