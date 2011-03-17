// maybe replaced with RequireJS
document.write('<script type="text/javascript" src="http://ajax.microsoft.com/ajax/jquery.validate/1.7/jquery.validate.min.js"></script>');
$(function(){
  $(".preventSubmit").bind('keypress', function(e){
    return !((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13));
  });
  $("form#postEditor").validate();
});