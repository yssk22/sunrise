function(doc){
   if( doc.type == 'comment' ){
      emit([doc.to, doc.updated_at], doc);
   }
}