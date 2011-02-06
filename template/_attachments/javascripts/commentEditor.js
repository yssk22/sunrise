$(function(){
   $("div#commentEditor aside").hide();
   $("div#commentEditor form").validationEngine();
   $("div#commentEditor a.toggleForm").click(function(e){
      $("div#commentEditor aside").toggle('blind');
      e.preventDefault();
      return false;
   });
   $("div#commentEditor form").bind('submit', function(e){
      return false;
   });
});
