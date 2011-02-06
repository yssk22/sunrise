var fs = require('fs'),
    path = require('path'),
    url = require('url');
var cradle = require('cradle'),
    $ = require('jquery');
var helper = require('sunrise/helper');
var logger = require('log4js')().getLogger('db');

exports.connect = function(name, options){
  if( options == undefined ){
    options = {};
  }
  options = $.extend({}, require('./config').db, options);
  var connection = new cradle.Connection({
    host: options.host,
    port: options.port,
    auth: {
      username: options.user,
      password: options.password
    },
    cache: false // cradle has some cache bugs ...
  });
  var urlstr = "http://" + options.user + ":" + options.password + "@" +
    options.host + ":" + options.port + "/" + name;
  var db = connection.database(name);
  db.connection = connection;
  return $.extend(db, {
    deployApp : function(appdir, callback){
      var deploy = function(subcommand, src){
        var push = ["couchapp", subcommand, src, urlstr].join(' ');
        logger.debug(push);
        require('child_process').exec(push, function(err, stdout, stderr){
          if( err ){
            logger.debug('failed to deploy couchapps: '  + push);
            logger.error(err);
            logger.error(stderr);
          }else{
            logger.debug(stderr);
          }
          if( subcommand == 'pushapps' ){
            fs.readdir(src, function(err, files){
              callback && callback(err, files.map(function(f){
                return path.join(src, f);
              }));
            });
          }else{
            callback && callback(err, [src]);
          }
        });
      };
      if( typeof(appdir) == 'function' ){
        callback = appdir;
        appdir = undefined;
      }

      if( appdir == undefined ){
        deploy('pushapps', __dirname + "/couchapps");
      }else{
        path.exists(path.join(__dirname, 'couchapps', appdir), function(exists){
          if(exists){
            deploy('push', path.join(__dirname, 'couchapps', appdir));
          }else{
            path.exists(appdir, function(exists){
              if( exists ){
                deploy('push', appdir);
              }else{
                callback(new Error(appdir + ' does not exists'));
              }
            });
          }
        });
      }
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
      if( typeof(options) == 'function'){
        callback = options;
        options = {};
      }
      var db = this;
      fs.readFile(filename, function(err, data){
        if( err ){
          callback && callback(err, undefined);
        }else{
          try{
            var list = JSON.parse(data);
            logger.debug("Keys : " + Object.keys(list).length);
            importList(db, list, options, callback);
          }catch(e){
            callback && callback(e, undefined);
          }
        }
      });
    },
    uuid : function(cacheSize, callback){
      var self = this;
      if( typeof(cacheSize) == 'function' ){
        callback = cacheSize;
        cacheSize = 10;
      }
      if( self._uuidCache == undefined ){
        self._uuidCache = [];
      }
      if( self._uuidCache.length > 0 ){
        callback(null, self._uuidCache.pop());
      }else{
        logger.debug('uuid cache update: cacheSize = ' + cacheSize);
        self.connection.uuids(cacheSize, function(err, uuids){
          var id;
          if( err == undefined ){
            self._uuidCache.push.apply(self._uuidCache, uuids);
            id = self._uuidCache.pop();
          }
          callback(err, id);
        });
      }
    }
  });
};

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
        doc[field] = {
          userid: 'example.com:yssk22',
          userName: 'yssk22'
        };
      }
    }
  }
  normTime('created_at', 'updated_at');
  normUser('created_by', 'updated_by');
  doc._id = encodeURIComponent(doc._id);
  return doc;
}

var macro = {
  loadFile: function(filename){
    return fs.readFileSync(helper.abspath(filename)).toString();
  }
}

function applyMacro(obj){
  for(var i in obj){
    var val = obj[i];
        if(val){
          if( typeof(val) == "string" ){
            if( val.substr(0, 6) == "macro." ){
              var script = val;
              try{
                obj[i] = eval(script);
              }catch(err){
                logger.error(err);
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
        obj._id = k;
      }
      obj = applyMacro(normalizeFixture(obj));
      db.get(obj._id, function(err, doc){
        function _save(){
          db.save(obj._id, obj, function(err, doc){
            if(err){
              logger.error("import failed: " + obj._id + " - " + err.reason);
            }else{
              logger.info("imported: " + obj._id + " - " + doc.rev);
            }
            len -= 1;
            if( len == 0 ){
              callback && callback(err, list);
            }
          });
        }
        if( doc != null ){
          db.remove(doc._id, doc._rev, function(err, _){
            _save();
          });
        }else{
          _save();
        }
      });
    })(i);
  }
}