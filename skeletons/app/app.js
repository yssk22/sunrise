var path = require('path');
var couchapp = require('couchapp');
var ddoc = {
  _id: "_design/myapp" ,
  version: require('sunrise').version,
  name: 'MyApp',
  description: 'my application description',
  author: 'My Name',
  views: {},
  shows: {},
  lists: {}
};

module.exports = ddoc;

ddoc.helpers = require('./helpers');
ddoc.dynamicHelpers = require('./dynamicHelpers');
ddoc.init = function(app){
  app.get('/',
          function(req, res, next){
            res.render('index.ejs');
          });

  app.helpers(ddoc.helpers(app));
  app.dynamicHelpers(ddoc.dynamicHelpers(app));
};

couchapp.loadAttachments(ddoc, path.join(__dirname, '_attachments'));
