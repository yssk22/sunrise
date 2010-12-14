/**
 * Utility middleware
 */

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