var couchapp = require('couchapp');
var ddoc = {
  _id: "_desing/posts" ,
  views: {},
  shows: {},
  lists: {},
  docTemplates: {
    posts: {
      type: 'post',
      title: '*Untitled*',
      content: '',
      tags: [],
      isDraft: false
    }
  }
};

module.exports = ddoc;

ddoc.views.all_by_updated_at = {
  map: function(doc){
    if( doc.type == 'post' ){
      emit(doc.updated_at, doc);
    }
  }
};

ddoc.views.by_updated_at = {
  map: function(doc){
    if( doc.type == 'post' && doc.is_draft != true ){
      emit(doc.updated_at, doc);
    }
  }
}

ddoc.views.all_by_tag = {
  map: function(doc){
    if( doc.type == 'post' ){
      if( doc.tags && typeof(doc.tags) === 'object'){
        for(var i in doc.tags){
          emit([doc.tags[i], doc.updated_at], doc);
        }
      }
    }
  }
}

ddoc.views.by_tag = {
  map: function(){
    if( doc.type == 'post' && doc.is_draft != true ){
      if( doc.tags && typeof(doc.tags) === 'object'){
        for(var i in doc.tags){
          emit([doc.tags[i], doc.updated_at], doc);
        }
      }
    }
  }
};

ddoc.middleware = {
  byUpdatedAt : function(opitons){
    return function(req, res, next){
      next();
    };
  },

  countByTag: function(options){
    return function(req, res, next){
      next();
    };
  },

  countByDate: function(options){
    return function(req, res, next){
      next();
    };
  }
};

ddoc.init = function(app){
  var parallel = require('sunrise').middleware.utils.parallel;
  var m = app.middleware;
  // -- public --
  // pages
  app.get('/',
          parallel(
            m.byUpdatedAt(),
            feedOrHtml('index.ejs')));

  // apis
  app.get('/-/',
          m.byUpdatedAt());

  app.get('/-/count/tag',
          m.countByTag());

  app.get('/-/count/date',
          m.countByTag());
};

couhapp.loadAttachments(ddoc, path.join(__dirname, '_attachments'));
