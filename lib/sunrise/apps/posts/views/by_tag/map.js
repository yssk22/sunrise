function(doc){
   if( doc.type == 'post' ){
      if( doc.tags && typeof(doc.tags) === 'object'){
         // formatting document
         if(doc.scope == "private" || doc.is_draft == true){
            // nothing
         }else{
            for(var i in doc.tags){
               emit([doc.tags[i], doc.updated_at], doc);
            }
         }
      }
   }
}
