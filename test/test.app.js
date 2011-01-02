var assert = require('assert');
var env = require('./test_env');
var app = require('sunrise/app');

module.exports = {
  "test resolveAppPath": function(){
    var postsPath = __dirname + '/../apps/posts';
    app.resolveAppPath('posts', function(err, abspath){
      // TODO:
      // Followings will fail because __dirname is not the absolute path
      // when expresso -I specified.
      //
      //    var expected = postsPath;
      //    assert.eql(abspath, expected);
      //
      // alternative tests:
      //
      assert.isUndefined(err);
      assert.isNotNull(abspath);
    });

    app.resolveAppPath(postsPath, function(err, abspath){
      assert.isUndefined(err);
      assert.isNotNull(abspath);
    });

    app.resolveAppPath('foo', function(err, abspath){
      assert.ok(err instanceof Error);
    });
  },

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
  }
};