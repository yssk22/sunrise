var join = require('path').join;
var sunrise = require('sunrise');
var $ = sunrise.util;
var oauth = sunrise.oauth;

/**
 * OAuth provider setup
 *
 * oauth.providers.providerName.consumerKey    = "*********";
 * oauth.providers.providerName.consumerSecret = "*********";
 *
 * supported providerNames are:
 *
 *   twitter
 *
 */

/**
 * CSS Compiler setup
 *
 * addCssMacro make css frameworks as macro for less or sass scripts.
 *
 */
sunrise.ext.addCssMacro(__dirname + '/../_attachments/stylesheets/vendor/blueprint/blueprint/screen.css');
sunrise.ext.addCssMacro(__dirname + '/../_attachments/stylesheets/vendor/blueprint/blueprint/print.css');

module.exports = function(site){
  /**
   * oauth filters.
   * You can authorized actions with oauth.requiredWith() or your custom filters.
   *
   * example1: /posts/admin/ actions requires twitter authentication
   *
   *   site.all('/posts/admin/*',
   *      oauth.requiredWith('twitter'));
   *
   * example2: /posts/ actions requires authorized by any providers.
   *
   *   site.all('/posts/*', oauth.authorized());
   *
   */
  // protected resources
  // site.all('/posts/admin/*', oauth.authorized());

  // install applications
  site.install('posts', function(err, app){
    var posts = app.model;
    /**
     * Define the top page using posts resources.
     */
    site.get('/',
             $.title('Home'),
             posts.byTag('news'),
             site.view.render('index.ejs'),
             function(req, res, next){});
  });
}
