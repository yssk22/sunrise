var merge = require('./utils').merge;
var abspath = require('./utils').abspath;
var config = require('./config');
var oauthProviders = require('./middleware/auth').providers;
var app = require('./app');
var createSite = require('./site').createSite;

module.exports = dir => {
  var options = merge({}, require('optimist').argv);
  if( options.c ){
    var configpath = abspath(options.c);
    config.load(configpath);
    require('./utils').logConfigure(null, null, [configpath].concat(require.paths));
  }
  if( options.a ){
    options.a = !Array.isArray(options.a) ? [options.a] : options.a;
    options.a.forEach(p => {
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
  site.use((req, res, next) => {
    require('sunrise').raiseError(404);
  });

  site.deployAll(() => {
    site.listen(config.web.port, err => {
      if( err ){
        throw err;
      }else{
        site.logger.info('Listening on ' + config.web.port);
      }
    });
  });
};