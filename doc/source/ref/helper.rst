View Helpers
================================================================================

This section lists view helpers (including dynamicHelpers) defined in sunrise. You can use helper functions without any settings.

querystring
--------------------------------------------------------------------------------

a wrapper for 'querystring' module

qs
--------------------------------------------------------------------------------

an alias for ``querystring``

php
--------------------------------------------------------------------------------

Enables php functions developed at `phpjs.org <http://phpjs.org/>`_.

.. code-block:: html

   <p><%= php.trim('   trimed   ') %></p> 

outputs:

.. code-block:: html

   <p>trimed</p>

.. warning:: phpjs is not optimized for Node. In other words, there are several overheads for using phpjs. This module is provided for **ease-of-use**. You may have better to optimize your PHP functions.

sanitizer
--------------------------------------------------------------------------------

a wrapper for `Caja's JsHtmlSanitizer <http://code.google.com/p/google-caja/wiki/JsHtmlSanitizer>`_, which is modified for sunrise (2 options, ``elements``, ``sanitizeAttribs``, are added).

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
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

same as opt_uriPolicy in `Caja <http://code.google.com/p/google-caja/wiki/JsHtmlSanitizer>`_.

nmTokenPolicy
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

same as opt_nmTokenPolicy in `Caja <http://code.google.com/p/google-caja/wiki/JsHtmlSanitizer>`_.

Modify Default Optoins
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

You can modify default value of above options as follows:
       
::

   ddoc.init = function(site){
     var sanitizer = site.viewHelpers.sanitizer;
     // elements option
     sanitizer.html4.ELEMENTS['object'] = 0;
     // attribs option
     sanitizer.html4.ATTRIBS['p::style'] = 0;
   }

markdown
--------------------------------------------------------------------------------

Convert a markdown string to an html string.

.. code-block:: html

   <%- markdown(
   'This is an H1\n' +
   '=============') %>

outputs:

.. code-block:: html

   <h1>This is an H1</h1>

