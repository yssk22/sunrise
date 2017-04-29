module.exports = require('couchapp');
module.exports.validator = (newDoc, oldDoc, userCtx, secObj) => {
  var v = {};
  v.requireLogin = () => {
    if( userCtx.name == null ){
      v.forbidden('You must be logged in.');
    }
  };

  v.requireRoles = function(...args) {
    var roles = Array.prototype.slice.call(args);
    if( !v.hasRoles(...roles) ){
      v.forbidden('You must has one of ' + roles.join(','));
    };
  };

  v.hasRoles = function(...args) {
    var roles = userCtx.roles || [];
    for(var i=0, l=args.length; i<l; i++){
      var role = args[i];
      if( roles.indexOf(role) >= 0 ){
        return true;
      }
    }
    return false;
  };

  v.forbidden = message => {
    throw({forbidden: message});
  };

  v.required = function(...args) {
    for (var i=0, l=args.length; i < l; i++) {
      var field = args[i];
      var message = "The '"+field+"' field is required.";
      if (typeof newDoc[field] == "undefined"){
        v.forbidden(message);
      }
      if(newDoc[field] == ""){
        v.forbidden(message);
      }
    };
  };

  v.matches = (field, regex, message) => {
    if (!newDoc[field].match(regex)) {
      message = message || "Format of '"+field+"' field is invalid.";
      v.forbidden(message);
    }
  };

  v.unchanged = function(...args) {
    for (var i=0; i < args.length; i++) {
      var field = args[i];
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
