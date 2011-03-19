/***
 * Test environment setup script
 *
 */
var path = require('path');
var fixtureDir = path.join(__dirname, 'fixtures');
exports.fixtureFile = function(name){
   return path.join(fixtureDir, name);
}

// config
var config = require('sunrise').config;

// load default configuration for test environment
config.load(exports.fixtureFile('conf'));

exports.parseSetCookie = function(res){
  var cookies = {};
  if( res.headers['set-cookie'] ){
    for(var i=0, len=res.headers['set-cookie'].length; i<len; i++){
      var str = res.headers['set-cookie'][i];
      var pairs = str.split(/;/);
      var item = {
        httponly : false
      };
      pairs.forEach(function(kv){
        var eqlIndex = kv.indexOf('=');
        if( eqlIndex > 0 ){
          var key = kv.substr(0, eqlIndex).trim().toLowerCase();
          var val = kv.substr(eqlIndex+1, kv.length).trim();
          if( ['expires', 'path', 'domain', 'max-age'].indexOf(key) < 0 ){
            cookies[key] = item;
            item['name']  = key;
            item['value'] = val;
          }else {
            item[key] = val;
          }
        }else{
          var lc = kv.trim().toLowerCase();
          if( lc == 'httponly' ){
            item.httponly = true;
          }
          if( lc == 'secure' ){
            item.secure = true;
          }
        }
      });
    }
  }
  return cookies;
};
