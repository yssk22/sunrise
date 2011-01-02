#!/usr/bin/env node

var path = require('path');
var server = require('sunrise/server');
var config = require('sunrise/config');
var helper = require('sunrise/helper');

var base = helper.abspath(process.argv[2]);
var appPath = path.join(base, 'app');
var confDir = path.join(base, 'conf');

// load configuration
config.load(confDir);

var mod = require(appPath);
var s = server.createServer(base);
s.setup(mod, function(err){
   if( err ){
      throw err;
   }else{
      s.logger.info("server initialized from " + appPath);
      s.listen(config.web.port, function(err){
         if( err ){
            throw err;
         }
         s.logger.info("listening on " + config.web.port);
      });
   }
});
