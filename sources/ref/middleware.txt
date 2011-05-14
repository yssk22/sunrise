.. highlight:: javascript

Middleware
================================================================================

sunrise.middleware.utils
--------------------------------------------------------------------------------

Utility middleware.

::

  var util = require('sunrise').middleware.util;


.. function:: utils.debug(msg)

   Dumps a log message between middleware filters.

   ::

      app.get('/', function(req, res, next){
              },
              utils.debug('foo'),
              function(req, res, next){
                 res.end('');
              });

.. function:: utils.dumpBindings()

   Dumps a res._locals as JSON to the response stream.  

   ::

      app.get('/', 
              utils.dumpBindings());


.. function:: utils.redirect()

   Wraps response.redirect()

   ::

      app.get('/', 
              utils.redirect('/foobar'));

.. function:: utils.parallel(fun1[, fun2, ...], callback)

   Invokes asynchronous middleware given in the arguments, and it invokes the last middleware as callback.

   ::

      app.get('/',
              utils.parallel(
              m1, m2, m3, 
              function callback(req, res, next){
                  // callback
              }));


   In the above example, each of m1, m2, and m3 is executed asynchronously, and all of ``next`` in m1, m2, and m3 is called, then the function, ``callback``, is executed.

   .. note:: You should not output the response stream in asynchronous middleware, which causes some errors. Instread of this, You can render as string:

      ::

         function m1(req, res, next){
            res.render('/m1.ejs', fucntion(err, str){
               res.local('m1', str);
               next();
            });
         });

sunrise.middleware.db
--------------------------------------------------------------------------------

Middleware collection related with database access.

::

   ddoc.init = function(app){
      var db = app.middleware.db;
   };

.. function:: db.bind(method[, arg1, arg2, ...], options) 

   Wraps `cradle's database API <https://github.com/cloudhead/cradle>`_ and bind the API response to the ``res.locals``.

   ``method``
     cradle api method name
   ``arg1``, ``arg2``, ...
     cradle api arguments
   ``options``
     binding options.

     ``as``
        variable name bounded with. (default: ``'db$bind'``)
     ``success``
        middleware called after the response is succeeded, or the alternative template path for ``render`` option on success. (default: ``undefined``)
     ``failure``
        middleware called after the response fails, or the alternative template path for ``render`` option on fails. (default: ``undefined``)
     ``render``
        template path rendered after db request, whose result is bounded with ``toString()`` method of the ``res.locals('{as}')``. (default: ``undefined``)
     ``auth``
        override db config to access the database. 
        The acceptable value is  ``'currentUser'``, ``'admin'``, or ``{ user: "...", password: "..."}`` formatted object.
        Ses also :doc:`conf`. 

   Here is an example:

   ::

       app.get('/',
                  db.bind('get', 'foo', { as: 'result' }),
                  function(req, res, next){
                    res.local('result') 
                  }
                 );

   If ``foo`` document exists on the application's database, the ``res.local('result')`` is:

   ::

       { 
         error : null, 
         data  : { _id: "foo", _rev: "2-123456789abcdefg", foo: "bar"}
       }

   Or it is not found, then:

   ::

       { 
         error : { error: "not_found", reason: "missing" }, 
         data  : null
       }

   Now, you can render as string with ``template`` option.

   ::

       app.get('/',
                  bind('get', 'foo', { as: 'result', render: 'sample.ejs' }),
                  function(req, res, next){
                    res.local('result') 
                  }
                 );

   assuming that ``sample.ejs``, which is localed on ``{app.dirs.templates}`` directory, is:

   ::

      <p><%= result.data.foo %></p>

   In above example, rendered string is not sent on the response stream immediately. Instead of sending, it is bounded with ``toString()`` method of ``result`` object. 

   ::

      res.local('result').data.foo
      // -> 'bar'

      res.local('result').toString()
      // -> '<p>bar</p>'
      
   This binding mechanism lets you choose the raw data or rendered string in your view. In your view file, 

   .. code-block:: html

      <div><%= result.data.foo %></div>

   outputs:

   .. code-block:: html
      
      <div>bar</div>
      
   And

   .. code-block:: html

      <%= result.data %>

   outputs:

   .. code-block:: html
      
      <p>bar</p>

   You can use ``success`` and ``failure`` to avoid branching in your views. Here is an template example:

   ::

      <% if( result.errror ){ %>
      <%= partial('failure.ejs') %>
      <% }else{ %>
      <%= partial('success.ejs') %>
      <% } %>

   This can be simplified by using those options.

   ::

      db.bind('get', 'foo', { 
               as: 'result', 
               'success': 'success.ejs',
               'failure': 'failure.ejs'
             });

   Moreover these options can receive the next middleware.

   ::

      db.bind('get', 'foo', { 
               as: 'result', 
               success: 'success.ejs',
               failure: function(req, res, next){
                  if( res.local('result').error.error == 'not_found' ){
                     res.redirect('/');
                  }
                  next();
               }
             });

   By default, database access is executed by ``req.currentUser`` privileges, which is automatically created on your CouchDB when the user logged in at first time. So that ``ddoc.validates_doc_update`` is executed on the each user privilege. If you need ``admin`` or other special user privileges, give the ``auth`` option.

   ::

      db.bind('save', 'foo', {foo: 'bar'}, { 
                as: 'result'
             });
      // save the doc 'foo' as current user.

      db.bind('save', 'foo', {foo: 'bar'}, { 
                as: 'result', auth: 'admin' 
             });
      // save the doc 'foo' as admin.

      

