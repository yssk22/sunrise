var $ = require('jquery');

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
    if( typeof(view) == 'function' ){
      var v = view.call(this, req, res);
      if( typeof(v) == 'object' ){
        res.render(v.view, $.extend(
          {
            locals: res.bindings
          },
          options, v.options));
      }else{
        res.render(v, $.extend(
          {
            locals: res.bindings
          },
          options));
      }
    }else{
      res.render(view, $.extend(
        {
          locals: res.bindings
        },
        options));
    };
  };
};

