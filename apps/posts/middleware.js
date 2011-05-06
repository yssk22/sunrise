var allowed_names = [
  'startkey', 'startkey_docid', 'endkey', 'endkey_docid',
  'limit', 'decending', 'skip'
];
module.exports = {
  feedOrHtml: function(filename){
    return function(req, res, next){
      res.render(filename);
    };
  },

  byUpdatedAt: function(options){
    var db = this.db;
    return function(req, res, next){
      var params = {
        limit:options.postsPerPage,
        descending: true
      };
      allowed_names.forEach(function(name){
        if( req.query[name] !== undefined ){
          params[name] = req.query[name];
        }
      });
      (db.bind('view', 'posts/by_updated_at', params, {
        success: function(req, res, next){
          var rows = res.locals().posts.data;
          for(var i in rows){
            rows[i].value._key = rows[i].key;
          }
          next();
        },
        as: 'posts'
      }))(req, res, next);
    };
  },

  countByTag: function(options){
    return function(req, res, next){
      next();
    };
  }
};