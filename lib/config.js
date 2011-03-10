var fs = require('fs'),
    path = require('path');
var merge = require('./utils').merge;


var CONFIG_TYPES = ['db', 'web', 'auth'];
var config = {};

function loadJSON(filepath){
  try{
    var obj = JSON.parse(fs.readFileSync(filepath));
    return obj;
  }catch(e){
    if( e.errno == 2 || e.errno == 9){
      // no such file or directory;
      return {};
    }else{
      throw new Error("failed to load " + filepath + ": " + e);
    }
  }
}


config.load = function(dir){
 CONFIG_TYPES.forEach(function(k){
    var a = loadJSON(path.join(dir, k + '.json'));
    merge(config[k], a);
  });
}

config.reset = function(){
  CONFIG_TYPES.forEach(function(t){
    config[t] = loadJSON(__dirname + '/../conf/' + t + '.json');
  });
}

config.reset();
module.exports = config;