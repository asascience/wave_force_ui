$('#searchEntry').keypress(function(e) {
	if(e.which == 13) {
		e.preventDefault();
		if ($('#searchEntry').val().length >2){
			var url = window.location.origin+'/search.html?s='+ $('#searchEntry').val();
	    	window.location.href = url
		}
	}
});