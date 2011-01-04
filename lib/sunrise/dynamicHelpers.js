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
  _: function(req, res){
    return function(msgId){
      return req.app.i18n.translate(msgId, req.locale);
    };
  },
};