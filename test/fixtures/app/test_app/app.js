var couchapp = require('couchapp');
var ddoc = {
  _id: "_desing/test_app" ,
  views: {},
  shows: {},
  lists: {}
};

module.exports = ddoc;


ddoc.routes = function(app){
  app.get('/', function(req, res, next){
    res.send('Hello World');
  });

  app.get('/test', function(req, res, next){
    res.render('test.ejs', {layout: false});
  });

  app.get('/redirect_home', function(req, res, next){
    res.redirect();
  });
};
