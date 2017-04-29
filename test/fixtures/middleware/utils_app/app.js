var couchapp = require('couchapp');
var ddoc = {
  _id: "_design/utils_app" ,
  views: {},
  shows: {},
  lists: {}
};

module.exports = ddoc;

ddoc.init = app => {
  var utils = require('middleware/utils');
  app.get('/', (req, res, next) => {
    res.send('Hello World');
  });
};
