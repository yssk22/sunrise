var $ = require('jquery');
var util = require('sunrise').util;
var php = require('../../../vendor/php');
// used for default id
var DOCTYPE = 'post';
var dummyId = "________dummy";
var TEMPLATE_DIR = __dirname + '/../_attachments/templates';

function pagenationSupport(params){
  function _docid(id){
    return id ?  id : undefined;
  }
  function _key(key){
    try{
      return key ? JSON.parse(key) : undefined;
    }catch(e){
      return undefined;
    }
  }

  return $.extend({}, params, {
    startkey: function(f){
      f(undefined, _key(this.request.query.startkey));
    },
    startkey_docid: function(f){
      f(undefined, _docid.apply(this, [this.request.query.startkey_docid]));
    },
    descending: function(f){
      // descending
      if( this.request.query.reverse == "true" ){
        f(undefined, params.descending != true);
      }else{
        f(undefined, params.descending == true);
      }
    },
    skip: function(f){
      var i = parseInt(this.request.query.skip);
      if( isNaN(i) ){
        f(undefined, undefined);
      }else{
        f(undefined, i);
      }
    }
  });
}
module.exports = {
  template_dir: TEMPLATE_DIR,
  docTemplate: {
    type: DOCTYPE,
    title: "*Untitled*",
    content: "",
    tags: [],
    is_draft: false,
    format: "HTML"
  },
  config: {
    PERMALINK_TEMPLATE: TEMPLATE_DIR + '/partials/permalink.ejs',
    ADMIN_LIST_TEMPLATE: TEMPLATE_DIR + '/partials/admin_list.ejs',
    LIST_TEMPLATE: 'partials/post_list.ejs',
    ARCHIVE_LINK_TEMPLATE: TEMPLATE_DIR + '/partials/archive_list.ejs',
    EDITOR_TEMPLATE: TEMPLATE_DIR + '/partials/editor.ejs',
    LIST_PER_PAGE: 15,
    CONTENT_FORMAT: "HTML",
    CONTENT_FORMATTER: function(c){

    }
  },

  byId : function(options){
    options = $.extend({
      as: 'post',
      template: this.config.PERMALINK_TEMPLATE
    }, options);
    return this.bind('get', function(f){
      f(undefined, encodeURIComponent(this.request.params.id));
    }, options);
  },

  byTag : function(params, options){
    if( typeof(params) == 'string' ){
      params = {
        tag: params
      };
    }
    params = $.extend({
      descending: true,
      limit: this.config.LIST_PER_PAGE
    }, params);
    options = $.extend({
      as: 'posts',
      template: this.config.LIST_TEMPLATE
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
    params = pagenationSupport($.extend({}, {
      descending: true,
      limit: this.config.LIST_PER_PAGE
    }, params));
    options = $.extend({
      as: 'posts',
      includeDraft: false,
      template: this.config.LIST_TEMPLATE,
      onResponse: function(err, data, args, cb){
        if( data && data.rows && this.request.query.reverse == "true" ){
          console.log('reversing');
          data.rows.reverse();
          data.offset = data.total_rows - (data.offset + data.rows.length);
        }
        cb(err, data);
      }
    }, options);

    var view = options.includeDraft ? 'posts/all' : 'posts/recent';

    return this.bind('view', view, params, options);
  },

  /**
   * Short cut for byUpdatedAt with filtering by month using request parameter
   */
  byMonth : function(options){
    options = $.extend({
      yearParam: "year",
      monthParam: "month",
      template: this.config.LIST_TEMPLATE,
      as: 'posts'
    }, options);

    var yearParam  = options.yearParam;
    var monthParam = options.monthParam;


    var params = {
      startkey: function(f){
        f(undefined, this.request.params[yearParam] + "-" + this.request.params[monthParam]);
      },
      endkey: function(f){
        f(undefined, this.request.params[yearParam] + "-" + this.request.params[monthParam] + "-99");
      },
      descending: function(f){
        f(undefined, this.request.query.desc == "true" || false);
      },
      limit: undefined
    };

    options.onRequest = function(funName, args, f){
      if( args[1].descending ){
        var tmp = args[1].startkey;
        args[1].startkey = args[1].endkey;
        args[1].endkey = tmp;
      }
      f(funName, args);
    };
    return this.bind('view', 'posts/recent', params, options);
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
      template: this.config.ARCHIVE_LINK_TEMPLATE
    }, options);
    var fun = this.bind('view', 'posts/date_count', params, options);
    return fun;
  },

  countTags: function(options){
    options = $.extend({
      as: 'tags',
      template: false
    }, options);
    return this.bind('view', 'posts/tag_count', {
      group: true,
      group_level: 1
    }, options);
  },

  editor: function(options){
    var self = this;
    options = $.extend({
      template: this.config.EDITOR_TEMPLATE,
      as: 'post'
    }, options);
    if( options.newDoc ){
      return function(req, res, next){
        res.render(options.template, {
          layout: false,
          locals: {
            error: null,
            data: $.extend({}, self.docTemplate)
          }
        }, function(err, str){
          res.bindings[options.as] = err || str;
          next();
        });
      };
    }else{
      return this.bind('get', function(f){
        f(undefined, encodeURIComponent(this.request.params.id));
      }, options);
    }
  },

  delete: function(options){
    options = $.extend({
      as: 'post'
    }, options);
    return this.bind('remove', function(f){ // id
      f(undefined, encodeURIComponent(this.request.params.id));
    }, function(f){ // rev
      f(undefined, this.request.body._rev);
    }, options);
  },

  save: function(options){
    var self = this;
    options = $.extend({
      failure: this.config.EDITOR_TEMPLATE,
      as: 'post',
      onResponse: function(err, data, args, cb){
        if( err ){
          data = args[1];
        }
        cb(err, data);
      }
    }, options);
    return this.bind(options.merge ? 'merge' : 'save',
                     function(f){ // id
                       if( options.merge) {
                         f(undefined, encodeURIComponent(this.request.params.id));
                       }else{
                         this.db.uuid(function(err, id){
                           f(undefined, encodeURIComponent(id));
                         });
                       }
                     },
                     function(f){
                       var ts = new Date();
                       var doc = $.extend({},
                                          self.docTemplate, this.request.body,
                                          {
                                            updated_at: ts,
                                            updated_by: this.request.currentUser()
                                          });
                       if( doc.tags ){
                         if( !Array.isArray(doc.tags) ){
                           doc.tags = doc.tags.toString().split(',').map(function(t){
                             return php.trim(t);
                           });
                         }
                       }else{
                         doc.tags = [];
                       }
                       if( !options.merge ){
                         doc.created_at = ts;
                         doc.created_by = this.request.currentUser();
                       }
                       f(undefined, doc);
                     }, options);
  }
};