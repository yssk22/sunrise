/*!
 * Sunrise - View helper module
 * Copyright (c) 2011 Yohei Sasaki <yssk22@gmail.com>
 * MIT Licensed
 */
var md = require("node-markdown").Markdown;

module.exports = {
  inspect: require('util').inspect,
  querystring: require('querystring'),
  qs: require('querystring'),
  php: require('./vendor/php'),
  sanitizer: require('./vendor/sanitizer'),

  markdown: function(content){
    return md(content, true);
  },

  info: function(content){
    // TODO: view helper refactoring for theming
    return '<div class="ui-widget">' +
	    '<div class="ui-state-highlight ui-corner-all">' +
		  '<span style="float: left; margin-right: 0.3em;" class="ui-icon ui-icon-info"></span>' +
      content +
      '</div></div>';
  },

  alert: function(content){
    return '<div class="ui-widget">' +
      '<div class="ui-state-error ui-corner-all">' +
			'<span style="float: left; margin-right: 0.3em;" class="ui-icon ui-icon-alert"></span>' +
      content +
      '</div></div>';
  }
};