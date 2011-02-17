var querystring = require('querystring');
module.exports = {
  session: function(req, res){
    return req.session;
  },
  userCtx: function(req, res){
    return req.currentUser();
  },
  isLogin: function(req, res){
    return req.isLogin();
  },

  url: function(req, res){
    return function(path){
      if( path ){
        return 'http://' + req.header('host') + path;
      }else{
        return 'http://' + req.header('host') + req.url;
      }
    };
  },

  _: function(req, res){
    return function(msgId){
      return req.app.i18n.translate(msgId, req.locale);
    };
  },
};