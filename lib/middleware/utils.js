/**
 * Utility middleware
 *
 * Copyright (c) Yohei Sasaki <yssk22@gmail.com>
 * MIT Licensed
 */
var join = require('path').join;

/**
 * Output the debug log with message;
 *
 * @param {String} msg debugg message.
 * @api public
 */
exports.debug = msg => (req, res, next) => {
  req.app.logger.debug(msg + '\n' +
                       require('util').inspect(res._locals));
  next();
}

/**
 * Render the dump of response bindings.
 *
 * @api public
 */
exports.dumpBindings = () => (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(res._locals));;
}


/**
 * Redirects the specified url. This middleware is wrapper of response.redirect.
 *
 * @param {String} url url to redirect.
 * @param {Number} status status code
 * @api public
 *
 */
exports.redirect = (url, status) => (req, res, next) => {
  res.redirect(url, status);
};

/**
 * Make parallel middleware filters and finish with the last filter.
 *
 */
exports.parallel = function(...args) {
  var list = args;
  return (req, res, next) => {
    var current = 0;
    var len = list.length;
    for(var i=0; i<len;i++){
      var fun = list[i];
      fun(req, res, () => {
        current++;
        if( current == len ){
          next();
        }
      });
    }
  };
}

/**
 * Stop the middleware filter chaings.
 * This is used for debugging.
 */
exports.stop = options => (req, res, next) => {
  // do nothing
}


exports.js =  function(...args) {
  var list = args;
  return (req, res, next) => {
    var l = res.local('page').javascripts;
    for(var i in list){
      var p = list[i];
      if( l.indexOf(p) < 0 ){
        l.push(join(req.app.route, p));
      }
    }
    next();
  };
};

exports.css = function(...args) {
  var list = args;
  return (req, res, next) => {
    var l = res.local('page').stylesheets;
    for(var i in list){
      var p = list[i];
      if( l.indexOf(p) < 0 ){
        l.push(join(req.app.route, p));
      }
    }
    next();
  };
};


// /**
//  * Render the given view and bind it to the Response#bindings.
//  *
//  * @param {String} view view filename
//  * @param {object} options passed to Response#render. 'as' parameter is used for the bound variable (default is viewname).
//  * @api public
//  */
// exports.bindView = function(view, options){
//   options = $.extend({
//     as: view
//   }, options);
//   return function(req, res, next){
//     res.render(view,
//                $.extend({locals: res.bindings}, options),
//                function(err, str){
//                  res.bindings[options.as] = err || str;
//                  next();
//                });
//   };
// };

// /**
//  * Render the given partial view and bind it to the Response#bindings.
//  *
//  * @param {String} view view filename
//  * @param {object} options passed to Response#partial. 'as' parameter is used for the bound variable (default is viewname).
//  *
//  * @api public
//  */
// exports.bindPartial = function(view, options){
//   options = $.extend({
//     as: view
//   }, options);
//   return function(req, res, next){
//     res.bindings[options.as] = res.partial(
//       view,
//       $.extend({locals: res.bindings}, options)
//     );
//     next();
//   };
// }