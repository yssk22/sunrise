var path = require('path');
var site = require('./site');
module.exports = {
  createSite: function(){
    return site.createSite(path.join(__dirname, '../test/fixtures/site/test_site'));
  }
};