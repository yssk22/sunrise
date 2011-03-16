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
