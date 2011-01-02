module.exports = {
   session: function(req, res){
      return req.session;
   },
   userCtx: function(req, res){
     if( req.session && req.session.auth ){
         return req.session.auth;
      }else{
         return {
            userId: null,
            userName: 'Guest'
         };
      }
   },
   php: function(req, res){
      return require('sunrise/vendor/php');
   },

   _: function(req, res){
      return function(msgId){
         return req.app.i18n.translate(msgId, req.locale);
      };
   }
};