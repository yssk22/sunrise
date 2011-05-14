module.exports = function(newDoc, oldDoc, userCtx, secObj){
  var v = (eval(this.lib.validator))(newDoc, oldDoc, userCtx, secObj);

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
   if( newDoc.type == 'post' ){
     v.required('title', 'content');
     v.unchanged('created_by');
   }
};