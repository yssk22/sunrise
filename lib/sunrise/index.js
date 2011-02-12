/**
 * Framework Version
 */
module.exports = {
  version: '0.0.1',
  viewHelpers: require('./viewHelpers'),
  dynamicHelpers: require('./dynamicHelpers'),
  util: require('./middleware/util'),
  db:   require('./middleware/db'),
  oauth: require('./middleware/oauth'),
  ext: {
    addCssMacro:  require('./ext/addCssMacro')
  }
}
