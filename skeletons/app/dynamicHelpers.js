/**
 * You can define dynamic helper functons in this script.
 */
module.exports = function(app){
  return {
    hello: function(req, res){
      return "Hello World!";
    }
  };
}