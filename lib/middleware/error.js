var path = require('path');

var cache = {};


module.exports = (pageDir, ext) => function errorHandler(err, req, res, next){
  var logger = req.app.logger;
  var statusCode = 404;
  statusCode = err.statusCode || 500;
  if( statusCode >= 500 ){
    logger.error('errorHandler detects an internal error', err);
  }
  // TODO: configurable according to view engine
  var file = path.join(pageDir, statusCode + ".ejs");

  function exists(p, callback){
    if(cache[p] !== undefined ){
      callback(cache[p]);
    }else{
      path.exists(p, exists => {
        logger.warn('Cannot response error pages - expected path: ' + file);
        cache[p] = exists;
        callback(exists);
      });
    }
  }

  exists(file, exists => {
    if(exists){
      res.local('error', err);
      res.render(file, {status: statusCode});
    }else{
      if( statusCode >= 500 ){
        next(err);
      }else{
        next();
      }
    }
  });
};