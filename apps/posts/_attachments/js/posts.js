/* posts.js */
(function($){
  $.fn.bindForm = function(){
    var target = this;
    // Event Handlers
    function onSubmit(){
      var action = target.attr('action');
      var type = "POST";
      var doc = {};
      $(target.serializeArray()).each(function(i, v){
        doc[v.name] = v.value;
      });
      alert(JSON.stringify(doc));
      if( doc._id == '' ){
        delete(doc._id); delete(doc._rev);
      }else{
        action = action + doc._id;
        type = 'PUT';
      }
      $.ajax({
        type: type, url: action,
        contentType: 'application/json',
        processData: false,
        data: doc,
        success: function(data, status, xhr){
          return location.href = xhr.getResponseHeader('Location');
        },
        failure: function(){
          // TODO error handling
          alert('something is wrong. try later ...');
        }
      });
      return false;
    }
    function onCancel(){
      history.back();
      return false;
    }

    target.unbind('submit', onSubmit);
    target.bind('submit', onSubmit);
    $('#cancel').click(onCancel);
  };
})(jQuery);