/*!
 * Sunrise - Configuration
 * Copyright (c) 2011 Yohei Sasaki <yssk22@gmail.com>
 * MIT Licensed
 */

/**
 * Module dependencies
 */
var fs = require('fs');

var path = require('path');
var merge = require('./utils').merge;
var loadJSONSync = require('./utils').loadJSONSync;

var CONFIG_TYPES = ['db', 'web', 'auth'];
var config = {};

/**
 * Returns an object from json formatted file.
 * If file is not found, {} is returned.
 *
 * @param {String} filepath path to the json file.
 * @api private
 */
function loadJSON(filepath){
  try{
    return loadJSONSync(filepath);
  }catch(e){
    if( e.errno == 2 || e.errno == 9){
      // no such file or directory;
      return {};
    }else{
      throw new Error("failed to load " + filepath + ": " + e);
    }
  }
}

/**
 * Load configuration from the given directory.
 *
 * @param {String} dir the directory path which contains configuration files.
 * @api public
 */
config.load = dir => {
 CONFIG_TYPES.forEach(k => {
    var a = loadJSON(path.join(dir, k + '.json'));
    merge(config[k], a);
  });
}

/**
 * Reset the configuration as default.
 */
config.reset = () => {
  CONFIG_TYPES.forEach(t => {
    config[t] = loadJSON(__dirname + '/../conf/' + t + '.json');
  });
}

config.reset();
module.exports = config;