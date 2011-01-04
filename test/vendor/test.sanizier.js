var $ = require('jquery');
var assert = require('assert');
var sanitizer = require('sunrise/vendor/sanitizer');

module.exports = {
  "test html_sanitize": function(){
    assert.eql("foobar", sanitizer.sanitize("foobar"));
    assert.eql("<p>foobar</p>", sanitizer.sanitize("<p>foobar</p>"));

    // override definitions;
    assert.eql("", sanitizer.sanitize("<p>foobar</p>",
                                      {
                                        elements: {
                                          "p": sanitizer.EFLAGS.UNSAFE
                                        }
                                      }));


    assert.eql("",
               sanitizer.sanitize("<object>foobar</object>"));

    assert.eql("<object>foobar</object>",
               sanitizer.sanitize("<object>foobar</object>",
                                  {
                                    elements: {
                                      "object": 0
                                    }
                                  }));

    assert.eql('<object width="100">foobar</object>',
               sanitizer.sanitize('<object width="100">foobar</object>',
                                  {
                                    elements: {
                                      "object": 0
                                    },
                                    sanitizeAttribs: function(tagname, attribs){
                                      return attribs;
                                    }
                                  }));

    // extended tag such as embed
    assert.eql("<embed>foobar</embed>",
               sanitizer.sanitize("<embed>foobar</embed>",
                                  {
                                    elements: {
                                      "embed": 0
                                    }
                                  }));


    // defaultSanitizeAttribs also available
    assert.eql('<object>foobar</object>',
               sanitizer.sanitize('<object width="100">foobar</object>',
                                  {
                                    elements: {
                                      "object": 0
                                    },
                                    sanitizeAttribs: sanitizer.defaultSanitizeAttribs
                                  }));

  }
}