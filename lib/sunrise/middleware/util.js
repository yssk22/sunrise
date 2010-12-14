/**
 * Utility middleware
 */

exports.dumpBindings = function(msg, headers){
   return function(req, res){
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(res.bindings));;
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
 *
 * @param {String} title the title string
 * @api public
 */
exports.title = function(title){
   return function(req, res, next){
      res.bindings.page.title = title;
      next();
   };
};

/**
 * Set the javascripts for the page.
 *
 * @api public
 */
exports.javascripts = function(){
   var list = arguments;
   return function(req, res, next){
      var l = res.bindings.page.javascripts;
      for(var i in list){
         var path = list[i];
         if( l.indexOf(path) < 0 ){
           l.push(path);
         }
      }
      next();
   };
};

/**
 * Set the stylesheets for the page.
 *
 * @api public
 */
exports.stylesheets = function(){
   var list = arguments;
   return function(req, res, next){
      var l = res.bindings.page.stylesheets;
      for(var i in list){
         var path = list[i];
         if( l.indexOf(path) < 0 ){
           l.push(path);
         }
      }
      next();
   };
}