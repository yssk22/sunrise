var md = require("node-markdown").Markdown;

module.exports = {
  querystring: require('querystring'),
  qs: require('querystring'),
  php: require('../vendor/php'),

  markdown: function(content){
    return md(content, true);
  },

  sanitizeHtml: function(content){
    return require('../vendor/sanitizer').sanitize(content);
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