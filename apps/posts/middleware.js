var merge = require('sunrise').utils.merge;

var allowed_names = [
  'startkey', 'startkey_docid', 'endkey', 'endkey_docid',
  'limit', 'descending', 'skip'
];


module.exports = {
  feedOrHtml: function(filename){
    return function(req, res, next){
      res.render(filename);
    };
  },

  byId: function(options){
    options = merge({
      paramName: 'id',
      bindAs: 'post'
    }, options);
    var db = this.db;
    return function(req, res, next){
      db.bind('get', req.params[options.paramName], {
        as: options.bindAs
      })(req, res, next);
    };
  },

  byUpdatedAt: function(options){
    options = merge({
      perPage: 10,
      bindAs: 'posts',
      includeDraft: false
    }, options);
    var db = this.db;
    var viewName = 'posts/' + (options.includeDraft === true ?
                               'all_by_updated_at' : 'by_updated_at');
    return function(req, res, next){
      var params = {
        limit:options.perPage,
        descending: true
      };
      if( options.perPage === 'unlimited' ){
        delete(params.limit);
      }

      allowed_names.forEach(function(name){
        if( req.query[name] !== undefined ){
          params[name] = req.query[name];
        }
      });
      (db.bind('view', viewName, params, {
        success: function(req, res, next){
          var rows = res.locals().posts.data;
          for(var i in rows){
            rows[i].value._key = rows[i].key;
          }
          next();
        },
        as: options.bindAs
      }))(req, res, next);
    };
  },

  countByTag: function(options){
    return function(req, res, next){
      next();
    };
  },

  countByDate: function(options){
    options = merge({
      group: 'month',
      bindAs: 'archives'
    }, options);
    var db = this.db;
    var GROUP_LEVEL = {
      year: 1, month: 2, day: 3
    };
    var params = {
      group: true,
      group_level: GROUP_LEVEL[options.group] || GROUP_LEVEL['month']
    };
    return db.bind('view', 'posts/count_by_date', params, {
      as: options.bindAs
    });
  }
};