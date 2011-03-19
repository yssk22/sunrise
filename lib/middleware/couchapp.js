var $ = require('jquery');

var cache = {};


exports.attachmentProvider = function(options){
   options = $.extend({}, options);

   var prefix = options.prefix || "/";
   return function(req, res, next){
      var paths = req.url.substr(prefix.length).split('/');
      var appName = paths.shift();
      var filename = encodeURIComponent(paths.join('/').split('?')[0]);

      var db = req.app.db;
      var ev = db.getAttachment('_design/' + appName,
                                filename);

      ev.on('response', function(response){
         res.writeHead(response.statusCode, response.headers);
      });

      ev.on('data', function(chunk){
         res.write(chunk);
      });

      ev.on('end', function(){
         res.end();
         next();
      });
   };
}