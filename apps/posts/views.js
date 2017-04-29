module.exports = {
  all_by_updated_at : {
    map(doc) {
      if( doc.type == 'post' ){
        emit(doc.updated_at, doc);
      }
    }
  },

  all_by_tag : {
    map(doc) {
      if( doc.type == 'post' ){
        if( doc.tags && typeof(doc.tags) === 'object'){
          for(var i in doc.tags){
            emit([doc.tags[i], doc.updated_at], doc);
          }
        }
      }
    }
  },

  by_updated_at : {
    map(doc) {
      if( doc.type == 'post' && doc.is_draft != true ){
        emit(doc.updated_at, doc);
      }
    }
  },

  by_tag : {
    map(doc) {
      if( doc.type == 'post' && doc.is_draft != true ){
        var tags = doc.tags || [];
        tags.filter(t => t && t != '').forEach(t => {
          emit([t, doc.updated_at], doc);
        });
      }
    }
  },

  count_by_tag: {
    map(doc) {
      if( doc.type == 'post' ){
        var tags = doc.tags || [];
        tags.filter(t => t && t != '').forEach(t => {
          emit(t, 1);
        });
      }
    },
    reduce(keys, values, rereduce) {
      return sum(values);
    }
  },

  count_by_date: {
    map(doc) {
      if( doc.type == 'post' ){
        var yyyymmdd = doc.created_at.split('T')[0].split('-').map(i => {
          if( i[0] == '0' ){ // avoid parseInt('0N') for failure.
            return parseInt(i[1]);
          }else{
            return parseInt(i);
          }
        });
        emit(yyyymmdd, 1);
      }
    },
    reduce(keys, values, rereduce) {
      return sum(values);
    }
  },


};