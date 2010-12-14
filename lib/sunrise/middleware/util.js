/**
 * Utility middleware
 */

exports.dumpBindings = function(msg, headers){
   return function(req, res){
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(res.bindings));
   };
}

/**
 * Redirects the specified url. This middleware is wrapper of response.redirect.
 *
 * @param {String} url url to redirect.
 * @param {Number} status status code
 * @api public
 *
 */
exports.redirect = function(url, status){
   return function(req, res){
      res.redirect(url, status);
   };
};

/**
 * Set the fixed page title.
 */
exports.title = function(title){
   return function(req, res, next){
      res.bindings.page.title = title;
      next();
   };
}