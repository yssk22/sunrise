module.exports = {
  feedOrHtml: function(filename){
    return function(req, res, next){
      res.render(filename);
    };
  },
  
  byUpdatedAt: function(options){
    return function(req, res, next){
      next();
    };
  },

  countByTag: function(options){
    return function(req, res, next){
      next();
    };
  }
};