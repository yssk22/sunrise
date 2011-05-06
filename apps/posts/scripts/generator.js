#!/usr/bin/env node
/*!
 * Document generator for testing.
 */


var cradle = require('cradle');
var db = new (cradle.Connection)().database('posts');
var NUM = 30;
var USER = {
  user_id: 'guest', user_name: 'Generator'
};

function genString(str, n){
  var arr = [];
  for(var i=0; i<n; i++){
    if( i % 10 == 0 ){
      arr.push("\n");
    }
    arr.push(str);
  }
  return arr.join(' ');
}

function run(){
  var now = new Date();
  for(var i=0; i<NUM; i++){
    var ts = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i)
    var doc = {
      title: i + ": Dummy Title (" + ts + ")",
      content: genString("dummy", 30) + "\n" + ts,
      type: 'post',
      tags: ["dummy"],
      created_by: USER,
      updated_by: USER,
      created_at: ts,
      updated_at: ts
    };
    db.save(doc, function(err, doc){
      if( err ){
        console.error("Error: " + err.error);
      }else{
        console.log("Saved: " + doc.id);
       }
    });
  }
}

if( !module.parent ){
  run();
}
