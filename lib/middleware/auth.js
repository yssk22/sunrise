var url = require('url');
var util = require('util');
var path = require('path');
var merge = require('../utils').merge;
var OAuth = require('oauth').OAuth;
var userDB = require('../db').userDB;
var crypto = require('crypto');

var sha1 = str => {
  var shasum = crypto.createHash('sha1');
  shasum.update(str);
  return shasum.digest('hex');
};

var GUEST = {
  _id: 'guest',
  name: 'guest',
  display_name: 'Guest',
  roles: [],
  lastLogin: new Date(1970, 1, 1)
};

var ADMIN = {
  _id: 'admin',
  name: 'admin',
  display_name: 'Administrator',
  roles: ["_admin"],
  lastLogin: new Date(1970, 1, 1)
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
    normalizeUser(results) {
      return {
        user_id: "twitter.com-" + results.user_id,
        display_name: results.screen_name,
        provider: "twitter"
      };
    }
  }
}

exports.providers = Providers;

exports.logout = options => {
  options = merge({
    redirect: '/'
  }, options);

  return (req, res, next) => {
    delete(req.session.auth);
    res.redirect(options.redirect);
  };
}

exports.authorized = options => // TODO: support more providers
// default provider
exports.requiredWith('twitter')

// TODO: provider should be determined dynamically.
exports.requiredWith = providerName => {
  var logger = require('../utils').getLogger('auth');
  var provider = Providers[providerName];
  function isCallback(req, res){
    return req.query.oauth_token && req.query.oauth_verifier;
  }
  return (req, res, next) => {
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
          (err, oauth_access_token, oauth_access_token_secret, results) => {
            if(err){
              logger.info('recover the failure with redirecion to ' + callbackUrl);
              res.redirect(callbackUrl);
            }else{
              var auth = merge({
                providerName
              }, provider.normalizeUser(results));
              userDB(db => {
                db.get('org.couchdb.user:' + auth.user_id, (err, doc) => {
                  if( err ){
                    logger.info('Creating the new user object for ' + auth.user_id);
                    doc = {};
                    db.uuid((err, uuid) => {
                      // TODO automatically create internal user data.
                      doc._id = 'org.couchdb.user:' + auth.user_id,
                      doc.type = 'user';
                      doc.name = auth.user_id;
                      doc.display_name = auth.display_name;
                      doc.password_sha = sha1('password' + uuid);
                      doc.roles = [];
                      doc.salt = uuid;
                      doc.provider = auth.provider;
                      doc.lastLogin = new Date();
                      merge(auth, doc);
                      db.save(doc, (err, doc2) => {
                        if( err ){
                          logger.error('Failed to create te new user object for ' + auth.user_id + ": " + JSON.stringify(err));
                        }
                        logger.info(doc.display_name + ' has logged in ' +
                                    ' (uid = ' + doc._id + ')');
                        delete(doc.password_sha);
                        delete(doc.salt);
                        req.session.auth = doc;
                        res.redirect(callbackUrl);
                      });
                    });
                  }else{
                    logger.info('Updating the user object for ' + auth.user_id);
                    doc.lastLogin = new Date();
                    db.save(doc, (err, doc2) => {
                      logger.info(doc.display_name + ' has logged in ' +
                                  ' (uid = ' + doc._id + ')');
                      delete(doc.password_sha);
                      delete(doc.salt);
                      req.session.auth = doc;
                      res.redirect(callbackUrl);
                    });
                  }
                });
              });
            }
          });
      }else{
        logger.debug('OAuth Required');
        logger.debug('Callback Url is :' + callbackUrl);
        oauth.getOAuthRequestToken(
          (err, oauth_token, oauth_token_secret) => {
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
