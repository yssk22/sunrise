$(function(){
   editor($("textarea"));
   autocomplete($("#tags"), JSON.parse($("#tags_autocomplete").val()));
   $("#postEditor").validationEngine();
});
