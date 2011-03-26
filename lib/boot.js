var merge = require('./utils').merge,
    abspath = require('./utils').abspath,
    config = require('./config');
var app = require('./app');
var createSite = require('./site').createSite;

module.exports = function(dir){
  var options = merge({}, require('optimist').argv);
  if( options.c ){
    config.load(helper.abspath(options.c));
  }
  if( options.a ){
    options.a = !Array.isArray(options.a) ? [options.a] : options.a;
    options.a.forEach(function(p){
      app.paths.push(abspath(p));
    });
  }
  var site = createSite(abspath(dir));
  site.use(function(req, res, next){
    require('sunrise').raiseError(404);
  });

  site.deployAll(function(){
    site.listen(config.web.port, function(err){
      if( err ){
        throw err;
      }else{
        site.logger.info('Listening on ' + config.web.port);
      }
    });
  });
};