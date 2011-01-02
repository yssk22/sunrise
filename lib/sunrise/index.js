/**
 * Framework Version
 */
module.exports = {
   version: '0.0.1',
   util: require('sunrise/middleware/util'),
   db:   require('sunrise/middleware/db')
}

var apps = ['posts'];
for(var i in apps){
   var name = apps[i];
   module.exports[name] = require('sunrise/couchapps/' + name);
}

