module.exports = require('couchapp');
module.exports.validator = function(newDoc, oldDoc, userCtx, secObj){
  var v = {};

  v.forbidden = function(message){
    throw({forbidden: message});
  };

  v.required = function(){
    for (var i=0; i < arguments.length; i++) {
      var field = arguments[i];
      message = "The '"+field+"' field is required.";
      if (typeof newDoc[field] == "undefined"){
        v.forbidden(message);
      }
      log(field)
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
