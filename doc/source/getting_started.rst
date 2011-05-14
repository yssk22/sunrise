Getting Started
--------------------------------------------------------------------------------

Requirements
================================================================================

- node.js v0.4.X or later
- npm 1.0.X or later
- Apache CouchDB 1.0.2 or later


Install
================================================================================

Just install by npm.

::

   $ npm install -g sunrise


Testing a template site
================================================================================

Configure your CouchDB administrator
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

You must configure the administrator account on your CouchDB located on http://localhost:5984/ before checking the template. 

:name: admin
:password: password

To start up the template site, launch the boot command:

::

   $ sunrise:template
   ...
   [2011-05-14 22:09:54.915] [INFO] sunrise - Listening on 8888 

And you can visit http://localhost:8888/ to check sunrise is working.

.. note:: ``login`` function does not work correctly because you have not configure oauth settings.

Craete a new site
================================================================================

Copy a new site from template
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

The template site cannot be modified. You can copy the template site in your directory to start to build your site.

::

   $ sunrise\:create -s sunrise-site
   [2011-05-14 22:54:49.445] [INFO] console - /Users/yssk22/tmp/sunrise-site has been created successfully
   [2011-05-14 22:54:49.630] [INFO] console - Your site has been successfully created.
   [2011-05-14 22:54:49.631] [INFO] console - To start up your site: 
   [2011-05-14 22:54:49.631] [INFO] console - 
   [2011-05-14 22:54:49.631] [INFO] console -    $ node /Users/yssk22/tmp/sunrise-site/app.js
   [2011-05-14 22:54:49.631] [INFO] console - 

After ``sunrise:create`` command is executed, you can modify your site in the newly craeted directory.

Configure settings
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

``${YOUR_SITE_DIR}/conf`` contains default configurations. You can configure settings such as OAuth provides, CouchDB admin account, Cookie settings, ... and so on.

Configuration details are described at :doc:`ref/conf`_


Configure bootstrap
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

``${YOUR_SITE_DIR}/app.js`` is a bootstrap script for your site. You can modify applications, URLs, ... on this script.

Boot your site
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

just kick ``app.js`` with ``-c conf`` option to apply your configurations.

::

    $ cd ${YOUR_SITE_DIR}
    $ node app.js -c conf/


