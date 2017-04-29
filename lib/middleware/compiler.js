/**
 * Extends connect compiler middleware that supports CSS framework
 */
var fs = require('fs');

var macros = [];

module.exports = require('express').compiler;
module.exports.include = function(...args) {
  for(var i in args){
    var filepath = args[i];
    macros.push(fs.readFileSync(filepath) + "\n");
  }
}


// extend connect compiler
var compilers = require('express').compiler.compilers;
['sass', 'less'].forEach(key => {
  var compiler = compilers[key];
  var org = compiler.compile;
  compiler.compile = (str, fn) => {
    // add the macro
    var macro = macros.join('');
    org(macro, (err, mcompiled) => {
      if(err){
        fn(err);
      }else{
        org(macro + str, (err, compiled) => {
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