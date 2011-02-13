var $ = require('jquery');
module.exports = {
  tagCloud: function(mvresult, options){
    options = $.extend({
      level: 10
    }, options);

    if( mvresult ){
      var level = options.level;
      var max = 0;
      var min = Number.MAX_VALUE;
      for(var i in mvresult){
        var count = mvresult.rows[i].value;
        if( count < min ){
          min = count;
        }
        if( count > max ){
          max = count;
        }
      }
      var span = (max - min) / (level-1);
      console.log('max = ' + max);
      console.log('min = ' + min);
      console.log('span = ' + span);
      var result =  mvresult.rows.map(function(e){
        var tag = e.key;
        var count = e.value;
        return {
          tag: tag,
          count: count, 
          rank: Math.ceil(((count - min) / span)) + 1
        };
      });
      console.log(JSON.stringify(result));
      return result;
    }else{
      return [];
    }
  }
}