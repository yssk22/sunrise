var db = require('config').couchdb;
var proxiedTo = require('middleware/couchdb').proxiedTo;
var couchapp = require('couchapp');
var $ = require('jquery');

/**
 * @function list the posts that have given tagName.
 */
exports.byTag = function(tagName, options){
   return proxiedTo("/_design/posts/_view/by_tag", $.extend({
      startkey: [tagName, '\u9999'],
      endkey: [tagName],
      descending: true,
      limit: 10,
      as: 'posts'
   }, options));
};

/**
 * @function list the posts ordered by the updated_at field.
 */
exports.byUpdatedAt = function(options){
   return proxiedTo("/_design/posts/_view/recent", $.extend({
      limit: 10,
      descending: true,
      as: 'posts'
   }, options));
}

exports.byMonth = function(options){
  return exports.byUpdatedAt($.extend({
     startkey: function(req, res, f){
        f(undefined, req.params.year + "-" + req.params.month + "-99");
     },
     endkey: function(req, res, f){
        f(undefined, req.params.year + "-" + req.params.month);
     }
  }, options));
}

/**
 * @function list the number of posts grouped by tag name.
 */
exports.countTags = function(options){
   return proxiedTo('/_design/posts/_view/tag_count', $.extend({
      group: true,
      group_level: 1,
      as: 'tags'
   }, options));
}

/**
 * @function get the number of posts grouped by given group.
 *
 * @param group {String} one of 'year', 'month', or 'day'
 */
exports.countByDate = function(group, options){
   var LEVEL = {  // group_level mapping
      'year'  : 1,
      'month' : 2,
      'day'   : 3
   };
   if(group == undefined){
      group = 'month';
      options = $.extend({}, options);
   }else if( typeof(group) == 'object' ){
      options = group;
      group = 'month';
   }
   var group_level = LEVEL[group];
   if( group_level == undefined ){
      throw new TypeError("group must be one of 'year', 'month', or 'date'");
   }

   return proxiedTo("/_design/posts/_view/date_count", $.extend({
      group: true,
      group_level: group_level,
      descending: true,
      as: "archives"
   }, options));
};

/**
 * @function get the document of the given id
 *
 * @param {Object} options proxy options
 *
 */
exports.get = function(options){
   return proxiedTo(function(req, res, f){
      f(undefined, '/' + couchapp.id(req.params.id, 'post'));
   }, $.extend({
      as: 'post'
   }, options));
}

/**
 * @function list the comments of the given id
 */
exports.comments = function(options){
   return require('couchapps/comments/index').listComments('post', options);
};

/**
 * @function update the post document
 */
exports.update = function(options){
   return proxiedTo('/', $.extend({
      data: function(req, res, f){
         var doc = {
            _id: req.body._id,
            _rev: req.body._rev,
            type: 'post',
            title: req.body.title,
            content: req.body.content,
            tags: (req.body.tags || []).split(',').map(function(str){
               return str.trim();
            }).filter(function(str){
               return str !== '';
            })
         };
         if( doc._id == undefined ){
            couchapp.uuid(function(err, id){
               doc._id = couchapp.id(id, 'post');
               f(err, doc);
            });
         }else{
            f(err, doc);
         }
      },
      as: 'post'
   }, options));
};

/**
 * @function bind post variable with the request context.
 *
 * @param {String} as binding name, default is 'post'
 * @param {Object} defaults default values for post object.
 */
exports.bind = function(as, defaults){
   if( typeof(as) == 'object '){
      defaults = as;
      as = 'post';
   }
   if( as == undefined ){
      as = 'post';
   };
   return function(req, res, next){
      if(res.bindings[as] == undefined ){
         res.bindings[as] = $.extend({
            title: "",
            content: ""
         }, defaults);
      }
      next();
   };
}