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

  app.get('/test_session', function(req, res, next){
    var sess = req.session;
    if( req.session.test_session === undefined ){
        sess.test_session = 0;
    }
    sess.test_session += 1;
    res.send('test_session = ' + sess.test_session);
  });
};
