var path = require('path');
var couchapp = require('couchapp');
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
ddoc.init = function(app){
  var merge = require('sunrise').utils.merge;
  var parallel = require('sunrise').middleware.utils.parallel,
      js = require('sunrise').middleware.utils.js,
      css = require('sunrise').middleware.utils.css,
      auth = require('sunrise').middleware.auth;
  var raiseError = require('sunrise').raiseError;

  var version = {
    node: process.version,
    coucdb: '',
    sunrise: require('sunrise').version
  };
  var stats = {
    serverBootTime: new Date()
  };

  app.db.connection.info(function(err, v){
    version.couchdb = v.version;
  });


  app.get('/',
          css('css/system.css'),
          function(req, res, next){
            res.local('version', version);
            res.local('stats', merge({}, stats, process.memoryUsage()));
            res.render('index.ejs');
          });

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


  app.dynamicHelpers(ddoc.dynamicHelpers);
  app.helpers(ddoc.helpers);


  app.helpers({
    required: function(){
      // saying that the layout uses $system helpers;
      this.css(app.set('home') + 'css/system_helper.css');
    },

    linkToLogin: function(provider, label){
      this.css(app.set('home') + 'css/system_helper.css');
      var url = app.set('home') + 'login/' + provider;
      return '<a href="' + url + '" class="system login ' + provider + '">' + label + '</a>';
    },

    linkToLogout: function(label){
      this.css(app.set('home') + 'css/system_helper.css');
      var url = app.set('home') + 'logout';
      return '<a href="' + url + '" class="system logout">' + label + '</a>';
    },

    linkToUser: function(userObj){
      this.css(app.set('home') + 'css/system_helper.css');
      var url = app.set('home') + 'profiles/' + encodeURIComponent(userObj.user_id);
      var klass = this.htmlescape(userObj.provider) || 'undefined';
      var label;
      if( klass == 'twitter' ){
        // http://tweetimag.es/
        label = this.sprintf('<img width="18" height="18" src="http://img.tweetimag.es/i/%s_m" /><span>%s</span>', userObj.user_name, this.htmlescape(userObj.user_name));
      }else{
        label = this.htmlescape(userObj.user_name);
      }
      return '<a href="' + url + '" class="system user ' + klass + '">' + label + '</a>';
    }
  });
};

couchapp.loadAttachments(ddoc, path.join(__dirname, '_attachments'));
