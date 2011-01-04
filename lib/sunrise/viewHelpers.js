var logger = require('./logger').getLogger();
var md = require("node-markdown").Markdown;

module.exports = {
  php: require('./vendor/php'),
  markdown: function(content){
    return md(content, true);
  },
  sanitizeHtml: function(content){
    return require('./vendor/sanitizer').sanitize(content);
  }
};