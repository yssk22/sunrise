#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var utils = require('sunrise').utils;
var exec = require('child_process').exec;

var options = utils.merge({}, require('optimist').argv);
var skeletons = utils.abspath(__dirname + "/../skeletons");
var config = utils.abspath(__dirname + "/../conf");

var USAGE = ['',
             'Usage:',
             'sunrise:create [-s dir] [-a dir]',
             ''].join("\n");

function main(){
  if( options.s == null && options.a == null ){
    console.error('-s or -a option must be specified.');
    console.error(USAGE);
    process.exit(1);
  }else if( options.s != null && options.a != null) {
    console.error('-s or -a option cannot be specified at once.');
    console.error(USAGE);
    process.exit(1);
  }else{
    var src = options.s ? path.join(skeletons, 'site') : path.join(skeletons, 'app');
    var dst = utils.abspath(options.s || options.a);
    copyFromSkeleton(src, dst, err => {
      if( err ){
        console.error(err.toString());
        process.exit(1);
      }else{
        console.log(dst + ' has been created successfully');
        // site instllation
        if( options.s ){
          copyFromSkeleton(config, path.join(dst, 'conf'), err => {
            if( err ){
              console.err(stderr);
              process.exit(1);
            }
            process.chdir(dst);
            exec('npm link sunrise', (err, stdout, stderr) => {
              if( err ){
                console.err(stderr);
                process.exit(1);
              }else{
                console.log("Your site has been successfully created.");
                console.log("To start up your site: ");
                console.log("");
                console.log("   $ node " + path.join(dst, 'app.js'));
                console.log("");
              }
            });
          });
        }else{

        }
      }
    });
  }
}

function copyFromSkeleton(src, dst, callback){
  path.exists(dst, exists => {
    if( exists ){
      callback(new Error(dst + ' already exists!'));
    }else{
      var command = 'cp -r ' + src + ' ' + dst;
      exec(command, (err, stdout, stderr) => {
        if( err ){
          callback(err);
        }else{
          callback();
        }
      });

    }
  });
}

main();

// path.exists(base, function(exists){
//    if( exists ){
//      console.error(base + ' already exists');
//      process.exit(1);
//    }else{
//      console.log('Creating a sunrise site directory');
//      var command = 'cp -r ' + template + ' ' + base;
//      exec(command, function(err, stdout, stderr){
//        if( err ){
//          console.error('Failed to create a sunrise site directory');
//          console.error(stderr);
//          process.exit(err.code);
//        }else{
//          command = "cd '" + base + "' && npm link sunrise";
//          console.log(command)
//          exec(command, function(err, stdout, stderr){
//            if( err ){
//              console.error('Failed to link sunrise module in your site.');
//              console.error(stderr);
//              process.exit(err.code);
//            }else{
//              console.log("Your site has been successfully created.");
//              console.log("To start up your site: ");
//              console.log("");
//              console.log("   $ node " + path.join(base, 'app.js'));
//              console.log("");
//            }
//          });
//        }
//      });
//    }
// });
