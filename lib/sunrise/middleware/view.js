// TODO: view function


var $ = require('jquery');
var util = require('./util');

exports.render = function(view, options){
  return util.render(view, $.extend({}, options));
};
