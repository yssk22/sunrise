/**
 * Extends connect compiler middleware that supports CSS framework
 */
var fs = require('fs');

var macros = [];

module.exports = function(filePath){
  macros.push(fs.readFileSync(filePath) + "\n");
}

// extend connect compiler
var compilers = require('connect/middleware/compiler').compilers;
['sass', 'less'].forEach(function(key){
  var compiler = compilers[key];
  var org = compiler.compile;
  compiler.compile = function(str, fn){
    // add the macro
    var macro = macros.join('');
    org(macro, function(err, mcompiled){
      if(err){
        console.error("macro compile failed " + err);
        fn(err);
      }else{
        org(macro + str, function(err, compiled){
          if( err ){
            console.error("concated compile failed " + err);
            fn(err);
          }else{
            fn(null, compiled.substr(mcompiled.length));
          }
        });
      }
    });
  };
});