function(doc){
  if( doc.type == 'post' ){
    emit(doc.updated_at, doc);
  }
}
