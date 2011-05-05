/*!
 * Sunrise View
 * Copyright (c) 2011 Yohei Sasaki <yssk22@gmail.com>
 * MIT Licensed
 */

var join = require('path').join;
var express = require('express');
var http = require('http'),
    res = http.ServerResponse.prototype;

var origRender = res.render;

/**
 * Override Express render function.
 *
 * - if layout is not found in an application, try to use the site level layout.
 */
res.render = function(view, opts, fn, parent, sub){
  var app = this.app;
  try{
    return origRender.call(this, view, opts, fn, parent, sub);
  }catch(e){
    if( e.view && (opts && opts.isLayout) && app.parent ){
      // try parent layout
      var path = join(app.parent.set('views'), e.view.view);
      return origRender.call(this, path, opts, fn, parent, sub);
    }else{
      throw e;
    }
  }
}