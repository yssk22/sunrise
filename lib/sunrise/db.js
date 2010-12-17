var fs = require('fs');
var cradle = require('cradle'),
    $ = require('jquery');
var logger = require('log4js')().getLogger('db');

exports.connect = function(options){
   if( options == undefined ){
      return exports.connect(require('./config').db);
   }
   var connection = new cradle.Connection({
      host: options.host,
      port: options.port,
      auth: {
         user: options.user,
         pass: options.password
      }
   });
   var db = connection.database(options.database);
   db.connection = connection;
   return $.extend(db, {
      deployApp : function(appdir, callback){
         var src = appdir;
         var dst = this.url;
         if( appdir == undefined ){
            appdir = __dirname + "/couchapps";
         }
         var push = "couchapp pushapps " + src + " " + dst;
         require('child_process').exec(push, function(err, stdout, stderr){
            if( err ){
               logger.debug('failed to deploy couchapps: '  + push);
               logger.error(err);
               logger.error(stderr);
            }
            callback(err);
         });
      },
      uuid : function(cacheSize, callback){
         var self = this;
         if( typeof(cache) == 'function' ){
            callback = cache;
            cacheSize = 10;
         }
         if( self._uuidCache == undefined ){
            self._uuidCache = [];
         }
         self.connection.uuids(cacheSize, function(err, uuids){
            var id;
            if( err == undefined ){
               self._uuidCache.push.apply(self._uuidCache, uuids);
               id = self._uuidCache.pop();
            }
            callback(err, id);
         });
      },
      docId: function(id, type){
         id = id || '';
         if( id.substr(0, type.length+1) != type + ':' ){
            id = type + ":" + id;
         }
         return id;
      }
   });
};
