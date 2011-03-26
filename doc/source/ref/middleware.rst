.. highlight:: javascript

Middleware
================================================================================

sunrise.middleware.utils
--------------------------------------------------------------------------------

utils.debug(msg)
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

A middleware that dumps a log message between middleware filters.

::

   app.get('/', function(req, res, next){
           },
           utils.debug('foo'),
           function(req, res, next){
              res.end('');
           });

utils.dumpBindings
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

A middleware that dumps a res._locals as JSON to the response stream.  

::

   app.get('/', 
           utils.dumpBindings());

utils.redirect()
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

A middleware that wraps response.redirect()

::

   app.get('/', 
           utils.redirect('/foobar'));

utils.parallel()
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

A middleware that invokes asynchronous middleware given in the arguments, and it invokes the last middleware as callback.

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
