var url = require('url'),
    util = require('util'),
    path = require('path');
var merge = require('../utils').merge,
    logger = require('../utils').getLogger('auth');
var OAuth = require('oauth').OAuth;

var GUEST = {
  user_id: 'guest',
  user_name: 'Guest'
};

var ADMIN = {
  user_id: 'admin',
  user_name: 'Administrator'
};

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
        user_id: "twitter.com:" + results.user_id,
        user_name: results.screen_name,
        provider: "twitter"
      };
    }
  }
}

exports.providers = Providers;

exports.logout = function(options){
  options = merge({
    redirect: '/'
  }, options);

  return function(req, res, next){
    delete(req.session.auth);
    res.redirect(options.redirect);
  };
}

exports.authorized = function(options){
  // TODO: support more providers
  return exports.requiredWith('twitter'); // default provider
}

// TODO: provider should be determined dynamically.
exports.requiredWith = function(providerName){
  var provider = Providers[providerName];
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
        logger.debug('OAuth Callabck');
        oauth.getOAuthAccessToken(
          req.query.oauth_token, null, req.query.oauth_verifier,
          function(err, oauth_access_token, oauth_access_token_secret, results){
            if(err){
              logger.info('recover the failure with redirecion to ' + callbackUrl);
              res.redirect(callbackUrl);
            }else{
              req.session.auth = merge({
                providerName: providerName
              }, provider.normalizeUser(results));
              logger.info('logged in as ' +
                              req.session.auth.user_name +
                              ' (uid = ' + req.session.auth.user_id + ')');
              res.redirect(callbackUrl);
            }
          });
      }else{
        logger.debug('OAuth Required');
        logger.debug('Callback Url is :' + callbackUrl);
        oauth.getOAuthRequestToken(
          function(err, oauth_token, oauth_token_secret){
            if( err ){
              logger.error('oauth.getOAuthRequestToken failed', err);
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
  var urlinfo = url.parse(path.join(req.app.set('home'), req.url));
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


// extends HttpServer Request
var req = http.IncomingMessage.prototype;
req.__defineGetter__('currentUser', function(){
  if( this.session && this.session.auth ){
    return this.session.auth;
  }else{
    return GUEST;
  }
});

req.__defineGetter__('isLogin', function(){
  return this.session && (this.session.auth != null);
});
