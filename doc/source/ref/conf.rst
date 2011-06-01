Configuration Files
===============================================================================

You can specify several configuration by configuration files in one directory, which can set by ``-c`` option on boot. Each file must be a json formatted file as described in this section.

db.json
-------------------------------------------------------------------------------

Configuration for your CouchDB instance.

The defaults are:

::

   {
       "host"     : "127.0.0.1",
       "port"     : "5984",    
       "database" : "sunrise",
       "user"     : "admin",
       "password" : "password"
   }

:host:
  CouchDB hostname
:port:
  CouchDB port number
:database:
  the default database name (if your application set the database name, this setting is ignored)
:user:
  the user name for admin party.
:password:
  the user password for admin party.

web.json
-------------------------------------------------------------------------------

Configuration for http server behaviors.

The defaults are:

::

   {
       "listen": "0.0.0.0",
       "port": 8888,
       "session": {
           "store": "memory",
           "options": {
               "reapInterval": 600000,
               "maxAge" : 7776000000,
               "cookie" : {
                   "path": "/",
                   "httpOnly": true
               }
           }
       }
   }

:listen:
   listen IP address.
:port:
   port number
:session.store:
   The name of session middleware. Currently the followings are supported.
   
   ===========  ==========================================================
   name         middleware
   -----------  ----------------------------------------------------------
   memory       connect.middleware.MemoryStore
   ===========  ==========================================================

:session.options:
   The option parameter passed to the sesion middleware. This parameter is defined by each middleware.

auth.json
-------------------------------------------------------------------------------

OAuth configuration specifies ``ConsumerKey`` and ``ConsumerSecret``.

The defaults are:

::

   {
       "oauthProviders": {
           "twitter" : {
               "consumerKey": "you need prepare consumerKey",
               "consumerSecret": "you need prepare consumerSecret"
           }
       }
   }


log4js.json
-------------------------------------------------------------------------------

`log4js <https://github.com/csausdev/log4js-node>`_ configuration file.

The defaults are:

::

   {
       "appenders": [
           {
               "type": "logLevelFilter",
               "level": "DEBUG",
               "appender": {
                   "type": "console"
               }
           }
       ]
   }
