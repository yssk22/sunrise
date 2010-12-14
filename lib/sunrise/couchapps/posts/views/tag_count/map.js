function(doc){
   if( doc.type == 'post' ){
      if( doc.tags && typeof(doc.tags) === 'object'){
         for(var i in doc.tags){
            emit([doc.tags[i]], 1);
         }
      }
   }
}
