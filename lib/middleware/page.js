var path = require('path');

module.exports = function(app){
  return {
    /**
     * Set the fixed page title.
     *
     * @param {String} title the title string or messageId (for i18n)
     * @api public
     */
    title : function(title){
      return pageAttributeSetter(app, 'title', title, 'translate');
    },

    /**
     * Set the fixed page title.
     *
     * @param {String} canonicalUrl the canonical url of the page
     * @api public
     */
    canonical : function(canonicalUrl){
      return pageAttributeSetter(app, 'canonical', canonicalUrl, 'absoluteUrl');
    },


    /**
     * Set the feed url.
     *
     * @param {String} feedUrl the feed url of the page
     * @api public
     */
    feed : function(feedUrl){
      return pageAttributeSetter(app, 'feed', feedUrl, 'absoluteUrl');
    },

    /**
     * Set the javascripts for the page.
     *
     * @api public
     */
    javascripts : function(){
      var list = arguments;
      return function(req, res, next){
        var l = res.local('page').javascripts;
        for(var i in list){
          var p = list[i];
          if( l.indexOf(path) < 0 ){
            l.push(path.join(app.route, p));
          }
        }
        next();
      };
    },

    /**
     * Set the stylesheets for the page.
     *
     * @api public
     */
    stylesheets : function(){
      var list = arguments;
      return function(req, res, next){
        var l = res.local('page').stylesheets;
        for(var i in list){
          var p = list[i];
          if( l.indexOf(path) < 0 ){
            l.push(path.join(app.route, p));
          }
        }
        next();
      };
    }
  };
};


function pageAttributeSetter(app, attr, val, convert){
  return function(req, res, next){
    var v = val;
    if( typeof(v) == 'function'){
      v = val(req, res);
    }
    switch(convert){
    case "translate":
      v = app.i18n.translate(v, req.locale);
      break;
    case "absoluteUrl":
      v = "http://" + req.header('host') + path.join(app.route, v);
      break;
    }
    res.local('page')[attr] = v;
    next();
  };
}