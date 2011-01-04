/**
 * Utility middleware
 */
var $ = require('jquery');


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
 * Render the given view to the response stream.
 * This is wrapper for response.render(view, options) and Response#bindings
 * are asigned to the view variable.
 *
 * @param {String} view view filename
 * @param {options} options passed to Response#render.
 * @api public
 */
exports.render = function(view, options){
  return function(req, res, next){
    res.render(view, $.extend({locals: res.bindings}, options));
  };
};

/***
 * Make parallel middleware filters and finish with the last filter.
 *
 * @example
 *
 * util.parallel(
 *    func1, func2, func3, func4
 * );
 *
 */
exports.parallel = function(){
  var list = arguments;
      return function(req, res, next){
        var current = 0;
        var len = list.length;
        for(var i=0; i<len;i++){
          var fun = list[i];
          fun(req, res, function(){
            current++;
            if( current == len ){
              next();
            }
          });
        }
      };
}

/***
 * Make the serial middleware filters.
 */
exports.serial = function(){
      var list = arguments;
  return function(req, res, next){
    var current = 0;
    var len = list.length;
    function rec(){
      if(current == len){
        next();
      }else{
        list[current](req, res, function(){
          current++;
          rec();
        });
      }
    }
    rec();
  };
}

exports.stop = function(options){
  return function(req, res, next){
    // nothing
  };
}



var join = require('path').join;

/**
     * Set the fixed page title.
     *
     * @param {String} title the title string or messageId (for i18n)
     * @api public
     */
exports.title = function(title){
  return function(req, res, next){
    res.bindings.page.title = req.app.i18n.translate(title, req.locale);
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
            l.push(join(req.app.namespace, path));
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
        l.push(join(req.app.namespace, path));
      }
    }
    next();
  };
}


/**
 * Render the given view and bind it to the Response#bindings.
 *
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

/**
 * Render the given partial view and bind it to the Response#bindings.
 *
 * @param {String} view view filename
 * @param {object} options passed to Response#partial. 'as' parameter is used for the bound variable (default is viewname).
 *
 * @api public
 */
exports.bindPartial = function(view, options){
  options = $.extend({
    as: view
  }, options);
  return function(req, res, next){
    res.bindings[options.as] = res.partial(
      view,
      $.extend({locals: res.bindings}, options)
    );
    next();
  };
}


/**
 * Output the debug log with message;
 *
 * @api public
 */
exports.debug = function(msg){
  return function(req, res, next){
    req.logger.debug(msg);
    req.logger.debug(require('util').inspect(res.bindings));
    next();
  };
}

/**
 * Render the dump of response bindings.
 *
 * @api public
 */
exports.dumpBindings = function(msg, headers){
  return function(req, res){
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(res.bindings));;
  };
}
