var path = require('path');
var $ = require('jquery');

function HTTPError(statusCode){
  this.statusCode = statusCode;
  Error.call("HTTP ERROR:" + statusCode);
  Error.captureStackTrace(this, arguments.callee);
}
require('util').inherits(HTTPError, Error);


exports.raise = function(statusCode){
  throw new HTTPError(statusCode);
}

exports.render = function(pageDir, ext){
  return function errorHandler(err, req, res, next){
    console.log('foo');
    var statusCode = err.statusCode || 500;
    // TODO: configurable according to view engine
    var file = path.join(pageDir, statusCode + ".ejs");
    console.log(file);
    path.exists(file, function(exists){
      if( exists ){
        res.render(file, {
          status: statusCode,
          locals: $.extend({
            error: err
          }, res.bindings)});
      }else{
        next(err);
      }
    });
  };
}
