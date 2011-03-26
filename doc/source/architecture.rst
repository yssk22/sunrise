Architecture
--------------------------------------------------------------------------------

Goal for Sunrise
================================================================================

- web application stack replacing LAMP
- easy to add/remove site features (like a CMS)
- easy to replicate web applications

Software Stack
================================================================================

:ref:`figure1` shows software stack of a sunrise site.

.. _figure1:

.. figure:: https://cacoo.com/diagrams/7WWVyd3qvxpS53e7-1A2DC.png
   :alt: Sunrise Architecture

   Figure 1. Sunrise software stack

A site powered by sunrise is hosted on a CouchDB instances with multiple databases per a application.
 
Sunrise App
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

**Sunrise App** is an CouchApp application which can be extended by the power of node.js. It provides basic functions such as views, lists, shows, and attachments hosted on CouchDB. And it also provides more enhanced server side application features hosted on Connect/Express middleware infrastructure by node.js such as view aggregations, third-party authenticated(oauth) identity models, scheduled jobs, WebSocket proxy for CouchDb's _changes feeds, and so on. 

Whole of application source code is stored on a dedicated database on a shared CouchDB server instance. A url path is assigned to an application (as a namespace), 

An application example is on `github <http://github.com/yssk22/sunrise/tree/master/lib/sunrise/apps/posts>`_ , which adds a 'posts' function on a sunrise site.

When a application is **installed** on a sunrise site, a namespace is assigned to it, and URLs udner

See :doc:`app` for more details about how to implement Sunrise App.

Sunrise Site
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

**Sunrise Site** is an special sunrise application which manages sunrise applications hosted on it's site. In addition to normal sunrise application features and also provides container features such as:

- Sunrise App installation.
- Authentication/Authorization functions.
- Site-level error handling.
- ...

See :doc:`site` for more details about how to customise your sunrise site.

