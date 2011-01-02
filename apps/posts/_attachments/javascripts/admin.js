$(function(){
   function setPagination(){
      var first = $("#posts tbody tr:first form.meta");
      var last = $("#posts tbody tr:last form.meta");
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
      $("#posts div.pagination a.next").attr('href', "#" + $.param(next));
      $("#posts div.pagination a.prev").attr('href', "#" + $.param(prev));
   }

   setPagination();
   $("#posts div.pagination a").click("click", function(){
      var param = $(this).attr("href").substr(1);
      $("#posts tbody").load("/posts/admin/_/list/?layout=false&" + param,
                             function(){
                                setPagination();
                             });
   });

});