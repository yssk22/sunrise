module.exports = {
  /**
   * Returns session object
   */
  session: function(req, res){
    return req.session;
  },

  /**
   * Returns the user object
   */
  userCtx: function(req, res){
    return req.currentUser();
  },

  /**
   * Returns true if the current user has logged in.
   */

  isLogin: function(req, res){
    return req.isLogin();
  },

  /**
   * Returns the absolute URL for the given path
   *
   * @param {String} path the url path.
   * @api public
   */
  url: function(req, res){
    return function(path){
      if( path ){
        return 'http://' + req.header('host') + path;
      }else{
        return 'http://' + req.header('host') + req.url;
      }
    };
  },

  /**
   * Returns the translated message for the user locale.
   *
   * @param {String} msgId message id.
   * @api public
   */
  _: function(req, res){
    return function(msgId){
      return req.app.i18n.translate(msgId, req.locale);
    };
  }
};