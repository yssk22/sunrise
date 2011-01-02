var assert = require('assert');
var env  = require('../test_env');
var conn = require('sunrise/db').connect("test_sunrise");
var site = require('sunrise/site');
var util = require('sunrise/middleware/util');
var db  = require('sunrise/middleware/db');

function createSite(){
  return site.createSite(env.fixtureFile("test_site"), {
    database: 'test_sunrise'
  });
};


module.exports = {
  "setup": function(fn){
    conn.reset(function(err, res){
      conn.get('/', function(err, res){
        console.log(res);
        fn();
      });
    });
  },

  "test get": function(next){
    var app = createSite();
    app.get('/get',
            db.bind('get', 'test_get', {
              as: 'data'
            }),
            util.dumpBindings());
    conn.save('test_get', {
      title: "this is test"
    }, function(err, res){
      assert.response(app, {
        url: '/get'
      }, function(res){
        assert.eql(JSON.parse(res.body).data.data.title, 'this is test');
        next();
      });
    });
  },

  "test save": function(next){
    var app = createSite();
    app.post('/save',
             db.bind('save', function(fn){
               fn(undefined, this.request.query.id);
             }, {
               title: function(fn){
                 fn(undefined, this.request.query.title);
               }
             },{
               as: 'data'
             }),
             util.dumpBindings());

    assert.response(app, {
      method: "POST",
      url: '/save?id=test_save&title=foo'
    }, function(res){
      assert.eql(JSON.parse(res.body).data.data.id, 'test_save');
      conn.get('test_save', function(err, doc){
        assert.eql(doc.title, "foo");
        next();
      });
    });
  },

  "test view": function(next){
    var app = createSite();
    app.get('/view',
            db.bind('view', 'foo/all', {
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
          var result = JSON.parse(res.body).data.data;
          assert.eql(result.total_rows, 10);
          assert.eql(result.rows.length, 5);
          next();
        });
      });
    });
  }
}