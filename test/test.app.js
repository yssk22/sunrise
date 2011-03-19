var assert = require('assert'),
    path = require('path');
var env = require('./env');
var abspath = require('utils').abspath;
var app = require('app');

app.paths.push(abspath(path.join(__dirname, '/fixtures/app/')));

var postsPath = path.normalize(abspath(__dirname + '/../apps/posts'));
var testAppPath = path.normalize(abspath(__dirname + '/fixtures/app/test_app'));

module.exports = {
  "test resolveAppPath": function(){

    var found = app.resolveAppPath('posts');
    assert.isNotNull(found);
    assert.eql(postsPath, found);

    found = app.resolveAppPath(postsPath);
    assert.isNotNull(found);
    assert.eql(postsPath, found);

    found = app.resolveAppPath('test_app');
    assert.isNotNull(found);
    assert.eql(testAppPath, found);

    assert.throws(function(){app.resolveAppPath('foo'); });

  },

  "test createApp": function(){
    var test_app = app.createApp('test_app');
    assert.isNotNull(test_app);
    assert.eql(testAppPath, test_app.root);
    assert.eql(typeof(test_app.deploy), 'function');

    assert.response(test_app, {
      url: '/', method: "GET"
    }, {
      body: "Hello World"
    });
  }

  /*
  "test createApp": function(){
    var appPath = env.fixtureFile('test_app');
    app.createApp(appPath, function(err, app){
      assert.isNotNull(app.db);
      assert.isNotNull(app.i18n);
      assert.eql(app.namespace, '/test_app');
      assert.eql(app.db.name, 'test_app');
      assert.ok(typeof(app.db.foo) == 'function');
      // i18n messages assersion
      assert.eql(app.i18n.translate('foo', 'ja'), "ばー");
      // couchapp exists
      app.db.get('_design/test_app', function(err, doc){
        assert.isNotNull(doc);
        assert.eql(doc._id, '_design/test_app');
      });
    });
  }*/
};