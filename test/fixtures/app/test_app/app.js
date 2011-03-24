var couchapp = require('couchapp');
var ddoc = {
  _id: "_desing/test_app" ,
  views: {},
  shows: {},
  lists: {}
};

module.exports = ddoc;


ddoc.init = function(app, options){
  app.get('/', function(req, res, next){
    res.send('Hello World');
  });
  // all reoutes except above are defined in test script.
};
