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

  // TODO: optimized implementation, do not depends on phpjs.
  sprintf: require('./vendor/php').sprintf,
  htmlescape(content) {
    return String(content)
      .replace(/&(?!\w+;)/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\"/g, '&quot;')
      .replace(/\'/g, '&#39;');
  },

  markdown(content) {
    return md(content, true);
  },

  info(content) {
    // TODO: view helper refactoring for theming
    return '<div class="ui-widget">' +
	    '<div class="ui-state-highlight ui-corner-all">' +
		  '<span style="float: left; margin-right: 0.3em;" class="ui-icon ui-icon-info"></span>' +
      content +
      '</div></div>';
  },

  alert(content) {
    return '<div class="ui-widget">' +
      '<div class="ui-state-error ui-corner-all">' +
			'<span style="float: left; margin-right: 0.3em;" class="ui-icon ui-icon-alert"></span>' +
      content +
      '</div></div>';
  }
};