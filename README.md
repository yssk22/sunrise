
This readme is still underconstruction. Wait a minutes for official release!.

----

# Sunrise

A various application middleware set using CouchApp and node.js/Express.
This package is developed for CouchDB-JP web site, but it can be available 
for various community/personal sites.

## Requirements

- CouchDB 1.0.1 above
- node.js 0.3.X
- npm 0.2.3.6

## Install

    $ git clone git://github.com/couchdb-jp/sunrise
    $ cd sunrise
    $ npm install .

## Create Site

To host a sunrise site, you can generate a site application using sunrise:create command.

    $ sunrise:create /path/to/your/site

Then you can launch boot.js to 

    $ node /path/to/your/site/boot.js
    
By default, following configurations are used.

- admin/password for CouchDB authentication
- 0.0.0.0:8888 for the container server.

Go to http://{your_host}:8888/ to see your site.

## Modify Your Site

Sunrise site can install or customize by node script.  See /path/to/your/site/node/handler.js, which is an endpoint of the container.

For more details, please check source code and documentations in official repository.


## Test (for developers)

Before you launch test script, you need to install expresso package using npm.

    $ expresso -I lib test/test.*

or you can check coverage:

    $ expresso -I lib --cov test/test.*

## Available Applicaitons

- posts
- chat (TBD)
- wiki (TBD)
- file uploader (TBD)
- realtime chat (TBD)
- ....

## Licesnse

MIT license
