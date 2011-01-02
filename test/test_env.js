/***
 * Test environment setup script
 */
var path = require('path');
var fixtureDir = path.join(__dirname, 'fixtures');
exports.fixtureFile = function(name){
   return path.join(fixtureDir, name);
}


// config
var config = require('sunrise/config');
config.load(exports.fixtureFile('conf'));  // load test env configuration

var log4js = require('log4js')();
