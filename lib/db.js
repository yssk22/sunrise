var fs = require('fs');
var path = require('path');
var url = require('url');
var cradle = require('cradle');
var merge = require('./utils').merge;
var config = require('./config').db;

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
exports.userDB = callback => {
  server.config((err, r) => {
    callback && callback(exports.createConnection(r.json.couch_httpd_auth.authentication_db));
  });
};


exports.createConnection = (name, options) => {
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
    connection,
    /**
     * Database Url
     */
    url: "http://" + options.user + ":" + options.password + "@" +
      options.host + ":" + options.port + "/" + name,

    /**
     * Reset the database. This method delete the current database and recreate a new one.
     */
    reset(callback) {
      var db = this;
      db.destroy((err, res) => {
        if( err ){
          callback && callback(err, res);
        }else{
          db.create((err, res) => {
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
    load(filename, options, callback) {
      if( typeof(options) == 'function'){
        callback = options;
        options = {};
      }
      var db = this;
      fs.readFile(filename, (err, data) => {
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
    uuid(callback) {
      var self = this;
      if( uuidCache.length > 0 ){
        callback(null, uuidCache.pop());
      }else{
        self.connection.uuids(uuidCacheSize, (err, uuids) => {
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
  function normTime(...args) {
    for(var i in args){
      var field = args[i];
      if( doc[field] === undefined ){
        doc[field] = new Date();
      }
    }
  }
  function normUser(...args) {
    for(var i in args){
      var field = args[i];
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
  loadFile(filename) {
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
    ((k => {
      len += 1;
      var obj = $.extend(list[k], options);
      if( !obj._id ){
        obj._id = k;
      }
      obj = applyMacro(normalizeFixture(obj));
      db.get(obj._id, (err, doc) => {
        function _save(){
          db.save(obj._id, obj, (err, doc) => {
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
          db.remove(doc._id, doc._rev, (err, _) => {
            _save();
          });
        }else{
          _save();
        }
      });
    }))(i);
  }
}
