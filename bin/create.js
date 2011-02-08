#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var helper = require('sunrise/helper');
var exec = require('child_process').exec;


var base = helper.abspath(process.argv[2]);
var template = helper.abspath(__dirname + "/../template");

path.exists(base, function(exists){
   if( exists ){
     console.error(base + ' already exists');
     process.exit(1);
   }else{
     console.log('Creating a sunrise site directory');
     var command = 'cp -r ' + template + ' ' + base;
     exec(command, function(err, stdout, stderr){
       if( err ){
         console.error('Failed to create a sunrise site directory');
         console.error(stderr);
         process.exit(err.code);
       }else{
         console.log("Your site has been successfully created.");
         console.log("To start up your site: ");
         console.log("");
         console.log("   $ node " + path.join(base, 'boot.js'));
         console.log("");
       }
     });
   }
});
