var fs = require('fs'),
    http = require('http'),
    path = require('path');

var $ = require('jquery');
var orgRender = http.ServerResponse.prototype.render;

/**
 * Overridable rendering with using appChain.
 *
 *
 */
http.ServerResponse.prototype.render = function(view, options, fn, parent){
  var req = this.req;
  options = $.extend({}, this.app.settings['view options'], options);
  var appChain = options.appChain;
  if( appChain == undefined ){
    appChain = req.app.getParents();
  }

  if( options.layout === true || options.layout === undefined ){
    // path resolving non-namespaced path search
    options.layout = resolveViewPath('layout', appChain, false);
    this.app.logger.debug('Layout resolved: ' + arguments[1].layout);
  }else if( options.layout && options.layout[0] != '/' ){
    // path resolving with namespacers
    options.layout = resolveViewPath(options.layout, appChain, true);
    this.app.logger.debug('Layout resolved: ' + arguments[1].layout);
  }
  // trace appChain for view resolving.
  // sunrise.install(site.install(app1.isntall(app2....)))
  if( view[0] == '/' ){
      return orgRender.apply(this, arguments);
  }else{
    view = resolveViewPath(view, appChain, true);
    this.app.logger.debug('View resolved: ' + arguments[0]);
    return orgRender.apply(this, arguments);
  }
}

function resolveViewPath(view, appChain, namespaced){
  /**
   * appChain structure should be:
   *
   * app      : dummy -> site -> app1  -> app2       -> ... -> appN
   * namespace: /     -> /    -> /app1 -> /app1/app2 -> ... -> /app1/.../appN
   * (see bin/server.js and lib/sunrise/server.js)
   *
   * view path resolution rule is:
   *
   * (namespaced == true)
   *
   *    {view root}/app1/.../appN of site
   *    {view root}/app2/.../appN of app1
   *    ...
   *    {view root}/appN          of appN-1
   *    {view root}/              of appN
   *
   * (namespaced == false)
   *
   *    {view root}/              of site
   *    {view root}/              of app1
   *    ...                       of ...
   *    {view root}/              of appN
   *
   */
  var sunrise = appChain[0];
  var len = appChain.length;
  var ns = [];
  var viewPaths = [];
  var prefix = "";
  var app = null;

  var i;
  if( namespaced ){
    for(i=2; i<len; i++){
      ns.push(appChain[i].namespace);
    }
  }
  for(i=1; i<len; i++){
    var viewRoot = appChain[i].set('views');
    if( namespaced ){
      viewPaths.push(path.join(viewRoot, ns.join('/')));
      ns.shift();
    }else{
      viewPaths.push(viewRoot);
    }
  }


  sunrise.logger.debug('Resolving View: ' + view);
  sunrise.logger.debug('namespaced : ' + namespaced);
  sunrise.logger.debug('ViewPaths: ' + require('util').inspect(viewPaths));

  for(i=0; i<len-1; i++){
    app = appChain[i+1];
    var v = path.join(viewPaths[i], view);
    if( path.basename(v).indexOf('.') == -1 ){
      v = v + (app.settings['view engine'] || '.ejs');
    }
    try{
      fs.statSync(v);
      return v;
    }catch(e){
      // pass
      app.logger.debug('View Missing: ' + v);
    }
  }
  // sunrise.logger.warning('View resolving failed in the application tree. Returns relative pathname: ' + view);
  return view;
}