function(doc){
   if( doc.type == 'post' ){
      if(doc.scope == "private" || doc.is_draft == true){
         // nothing
      }else{
         emit(doc.updated_at, doc);
      }
   }
}
