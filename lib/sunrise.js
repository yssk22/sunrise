var fs = require('fs');
module.exports = {
  /**
   * Framework Version
   */
  version: '0.1.0',
  config: require('./config'),
  boot: require('./boot'),
  utils: require('./utils'),
  middleware: {},
  raiseError: function raiseError(statusCode){
    throw new HTTPError(statusCode);
  }
}

fs.readdirSync(__dirname + '/middleware').forEach(function(filename){
  if (/\.js$/.test(filename)) {
    var name = filename.substr(0, filename.lastIndexOf('.'));
    module.exports.middleware.__defineGetter__(name, function(){
      return require('./middleware/' + name);
    });
  }
});

function HTTPError(statusCode){
  this.statusCode = statusCode;
  Error.call("HTTP ERROR: " + statusCode);
  Error.captureStackTrace(this, arguments.callee);
}
require('util').inherits(HTTPError, Error);

