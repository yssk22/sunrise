.. highlight:: javascript

Run in production environment
================================================================================

.. warning:: This section is underconstruction. 

Before running your site in the production environment, you should install ``forever`` package using npm.

::

    $ npm install -g forever

And then start ``app.js`` with ``forever`` command to enable auto-restart on failure.

::

    $ NODE_ENV=production forever ./app.js -c conf
