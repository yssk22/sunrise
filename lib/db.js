var fs = require('fs'),
    path = require('path'),
    url = require('url');
var cradle = require('cradle');
var merge = require('./utils').merge,
    config = require('./config').db;

var uuidCache = [];
var uuidCacheSize = config.uuidCacheSize;
if( typeof(uuidCacheSize) != 'number' || uuidCacheSize <= 0 ){
  uuidCacheSize = 20;
}

var server = new cradle.Connection({
  host: config.host,
  port: config.port,
  auth: {
    username: config.user,
    password: config.password
  },
  cache: true
});

exports.server = server;
exports.userDB = function(callback){
  server.config(function(err, r){
    callback && callback(exports.createConnection(r.json.couch_httpd_auth.authentication_db));
  });
};


exports.createConnection = function(name, options){
  if( options == undefined ){
    options = {};
  }
  options = merge({}, config, options);
  var connection = new cradle.Connection({
    host: options.host,
    port: options.port,
    auth: {
      username: options.user,
      password: options.password
    },
    cache: false
  });
  var db = connection.database(name);
  return merge(db, {
    /**
     * Connection object
     */
    connection: connection,
    /**
     * Database Url
     */
    url: "http://" + options.user + ":" + options.password + "@" +
      options.host + ":" + options.port + "/" + name,

    /**
     * Reset the database. This method delete the current database and recreate a new one.
     */
    reset: function(callback){
      var db = this;
      db.destroy(function(err, res){
        if( err ){
          callback && callback(err, res);
        }else{
          db.create(function(err, res){
            callback && callback(err, res);
          });
        }
      });
    },

    /**
     * Load the JSON file into the database.
     *
     * @param {String} filename path to the JSON file.
     * @param {Object} options
     * @param {Function} callback
     *
     * @api public
     */
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
            importList(db, list, options, callback);
          }catch(e){
            callback && callback(e, undefined);
          }
        }
      });
    },

    /**
     * Generate UUID.
     *
     * @param {Functino} callback
     */
    uuid : function(callback){
      var self = this;
      if( uuidCache.length > 0 ){
        callback(null, uuidCache.pop());
      }else{
        self.connection.uuids(uuidCacheSize, function(err, uuids){
          if( err ){
            callback(err, null);
          }else{
            Array.prototype.push.apply(uuidCache, uuids);
            callback(null, uuidCache.pop());
          }
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
          name: 'guest',
          display_name: 'Guest'
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
