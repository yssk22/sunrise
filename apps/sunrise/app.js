var path = require('path');
var couchapp = require('couchapp');
var raiseError = require('sunrise').raiseError;
var merge = require('sunrise').utils.merge;
var auth = require('sunrise').middleware.auth;

var ddoc = {
  _id: "_design/sunrise" ,
  views: {},
  shows: {},
  lists: {}
};

module.exports = ddoc;

ddoc.init = function(app){
  // TODO: Response login selector
  // app.get('/login', function(req, res, nex){
  //
  // });


  // Login endpoint.
  app.get('/login/:providerName', function(req, res, next){
    var provider = auth.providers[req.params.providerName];
    if( provider ){
      if( req.isLogin ){
        // already logged in, redirect to the site top.
        res.redirect('../');
      }else{
        var fun = auth.requiredWith(req.params.providerName);
        fun(req, res, next);
      }
    }else{
      raiseError(404);
    }
  });

  // Logout endpoint.
  app.get('/logout', auth.logout({redirect: '../'}));
};

couchapp.loadAttachments(ddoc, path.join(__dirname, '_attachments'));
