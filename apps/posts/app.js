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


ddoc.init = function(app){
  var parallel = require('sunrise').middleware.utils.parallel;
  var m = merge(app.middleware, require('./middleware'));
  // -- public --
  // pages
  app.get('/',
          parallel(
            m.byUpdatedAt(),
            m.feedOrHtml('index.ejs')));

  // apis
  app.get('/-/',
          m.byUpdatedAt());

  app.get('/-/count/tag',
          m.countByTag());

  app.get('/-/count/date',
          m.countByTag());
};

couhapp.loadAttachments(ddoc, path.join(__dirname, '_attachments'));
