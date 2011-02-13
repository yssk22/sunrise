var url = require('url'),
    util = require('util');
var $ = require('jquery');
var OAuth = require('oauth').OAuth;

// TODO: support more providers
var Providers = {
  twitter: {
    requestTokenUrl : 'https://api.twitter.com/oauth/request_token',
    accessTokenUrl  : 'https://api.twitter.com/oauth/access_token',
    authorizeUrl    : 'http://twitter.com/oauth/authorize',
    version         : "1.0",
    method          : "HMAC-SHA1",
    consumerKey     : '',
    consumerSecret  : '',
    normalizeUser   : function(results){
      return {
        userId: "twitter.com:" + results.user_id,
        userName: results.screen_name
      };
    }
  }
}

exports.providers = Providers;

exports.logout = function(options){
  options = $.extend({
    redirect: '/'
  }, options);

  return function(req, res, next){
    delete(req.session.auth);
    res.redirect(options.redirect);
  };
}

exports.authorized = function(options){
  return exports.requiredWith('twitter'); // default provider
}

// TODO: provider should be determined dynamically.
exports.requiredWith = function(providerName){
  provider = Providers[providerName];
  function isCallback(req, res){
    return req.query.oauth_token && req.query.oauth_verifier;
  }
  return function(req, res, next){
    if( req.session.auth && req.session.auth.providerName == providerName ){
      next();
    }else{
      var callbackUrl = buildCallbackUrl(req);
      var oauth = new OAuth(provider.requestTokenUrl,
                            provider.accessTokenUrl,
                            provider.consumerKey, provider.consumerSecret,
                            provider.version, callbackUrl,
                            provider.method);
      if( isCallback(req, res) ){
        req.logger.debug('Callabck Request :' + req.url);
        oauth.getOAuthAccessToken(
          req.query.oauth_token, null, req.query.oauth_verifier,
          function(err, oauth_access_token, oauth_access_token_secret, results){
            if(err){
              req.logger.error('getOAuthAccessToken failed: ' + err.data);
              req.logger.info('recover the failure with redirecion to ' + callbackUrl);
              res.redirect(callbackUrl);
            }else{
              req.logger.debug('Authenticated successfully. ' + util.inspect(results));
              req.session.auth = $.extend({
                providerName: providerName
              }, provider.normalizeUser(results));
              req.logger.info('logged in as ' +
                              req.session.auth.userName +
                              ' (uid = ' + req.session.auth.userId + ')');
              res.redirect(callbackUrl);
            }
          });
      }else{
        req.logger.debug('OAuth Required Request :' + req.url);
        oauth.getOAuthRequestToken(
          function(err, oauth_token, oauth_token_secret){
            if( err ){
              req.logger.error('oauth.getOAuthRequestToken failed', err);
              throw err;
            }
            var authorizeUrl = provider.authorizeUrl;
            res.redirect(authorizeUrl + '?oauth_token=' + oauth_token);
          });
      }
    }
  };
}

function buildCallbackUrl(req){
  var urlinfo = url.parse(req.url);
  var callbackUrl = req.socket.secure ? 'https' : 'http' + "://" + req.headers.host + urlinfo.pathname;
  var params = {};
  var hasParams = false;
  for(var key in req.param ){
    if( key != 'oauth_token' && key != 'oauth_verifier' ){
          hasParams = true;
      params[key] = req.param[key];
    }
  }
  if( hasParams ){
    callbackUrl = callbackUrl + "?" + querystring.stringify(params);
  }
  return callbackUrl;
}
