var assert = require('assert'),
    path = require('path');
var test = require('sunrise').test,
    abspath = require('sunrise').utils.abspath;
require('sunrise').appPaths.push(abspath(path.join(__dirname, '../')));

module.exports = {
  "test create a post": function(){
    var site = test.createSite();
    site.install('posts', '/posts/');


    var input = {
      title: "Title1", content: "Content1", tags: ['foo', 'bar']
    };
    assert.response(site, {
      url: '/posts/p/', method: "POST",
      data: JSON.stringify(input),
      headers: {
        'Content-Type': 'application/json',
        'Host': 'www.example.com'
      },
    }, function(res){
      var obj = JSON.parse(res.body);
      assert.eql(res.statusCode, 201);
      assert.isNotNull(obj._id);
      assert.isNotNull(obj._rev);
      assert.eql(res.headers.location, 'http://www.example.com/posts/p/' + obj._id);

      assert.eql(obj.title, input.title);
      assert.eql(obj.content, input.content);
      assert.eql(obj.tags, input.tags);
    });
  }
}