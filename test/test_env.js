var path = require('path');
var config = require('sunrise/config');

var fixtureDir = path.join(__dirname, 'fixtures');
config.load(path.join(fixtureDir, 'conf'));

exports.fixtureFile = function(name){
   return path.join(fixtureDir, name);
}
