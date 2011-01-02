function(newDoc, oldDoc, userCtx, secObj){
   var v = require('lib/validate').init(newDoc, oldDoc, userCtx, secObj);
   if( newDoc._deleted ){
      // on deleted
   }else{
      // on inserd or update
      v.required('type',
                 'created_at', 'updated_at',
                 'created_by', 'updated_by');
      v.unchanged('type',
                  'created_at',
                  'created_by');
      v.dateFormat('created_at', 'updated_at');
   }
}