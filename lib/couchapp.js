module.exports = require('couchapp');
module.exports.validator = function(newDoc, oldDoc, userCtx, secObj){
  var v = {};
  v.requireLogin = function(){
    if( userCtx.name == null ){
      v.forbidden('You must be logged in.');
    }
  };

  v.requireRoles = function(){
    var roles = Array.prototype.slice.call(arguments);
    if( !v.hasRoles.apply(v, roles) ){
      v.forbidden('You must has one of ' + roles.join(','));
    };
  };

  v.hasRoles = function(){
    var roles = userCtx.roles || [];
    for(var i=0, l=arguments.length; i<l; i++){
      var role = arguments[i];
      if( roles.indexOf(role) >= 0 ){
        return true;
      }
    }
    return false;
  };

  v.forbidden = function(message){
    throw({forbidden: message});
  };

  v.required = function(){
    for (var i=0, l=arguments.length; i < l; i++) {
      var field = arguments[i];
      var message = "The '"+field+"' field is required.";
      if (typeof newDoc[field] == "undefined"){
        v.forbidden(message);
      }
      if(newDoc[field] == ""){
        v.forbidden(message);
      }
    };
  };

  v.matches = function(field, regex, message) {
    if (!newDoc[field].match(regex)) {
      message = message || "Format of '"+field+"' field is invalid.";
      v.forbidden(message);
    }
  };

  v.unchanged = function() {
    for (var i=0; i < arguments.length; i++) {
      var field = arguments[i];
      if (oldDoc){
        var _old = JSON.stringify(oldDoc[field]);
        var _new = JSON.stringify(newDoc[field]);
        if( _old != _new ){
          v.forbidden("You may not change the '"+field+"' field.");
        }
      }
    }
  };

  v.dateFormat = function(field){
    for (var i=0; i < arguments.length; i++) {
      var val = JSON.stringify(newDoc[field]);
      var message = "Sorry, '"+field+"'(value = " + val + ") is not a valid date format. Try: 2010-02-24T17:00:03.432Z";
      v.matches(field, /\d{4}\-\d{2}\-\d{2}T\d{2}:\d{2}:\d{2}(\.\d*)?Z/, message);
    }
  };

  return v;
};
