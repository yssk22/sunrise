/* posts.js */
(function($){
  $.fn.bindList = function(){
    var target = this;
    var link = target.find('.readmore');
    link.bind('click', function(e){
      var last = link.prev();
      var path = link.attr('data-apipath');
      var param = {
        startkey: last.attr('data-key'),
        startkey_docid: last.attr('data-docid'),
        skip: 1
      };
      $.get(path, param, function(data){
        link.before(data);
        var newlast = link.prev();
        if( last.attr('data-docid') === newlast.attr('data-docid') ){
          link.hide();
        }
      });
    });
  },

  $.fn.bindForm = function(){
    var target = this;
    // Event Handlers
    function onSubmit(e){
      var action = target.attr('action');
      var type = target.attr('method');
      var doc = {};
      $(target.serializeArray()).each(function(i, v){
        doc[v.name] = v.value;
      });
      if( doc._id == '' ){
        delete(doc._id); delete(doc._rev);
      }
      $.ajax({
        type: type, url: action,
        contentType: 'application/json',
        processData: false,
        data: JSON.stringify(doc),
        success: function(data, status, xhr){
          if( type == 'PUT' ){
            return location.href = action;
          }else{
            return location.href = xhr.getResponseHeader('Location');
          }
        },
        failure: function(){
          alert('something is wrong. try later ...');
        }
      });
      return false;
    }

    function onCancel(e){
      history.back();
      e.preventDefault();
      return false;
    }

    target.unbind('submit', onSubmit);
    target.submit(onSubmit);
    $('#cancel').click(onCancel);
  };
})(jQuery);