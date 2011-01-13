#!/usr/bin/env node

var path = require('path');
var site = require('sunrise/site');
var config = require('sunrise/config');
var helper = require('sunrise/helper');
var error = require('sunrise/error');

var base = helper.abspath(process.argv[2]);
var appPath = path.join(base, 'app');
var confDir = path.join(base, 'conf');

// load configuration
config.load(confDir);
var s = site.createSite();

s.logger.debug('Constructing sunrise site ...');

s.install(base,
          { namespace: '/' },
          function(err, app){
            if( err ){
              throw err;
            }else{
              // TODO: not found handler
              // s.all('*', function(req, res, next){
              //   console.log('fooo');
              //   error.raise(404);
              // });

              // finally added error document on 'production' environment.
              var errordoc = path.join(app.set('views'), 'errors');
              s.error(error.render(errordoc));
              s.logger.info("site initialized from " + base);
              s.listen(config.web.port, function(err){
                if( err ){
                  throw err;
                }
                s.logger.info("listening on " + config.web.port);
              });
            }
          });