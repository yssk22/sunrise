var merge = require('./utils').merge,
    abspath = require('./utils').abspath,
    config = require('./config'),
    oauthProviders = require('./middleware/auth').providers;
var app = require('./app');
var createSite = require('./site').createSite;

module.exports = function(dir){
  var options = merge({}, require('optimist').argv);
  if( options.c ){
    var configpath = abspath(options.c);
    config.load(configpath);
    require('./utils').logConfigure(null, null, [configpath].concat(require.paths));
  }
  if( options.a ){
    options.a = !Array.isArray(options.a) ? [options.a] : options.a;
    options.a.forEach(function(p){
      app.paths.push(abspath(p));
    });
  }

  for(var providerName in config.auth.oauthProviders){
    var provider = oauthProviders[providerName];
    if( provider ){
      merge(provider, config.auth.oauthProviders[providerName]);
    }
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