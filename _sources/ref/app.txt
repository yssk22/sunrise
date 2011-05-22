Application
================================================================================

app.js
--------------------------------------------------------------------------------

app.js is a design document pushed into CouchDB. There are properties reserverd by CouchDB, and several **special** properties defined by Sunrise.

Common app.js file is as follows:

::

   var couchapp = require('couchapp');
   var path = require('path');
   var ddoc = {
     _id: "_design/sunrise" ,
     // CouchApp funs
     views: {},
     shows: {},
     lists: {},
     // Sunrise Funs
     dirs: {}
   };

   module.exports = ddoc;
   ddoc.init = function(app, options){
     //
   }

   // ddoc.dirs.templates = '_attachments/templates';
   // ddoc.dirs.errors = '_attachments/errors';
   // ddoc.dirs.m10n = '_attachments/messages'
   // ddoc.dirs.static = '_attachments'

ddoc.init
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

This property is a function called on installed to the site. Generally your routing definitions are configured here. The first argument is applicatoin instance (HTTPServer instance defined by Sunrise, extended from Express HTTPServer), and the second argument is the option hash passed from ``site.install`` function.

ddoc.dirs
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Directory definition that contains resource files.

:ddoc.dirs.templates:
   The root of EJS template files
:ddoc.dirs.errors:
   The error document directory. The directory should have {HttpStatusCode}.ejs, such as 404.ejs, 500.ejs, ... etc.
:ddoc.dirs.m10n:
   The message files directory. see :doc:`i18n` section.
:ddoc.dirs.static:
   The root of static files, a.k.a attachments in CouchDB.
