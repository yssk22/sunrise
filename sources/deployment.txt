Deployment Tips
--------------------------------------------------------------------------------

Configuration File
================================================================================

Sunrise default configuration file is packaged on the `sunrise itself <https://github.com/yssk22/sunrise/tree/master/lib/sunrise/default/conf>`_ .

This file is overwritten by -c option on booting.

For example:

::

   $ ls ../conf
   web.json

   $ cat ../conf/web.json
   {
       "port": 8080
   }

   $ node boot.js -c ../conf

In this boot operation, the sunrise server uses 8080 port instead of 8888. Other configuration options such as listen IP address are still by default.

Use forever
================================================================================

You can boot sunrise server with ``forever``, which avoids unexpected server crashes.

::

   $ npm install forever
   $ forever start boot.js -c ../conf

Application Logging
================================================================================

TBD

