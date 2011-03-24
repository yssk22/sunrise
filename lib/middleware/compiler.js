/**
 * Extends connect compiler middleware that supports CSS framework
 */
var fs = require('fs');

var macros = [];

module.exports = require('express').compiler;
module.exports.include = function(){
  for(var i in arguments){
    var filepath = arguments[i];
    macros.push(fs.readFileSync(filepath) + "\n");
  }
}


// extend connect compiler
var compilers = require('express').compiler.compilers;
['sass', 'less'].forEach(function(key){
  var compiler = compilers[key];
  var org = compiler.compile;
  compiler.compile = function(str, fn){
    // add the macro
    var macro = macros.join('');
    org(macro, function(err, mcompiled){
      if(err){
        fn(err);
      }else{
        org(macro + str, function(err, compiled){
          if( err ){
            fn(err);
          }else{
            fn(null, compiled.substr(mcompiled.length));
          }
        });
      }
    });
  };
});