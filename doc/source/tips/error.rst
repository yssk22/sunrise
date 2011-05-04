.. highlight:: javascript

Error Handling
================================================================================

Error Page
--------------------------------------------------------------------------------

Your site can set cutome error pages in the directory, ``YOUR_SITE_DIR/_attachments/errors``, where ``{status}.ejs`` file is used as a template. e.g. If your application fails in the 404 status, ``404.ejs`` is used.

If no error template file is found, then the default page defined by Express is used, and warnings are output in the log:

::

   [2011-05-05 01:35:01.560] [WARN] sunrise - Cannot response error pages - expected path: /Users/yssk22/sample_site/_attachmenets/errors/404.ejs

Raise an error in your application
--------------------------------------------------------------------------------


Raise an Error object
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

::

   raise new Error("This is an error")

If the error object has a property, ``statusCode``, then the value of the property is used. And if not, the status code is 500. So the above case fails in 500 error, and the following case will fails in 403.

::

    var err = new Error("This is an error");
    err.statusCode = 403;
    raise err;

use ``raiseError(statusCode)``
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

You can use the function ``raiseError(statusCode)`` to respond the page with the given status code.

::

    var raiseError = require('sunrise').raiseError;
    raiseError(404);

   
