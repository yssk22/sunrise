function(newDoc, oldDoc, userCtx, secObj){
   var v = require('lib/validate').init(newDoc, oldDoc, userCtx, secObj);
   if( newDoc.type == 'comment' ){
      v.required('to', 'name', 'body');
   }
}