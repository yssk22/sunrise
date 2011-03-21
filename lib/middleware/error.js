var path = require('path');

module.exports = function(pageDir, ext){
  return function errorHandler(err, req, res, next){
    var logger = req.app.logger;
    var statusCode = 404;
    statusCode = err.statusCode || 500;
    if( statusCode >= 500 ){
      logger.error('errorHandler detects an internal error', err);
    }
    // TODO: configurable according to view engine
    var file = path.join(pageDir, statusCode + ".ejs");
    path.exists(file, function(exists){
      if( exists ){
        res.local('error', err);
        res.render(file, {status: statusCode});
      }else{
        logger.warn('Cannot response error pages - expected path: ' + file);
        if( statusCode >= 500 ){
          next(err);
        }else{
          next();
        }
      }
    });
  };
};