function split( val ) {
	return val.split( /,\s*/ );
}
function extractLast( term ) {
	return split( term ).pop();
}

function editor(target){
   return target.cleditor({
      width: "100%",
      height: "400px",
      useCSS: false,
      docCSSFile: "/stylesheets/content/all.css"
   });
}

function autocomplete(target, arg){
   if(typeof(arg) == 'string'){
      throw new Error('not supported remote autocomplete');
   }else{
      var availableTags = arg;
      return target.autocomplete({
			minLength: 0,
			source: function( request, response ) {
				// delegate back to autocomplete, but extract the last term
				response( $.ui.autocomplete.filter(
					availableTags, extractLast( request.term ) ) );
			},
			focus: function() {
				// prevent value inserted on focus
				return false;
			},
			select: function( event, ui ) {
				var terms = split( this.value );
				// remove the current input
				terms.pop();
				// add the selected item
				terms.push( ui.item.value );
				// add placeholder to get the comma-and-space at the end
				terms.push( "" );
				this.value = terms.join( ", " );
				return false;
			}
      });
   }

}
