var path = require('path');
var $ = require('jquery');

function HTTPError(statusCode){
  this.statusCode = statusCode;
  Error.call("HTTP ERROR: " + statusCode);
  Error.captureStackTrace(this, arguments.callee);
}
require('util').inherits(HTTPError, Error);


exports.raise = statusCode => {
  throw new HTTPError(statusCode);
}

exports.render = (pageDir, ext) => function errorHandler(err, req, res, next){
  var statusCode = 404;
  if( err ){
    statusCode = err.statusCode || 500;
    if( statusCode >= 500 ){
      req.logger.error('errorHandler detects an internal error', err);
    }
  }
  // TODO: configurable according to view engine
  var file = path.join(pageDir, statusCode + ".ejs");

  path.exists(file, exists => {
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
}
