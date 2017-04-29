var couchapp = require('couchapp');
var ddoc = {
  _id: "_design/db_app" ,
  views: {},
  shows: {},
  lists: {}
};

module.exports = ddoc;

ddoc.init = app => {
  app.get('/', (req, res, next) => {
    res.send('Hello World');
  });
  // all reoutes except above are defined in test script.
};
