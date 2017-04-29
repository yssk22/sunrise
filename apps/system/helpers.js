module.exports = app => ({
  required() {
    // saying that the layout uses $system helpers;
    this.css(app.set('home') + 'css/system_helper.css');
  },

  logo(path) {
    path = path || '/';
    imgPath  = app.set('home') + 'css/images/sunrise.png';
    return '<h1 class="system logo"><a href="' + path + '">' +
      '<img src="' + imgPath + '" width="307" height="70" /></a></h1>';
  },

  accountNavigation(provider) {
    return '<nav class="system accountNavigation"><ul>' +
      '<li>' + this.linkToUser(this.currentUser) + '</li>' +
      '<li>' + (this.isLogin ? this.linkToLogout('Logout') : this.linkToLogin(provider, "Login")) + '</li>' +
      "</ul></nav>";
  },

  siteNavigation() {
    return '<nav class="system siteNavigation"><ul>' +
       '<li><a href="/">Home</a>' +
       (this.installedApps.map(appInfo => '<li><a href="' + appInfo.home + '">' + appInfo.menuName + '</a></li>')).join('\n') + '</ul></nav>';
  },

  linkToLogin(provider, label) {
    this.css(app.set('home') + 'css/system_helper.css');
    var url = app.set('home') + 'login/' + provider;
    return '<a href="' + url + '" class="system login ' + provider + '">' + label + '</a>';
  },

  linkToLogout(label) {
    this.css(app.set('home') + 'css/system_helper.css');
    var url = app.set('home') + 'logout';
    return '<a href="' + url + '" class="system logout">' + label + '</a>';
  },

  linkToUser(userObj) {
    this.css(app.set('home') + 'css/system_helper.css');
    var url = app.set('home') + 'profiles/' + encodeURIComponent(userObj._id);
    var klass = this.htmlescape(userObj.provider) || 'undefined';
    var label;
    if( klass == 'twitter' ){
      // http://tweetimag.es/
      label = this.sprintf('<img width="18" height="18" src="http://img.tweetimag.es/i/%s_m" /><span>%s</span>', userObj.display_name, this.htmlescape(userObj.display_name));
    }else{
      label = this.htmlescape(userObj.display_name);
    }
    return '<a href="' + url + '" class="system user ' + klass + '">' + label + '</a>';
  }
})