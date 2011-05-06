View Helpers
================================================================================

This section lists view helpers (including dynamicHelpers) defined in sunrise. You can use helper functions without any settings.

.. attribute:: querystring

   Gets ``querystring`` module object

.. attribute:: qs

   An alias for ``querystring``

.. attribute:: php

   Gets the php object that enables php functions developed at `phpjs.org <http://phpjs.org/>`_.

   .. code-block:: html

      <p><%= php.trim('   trimed   ') %></p> 

   outputs:

   .. code-block:: html

      <p>trimed</p>

   .. warning:: phpjs is not optimized for Node. In other words, there are several overheads for using phpjs. This module is provided for **ease-of-use**. You may have better to optimize your PHP functions.

.. attribute:: sanitizer

   A wrapper for `Caja's JsHtmlSanitizer <http://code.google.com/p/google-caja/wiki/JsHtmlSanitizer>`_, which is modified for sunrise (2 options, ``elements``, ``sanitizeAttribs``, are added).

   .. code-block:: html

      <%- sanitizer.html_sanitize(
      '<h1>This is an H1</h1>\n' +
      '<script type="text/javascript">alert("hoge");</script>') %>

   outputs:

   .. code-block:: html
   
      <h1>This is an H1</h1>

   You can customize sanitized elements, url policy, token policy, and sanitize attributes funciton by using the second arguments as option.

   By default:

   .. code-block:: javascript

      {
         elements: {},
         attribts: {},
         urlPolicy: function(url) { if(/^https?:\/\//.test(url)) { return url }},
         nmTokenPolicy: function(id){ return id; },
      }

   elements option
      You can use ``elements`` options to define the level of tags. This option overrides ``html4.ELEMENTS`` definition in Caja.
      For example, you can allow ``object`` tag, which is defined as ``'UNSAFE (16)'`` and sanitized by default:

      .. code-block:: javascript

         <%- sanitize.htmlSanitize('<object></object>', 
             {
               elements: {
                 object: 0
               },
             }) %>

   attribs option
      You can use ``attribs`` options to define the level of tags. This option overrides ``html4.ATTRIBS`` definition in Caja.
      For example, you can allow ``style`` attribute only in ``p`` tag, which is defined as ``'STYLE (3)'`` and sanitized by default, 

      .. code-block:: javascript

         <%- sanitize.htmlSanitize('<p style="float:left;"></p>', 
             {
               attribs: {
                 "p::style": 0
               },
             }) %>

   uriPolicy option
      Same as opt_uriPolicy in `Caja <http://code.google.com/p/google-caja/wiki/JsHtmlSanitizer>`_.

   nmTokenPolicy
      Same as opt_nmTokenPolicy in `Caja <http://code.google.com/p/google-caja/wiki/JsHtmlSanitizer>`_.

   .. note:: Modify Default Optoins

      You can modify default value of above options as follows:
       
      .. code-block:: javascript

         ddoc.init = function(site){
           var sanitizer = site.viewHelpers.sanitizer;
           // elements option
           sanitizer.html4.ELEMENTS['object'] = 0;
           // attribs option
           sanitizer.html4.ATTRIBS['p::style'] = 0;
         }

.. function:: markdown(string)

   Convert a markdown string to an html string.

   .. code-block:: html

      <%- markdown(
      'This is an H1\n' +
      '=============') %>

   outputs:

   .. code-block:: html

      <h1>This is an H1</h1>

.. attribute:: session

   Gets session object.


.. attribute:: currentUser

   Gets the user object. 

   :currentUser.user_name: user name
   :currentUser.user_id: user identifier.

.. attribute:: isLogin

   Gets true if the current user is logged in, otherwise false.

.. function:: url(path, [options])

   Returns absolute url from the current application. If ``path`` is omitted

   ``options`` are:

   :``fromAppRoot``:
      if ``falase``, the absolute path is from ``/``, not app.set('home'). (default: ``true``)
   :``onlyPath``:
      if ``false``, full url starts with ``http(s)://`` will be returned.

   Here are examples, assuming that the host is ``example.com``, the application root is ``/app``, and the requested url is ``/app/test``:

   .. code-block:: javascript

      url('/foo') 
      // -> /app/foo
   
      url('/foo', {onlyPath: false}) 
      // -> http://example.com/app/foo
   
      url('/foo', {onlyPath: false, fromAppRoot: false}) 
      // -> http://example.com/foo
   
      url('bar') 
      // -> /app/test/bar
   
      url('bar', {onlyPath: false}) 
      // -> http://example.com/app/test/bar
   
      url('bar', {onlyPath: false, fromAppRoot: false}) 
      // -> http://example.com/app/test/bar
   
      url() 
      // -> /app/test

      url({onlyPath: false}) 
      // -> http://example.com/app/test

.. function:: _(msgId)

   Returns the translated text for ``msgId``. See also :doc:`i18n`

.. function:: title(msgId)

   Set the page title. ``_()`` is applied automatically.

.. function:: canonical(url)

   Set the canonical URL for the page

.. function:: feed(url)

   Set the discovery link URL for the feed.

.. function:: js(src1[, src2, ...])

   Set the javascript link. 
   The ``src`` should be the relative path from the application root, or the full url.

.. function:: css(src1[, src2, ...])

   Set the stylesheet link.
   The ``src`` should be the relative path from the application root, or the full url.


