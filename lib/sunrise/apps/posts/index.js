var $ = require('jquery');

module.exports = {
   byTag : function(params, options){
      if( typeof(params) == 'string' ){
         params = {
            tag: params
         };
      }
      params = $.extend({
         descending: true,
         limit: 10
      }, params);
      options = $.extend({
         as: 'posts',
         template: __dirname + '/templates/partials/post_list.ejs'
      }, options);

      if( params.tag == undefined ){
         throw new TypeError('tag must be specified in params');
      }
      if( params.descending ){
         params.startkey = [params.tag, "\ufff8"];
         params.endkey = [params.tag];
         delete(params.tag);
      }else{
         params.startkey = [params.tag];
         params.endkey = [params.tag, "\u9999"];
         delete(params.tag);
      }
      return this.bind('view', 'posts/by_tag', params, options);
   },

   byUpdatedAt : function(params, options){
      params = $.extend({
         descending: true,
         limit: 1
      }, params);
      options = $.extend({
         as: 'posts',
         template: __dirname + '/templates/partials/post_list.ejs'
      }, options);
      return this.bind('view', 'posts/recent', params, options);
   },

   /**
    * Short cut for byUpdatedAt with filtering by month using request parameter
    */
   byMonth : function(options){
      options = $.extend({
         yearParam: "year",
         monthParam: "month"
      }, options);
      var yearParam  = options.yearParam;
      var monthParam = options.monthParam;
      var params = $.extend({
         startkey: function(req, res, f){
            f(undefined, req.params[yearParam] + "-" + req.params[monthParam] + "-99");
         },
         endkey: function(req, res, f){
            f(undefined, req.params[yearParam] + "-" + req.params[monthParam]);
         },
         limit: undefined
      }, params);
      return this.byUpdatedAt(params, options);
   },

   countByDate : function(group, options){
      var LEVEL_ENUM = {
         year: 1, month: 2, day: 3
      };
      if( typeof(group) == 'object'){
         options = group;
         group = 'month';
      }
      var params = {
         group: true,
         group_level: LEVEL_ENUM[group] || LEVEL_ENUM['month'],
         descending: true
      };
      options = $.extend({
         as: 'archives',
         template: __dirname + '/templates/partials/archive_list.ejs'
      }, options);
      return this.bind('view', 'posts/date_count', params, options);
   }
};