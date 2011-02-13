var path = require('path');

var $ = require('jquery');

var site = require('./site');
var config = require('./config');
var helper = require('./helper');
var error = require('./error');
var oauthProviders = require('./middleware/oauth').providers;


module.exports = function(base, options){
  options = $.extend({}, require('optimist').argv);
  if( options.c ){
    config.load(helper.abspath(options.c));
  }
  for(var providerName in config.auth.oauthProviders){
    var provider = oauthProviders[providerName];
    if( provider ){
      $.extend(provider, config.auth.oauthProviders[providerName]);
    }
  }

  var s = site.createSite();
  s.logger.debug('Constructing sunrise site ...');
  s.install(base,
            { namespace: '/' },
            function(err, app){
              if( err ){
                throw err;
              }else{
                // TODO: not found handler
                // s.all('*', function(req, res, next){
                //   console.log('fooo');
                //   error.raise(404);
                // });

                // finally added error document on 'production' environment.
                var errordoc = path.join(app.set('views'), 'errors');
                s.error(error.render(errordoc));
                s.logger.info("site initialized from " + base);
                s.listen(config.web.port, function(err){
                  if( err ){
                    throw err;
                  }
                  s.logger.info("listening on " + config.web.port);
                });
              }
            });
}

