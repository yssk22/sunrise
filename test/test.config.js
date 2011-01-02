var $ = require('jquery');
var assert = require('assert');
/***
 * DO NOT use helper, which sets the test configuraton.
 * this test script just tests config function.
 *
 * // var helper = require('./helper');
 *
 ***/
require.paths.push(__dirname + '/../lib');
var config = require('sunrise/config');


module.exports = {
   "non existance directory does not affects anything": function(){
      var before = $.extend({}, config);
      config.load("path/to/non/existance");
      var after = $.extend({}, config);
      assert.eql(before, after);
   }
};

