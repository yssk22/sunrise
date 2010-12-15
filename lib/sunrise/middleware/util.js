/**
 * Utility middleware
 */
var $ = require('jquery');

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

/**
 * Render the given view to the response stream.
 * This is wrapper for response.render(view, options) and Response#bindings
 * are asigned to the view variable.
 *
 * @param {String} view view filename
 * @param {options} options passed to Response#render.
 * @api public
 */
exports.render = function(view, options){
   return function(req, res){
      res.render(view, $.extend({locals: res.bindings}, options));
   };
};

/**
 * Render the given view and bind it to the Response#bindings.
 * @param {String} view view filename
 * @param {object} options passed to Response#render. 'as' parameter is used for the bound variable (default is viewname).
 * @api public
 */
exports.bindView = function(view, options){
   options = $.extend({
      as: view
   }, options);
   return function(req, res, next){
      res.render(view,
                 $.extend({locals: res.bindings}, options),
                 function(err, str){
                    res.bindings[options.as] = err || str;
                    next();
                 });
   };
};