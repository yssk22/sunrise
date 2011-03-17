#!/usr/bin/env node

var docs = [];
for(var i=0; i<60; i++){
  var t = new Date(2010, 1, i);
  var doc = {
    "type": "post",
    "title": "Test " + i ,
    "content": "Test " + i + ' content.',
    "tags": [],
    "created_at": t,
    "updated_at": t
  };
  docs.push(JSON.stringify('test_' + i) + ":" + JSON.stringify(doc));
}

console.log("{");
console.log(docs.join(",\n"));
console.log("}");
