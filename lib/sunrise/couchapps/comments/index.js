var db = require('config').couchdb;
var proxiedTo = require('middleware/couchdb').proxiedTo;
var couchapp = require('couchapp');
var $ = require('jquery');

exports.update = function(options){
   return proxiedTo('/', $.extend({
      data: function(req, res, f){
         if( req.body == undefined ){
            throw new Error('Request body required.');
         }
         var doc = {
            _id  : req.body._id,
            _rev : req.body._rev,
            type : 'comment',
            to   : req.body.to,
            name : req.body.name,
            body : req.body.body
         };
         if( doc._id == undefined ){
            couchapp.uuid(function(err, id){
               doc._id = couchapp.id(id, 'comment');
               f(err, doc);
            });
         }else{
            f(err, doc);
         }
      },
      as: 'comment'
   }, options));
};

exports.listComments = function(type, options){
   return proxiedTo("/_design/comments/_view/by_doc_id", $.extend({
      startkey: function(req, res, f){
         f(undefined, [couchapp.id(req.params.id, type), '\u9999']);
      },
      endkey: function(req, res, f){
         f(undefined, [couchapp.id(req.params.id, type)]);
      },
      descending: true,
      as: 'comments'
   }, options));
};
