$(function(){
  function setPagination(){
    var head  = $("#admin_list thead form.meta");
    var first = $("#admin_list tbody tr:first form.meta");
    var last = $("#admin_list tbody tr:last form.meta");

    var total_rows = parseInt($("input[name='total_rows']", head).val());
    var offset     = parseInt($("input[name='offset']", head).val());
    var num_rows   = parseInt($("input[name='num_rows']", head).val());

    var next = {
      startkey: JSON.stringify($("input[name='key']", last).val()),
      startkey_docid: $("input[name='docid']", last).val(),
      skip: 1
    };
    var prev = {
      reverse: true,
      startkey: JSON.stringify($("input[name='key']", first).val()),
      startkey_docid: $("input[name='docid']", first).val(),
      skip: 1
    };

    if( offset == 0 ){
      $("#posts div.pagination a.prev").addClass('disabled');
    }else{
      $("#posts div.pagination a.prev").removeClass('disabled');
      $("#posts div.pagination a.prev").attr('href', "#" + $.param(prev));
    }
    if( total_rows == offset + num_rows ){
      $("#posts div.pagination a.next").addClass('disabled');
    }else{
      $("#posts div.pagination a.next").removeClass('disabled');
      $("#posts div.pagination a.next").attr('href', "#" + $.param(next));
    }
  }

  setPagination();
  $("#posts div.pagination a").click("click", function(){
    var self = $(this);
    var param = self.attr("href").substr(1);

    if( !self.hasClass('disabled') ){
      $("#admin_list").load("/posts/admin/_/list/?layout=false&" + param,
                            function(){
                              setPagination();
                            });
    }
  });
});