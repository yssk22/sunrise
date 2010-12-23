var fs = require('fs');
var cradle = require('cradle'),
    $ = require('jquery');
var logger = require('log4js')().getLogger('db');

exports.connect = function(options){
   if( options == undefined ){
      options = {};
   }
   options = $.extend({}, require('./config').db, options);
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
      reset: function(callback){
         var db = this;
         db.destroy(function(err, res){
            db.create(function(err, res){
               callback && callback(err, res);
            });
         });
      },
      load: function(filename, options, callback){
         var db = this;
         fs.readFile(filename, function(err, data){
            if( err ){
               callback && callback(err, undefined);
            }else{
               try{
                  var list = JSON.parse(data);
                  importList(db, list, options, callback);
               }catch(e){
                  callback && callback(e, undefined);
               }
            }
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
      docId: docId
   });
};

function docId(id, type){
   id = id || '';
   if( id.substr(0, type.length+1) != type + ':' ){
      id = type + ":" + id;
   }
   return id;
}

function normalizeFixture(doc){
   function normTime(){
      for(var i in arguments){
         var field = arguments[i];
         if( doc[field] === undefined ){
            doc[field] = new Date();
         }
      }
   }
   function normUser(){
      for(var i in arguments){
         var field = arguments[i];
         if( doc[field] === undefined ){
            doc[field] = 'yssk22';
         }
      }
   }
   normTime('created_at', 'updated_at');
   normUser('created_by', 'updated_by');
   doc._id = encodeURIComponent(doc._id);
   return doc;
}

function applyMacro(obj){
   for(var i in obj){
      var val = obj[i];
      if(val){
         if( typeof(val) == "string" ){
            if( val.substr(0, 6) == "macro:" ){
               var script = val.split(":")[1];
               try{
                  obj[i] = eval(script);
               }catch(err){
                  obj[i] = err;
               }
            }
         }else if( typeof(val) == 'object' ){
            obj[i] = applyMacro(val);
         }
      }
   }
   return obj;
}

function importList(db, list, options, callback){
   var len = 0;
   if( typeof(options) == 'function' ){
      callback = options;
      options = {};
   }
   for(var i in list){
      (function(k){
         len += 1;
         var obj = $.extend(list[k], options);
         if( !obj._id ){
            obj._id = docId(k, obj.type);
         }
         obj = applyMacro(normalizeFixture(obj));
         db.get(obj._id, function(err, doc){
            if( doc != null ){
               obj._rev = doc._rev;
               // fields that must be forbidden to change.
               obj.created_at = doc.created_at;
               obj.created_by = doc.created_by;
               obj.type = doc.type;
            }
            db.save(obj._id, obj, function(err, doc){
               len -= 1;
               if( len == 0 ){
                  callback && callback(err, list);
               }
            });
         });
      })(i);
   }
}