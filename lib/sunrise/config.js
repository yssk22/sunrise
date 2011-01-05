var fs = require('fs'),
    path = require('path');
var $ = require('jquery');

function load(dir){
   function loadJson(filepath){
      try{
         var obj = JSON.parse(fs.readFileSync(filepath));
         return obj;
      }catch(e){
         if( e.errno == 2 ){
            // no such file or directory;
            return {};
         }else{
            throw new Error("failed to load " + filepath + ": " + e);
         }
      }
   }

   ['db', 'web', 'auth'].forEach(function(k){
      module.exports[k] = $.extend({}, module.exports[k],
                                   loadJson(path.join(dir, k + '.json')));
   });
}

exports.load = load;
exports.load(__dirname + '/default/conf');