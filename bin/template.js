#!/usr/bin/env node

var path = require('path');
var abspath = require('sunrise').utils.abspath(__dirname);

require('sunrise').boot(path.join(abspath, '../skeletons/site'));