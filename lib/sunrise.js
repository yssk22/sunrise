module.exports = {
  /**
   * Framework Version
   */
  version: '0.1.0',
  config: require('./config'),
  middleware: {}
}

fs.readdirSync(__dirname + '/middleware').forEach(function(filename){
  if (/\.js$/.test(filename)) {
    var name = filename.substr(0, filename.lastIndexOf('.'));
    exports.middleware.__defineGetter__(name, function(){
      return require('./middleware/' + name);
    });
  }
});
