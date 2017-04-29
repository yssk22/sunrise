var path = require('path');
var couchapp = require('sunrise').couchapp;
var ddoc = {
  _id: "_design/system" ,
  version: require('sunrise').version,
  name: 'System',
  description: 'Sunrise system application',
  author: 'Yohei Sasaki',
  views: {},
  shows: {},
  lists: {}
};

module.exports = ddoc;

ddoc.helpers = require('./helpers');
ddoc.dynamicHelpers = require('./dynamicHelpers');
ddoc.init = app => {
  var merge = require('sunrise').utils.merge;
  var parallel = require('sunrise').middleware.utils.parallel;
  var js = require('sunrise').middleware.utils.js;
  var css = require('sunrise').middleware.utils.css;
  var auth = require('sunrise').middleware.auth;
  var raiseError = require('sunrise').raiseError;

  var version = {
    node: process.version,
    coucdb: '',
    sunrise: require('sunrise').version
  };
  var stats = {
    serverBootTime: new Date()
  };

  app.db.connection.info((err, v) => {
    version.couchdb = v.version;
  });


  app.get('/',
          css('css/system.css'),
          (req, res, next) => {
            res.local('version', version);
            res.local('stats', merge({}, stats, process.memoryUsage()));
            res.render('index.ejs');
          });

  // TODO: Response login selector
  // app.get('/login', function(req, res, nex){
  //
  // });


  // Login endpoint.
  app.get('/login/:providerName', (req, res, next) => {
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


  app.dynamicHelpers(ddoc.dynamicHelpers);
  app.helpers(ddoc.helpers);


  app.helpers(require('./helpers')(app));
  app.dynamicHelpers(require('./dynamicHelpers')(app));
};

couchapp.loadAttachments(ddoc, path.join(__dirname, '_attachments'));
