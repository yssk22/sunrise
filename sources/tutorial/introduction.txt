Introduction
--------------------------------------------------------------------------------

What is an application?
================================================================================

An **application** in Sunrise is:

- A design document for CouchDB
  
  - a static file collection attached on the design document. 

- A middleware for Express/Connect

And an application is installed on a specified path in the site. It provides http based services and it can also provides helper functions for other applications.


Overview of application development
================================================================================

1. Create a template site (for application testing)
2. Create your application from the template
3. Modify scripts
4. Test with installing on the site.
5. Publish your application.

This chapter shows brief introduction for these steps.


Create a template site.
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

At first, you need to a container site for your application to be installed for testing. As described at :doc:`../getting_started`, use ``sunrise:create`` command.

::

   $ sunrise\:create -s sunrise-site
   $ cd sunrise-site

Then your site directory is as follows.

::

   .
   ├── _attachments
   ├── app.js
   ├── apps
   ├── conf
   └── node_modules

Now we call this root directory as ``SITE_ROOT``. ``{SITE_ROOT}/apps`` directory is the directory that contains your original applications.

Create a template application
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


To make a applicatin, use ``sunrise:create`` command with ``-a`` option, that generate a template application on the given path.

::

   $ sunrise\:create -a apps/myapp
   /Users/yssk22/tmp/sunrise-site/apps/myapp has been created successfully

Now we call ``myapp`` directory as ``APP_ROOT``.

Install the template application
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

And you need to install your ``myapp`` in your site. To do this, modify ``init`` function in ``{SITE_ROOT}/app.js`` (NOT ``{APP_ROOT}/app.js``), adding ``site.install('myapp', '/myapp/')``.

.. code-block:: javascript

   ddoc.init = function(site){
     // ...
     // install system application
     site.install('system', '/system/');

     // install my application from local apps directory
     site.install('myapp', '/myapp/');

   }

``site.install('app', '/approot/', options)`` is a function that install a sunrise application in to the site. On installing the application, ``init`` function in ``{APP_ROOT}/app.js`` is also invoked by sunrise.

In the default template, 

.. code-block:: javascript

   ddoc.init = function(app){
     app.get('/',
             function(req, res, next){
               res.render('index.ejs');
             });

     app.helpers(ddoc.helpers(app));
     app.dynamicHelpers(ddoc.dynamicHelpers(app));
   };


Launch the site to confirm the template application
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Then launch your site, visit go to http://localhost:8888/, you can see the link to myapp in the menu bar. And you can visit the application root URL, http://localhost:8888/myapp/.

``init`` function in your ``{APP_ROOT}/app.js`` is a entry point for your application. You can add some paths for your web services, booting scripts for setup your database, ... etc, acorrding to the manner of sunrise.

And ``app.js`` is a design document on CouchDB. You can define MapReduce views, list, show functions, and also add attachements for static file hosting.

.. warning:: The feature of static file hosting is provided by Node engine, not by CouchDB currently. So you can define attachments for future use.

Next step, we will describe the view feature of the sunrise.
