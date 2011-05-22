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
-------------------------------------------------------------------------------

At first, you need to a container site for your application to be installed for testing. As described at :doc:`../getting_started`, use ``sunrise:create`` command.

::

   $ sunrise\:create -s sunrise-site


Then your site directory is as follows.

::


