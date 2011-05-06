var couchapp = require('couchapp');
var ddoc = {
  _id: "_design/test_app" ,
  views: {},
  shows: {},
  lists: {}
};

module.exports = ddoc;

ddoc.init = function(app){
  app.get('/', function(req, res, next){
    res.send('Hello World');
  });

  app.get('/test_helpers/:name', function(req, res, next){
    res.render('test_helpers/' + req.param('name') + '.ejs',
               {layout: false});
  });

  app.get('/test_dynamicHelpers/:name', function(req, res, next){
    res.render('test_dynamicHelpers/' + req.param('name') + '.ejs',
               {layout: false});
  });

  // all reoutes except above are defined in test script.
};
