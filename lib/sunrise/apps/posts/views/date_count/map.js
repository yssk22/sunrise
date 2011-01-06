function(doc){
   if( doc.type == 'post' ){
      var yyyymmdd = doc.created_at.split('T')[0].split('-').map(function(i){
         return parseInt(i);
      });
      emit(yyyymmdd, 1);
   }
}
