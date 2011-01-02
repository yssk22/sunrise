var assert = require('assert');
var helper = require('./test_env');
var i18n = require('sunrise/i18n');

module.exports = {
   "test installMessages": function(){
      var _i18n = new i18n.i18n();
      var dir = helper.fixtureFile('i18n'); // contains en.json and ja.json.
      _i18n.installMessages(dir, function(){
         assert.eql(_i18n.translate('foo'), "bar");
         assert.eql(_i18n.translate('foo', 'ja'), "ばー");
         assert.eql(_i18n.translate('foo', 'zh'), "bar");
      });
   },
   "test resolveLocales": function(){
      var req = {
         headers: {
            'accept-language' : 'da, ja;q=0.6, en-gb;q=0.8, en;q=0.7'
         }
      };
      var lc = i18n.resolveLocales(req);
      assert.eql(lc[0], 'da');
      assert.eql(lc[1], 'en-gb');
      assert.eql(lc[2], 'en');
      assert.eql(lc[3], 'ja');
   },

   "test translate": function(){
      // default locale
      var _i18n = new i18n.i18n();
      _i18n.addMessages({
         'foo': "bar"
      });
      // translated by default
      assert.eql(_i18n.translate('foo'), "bar");
      // translated by specified locale but not found
      assert.eql(_i18n.translate('foo', 'ja'), "bar");


      // add specified message dictionary
      _i18n.addMessages({
         'foo': "ばー"
      }, 'ja');
      assert.eql(_i18n.translate('foo', 'ja'), "ばー");

      // not translated
      assert.eql(_i18n.translate('hoge'), "hoge");
   }


}
