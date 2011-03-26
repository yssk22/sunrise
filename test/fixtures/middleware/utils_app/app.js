var couchapp = require('couchapp');
var ddoc = {
  _id: "_design/utils_app" ,
  views: {},
  shows: {},
  lists: {}
};

module.exports = ddoc;

ddoc.init = function(app){
  var utils = require('middleware/utils');
  app.get('/', function(req, res, next){
    res.send('Hello World');
  });
};
