/* posts.js */
(function($){
  function somethingWrong(){
    alert('something is wrong. try later ...');
  }

  $.fn.bindList = function(){
    var target = this;
    var link = target.find('.readmore');
    link.button();
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

    // autocomplete
    var tags = target.find('input[name="tags"]');
    if( tags.autocomplete ){
      var a = [];
      $("a.tag-link").each(function(e){
        var t = $(this);
        a.push([t.attr('data-name').replace(/&(?!\w+;)/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/\"/g, '&quot;')
                .replace(/\'/g, '&#39;'), t.attr('data-count')]);
      });
      tags.autocomplete(a, {
        multiple: true, mustMatch: false,
        scroll: true, scrollHeight: 300,
        formatItem: function(data, i, n, value){
          return data[0] + " (" + data[1] + ")";
        },
        formatResult: function(data, i, n, value){
          return data[0];
        }
      });
    }

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
          somethingWrong();
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
    target.bind('submit', onSubmit);
    $('#cancel').click(onCancel);

    target.find('input').keypress(function(e){
      if( e.which === 13 || e.keyCode === 13 ){
        return false;
      }else{
        return true;
      }
    });

  };

  $.fn.bindDelete = function(){
    var target = this;
    var button = target.find('a.delete');
    function onClick(e){
      // TODO: i18n message
      if( confirm('Are you sure') ){
        var link = target.attr('data-permalink');
        $.ajax({
          type: "DELETE", url: link,
          success: function(data, status, xhr){
            target.effect('drop', function(){
              target.trigger('deleted');
            });
          },
          failure: function(data, status, xhr){
            somethingWrong();
          }
        });
      }
      return false;
    };
    button.unbind('click', onClick);
    button.bind('click', onClick);
  };

})(jQuery);

$(function(){
  function f(s){
    if( s > 10 ){
      return s;
    }else{
      return '0' + s;
    }
  }

  $('time').each(function(){
    var self = $(this);
    var t = new Date(self.attr('datetime'))
    var date = [f(t.getFullYear()), f(t.getMonth() + 1), f(t.getDate())].join('-');
    var time = [f(t.getHours()), f(t.getMinutes() + 1), f(t.getSeconds())].join(':');
    self.html(date + ' ' + time);
  });
});