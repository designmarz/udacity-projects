/* jshint undef: true, unused: true, devel: true */
$(document).ready(function() {

	$('.owl-carousel').owlCarousel({
	   animateOut: 'flipInX',
	    items:2,
	    margin:60,
	    stagePadding:30,
	    smartSpeed:5450
	});

	$( ".img-link" ).click(function( event ) {
	  event.preventDefault();
	  // Future: add dialog box popup or modal
	});

	var key_typer = function(divID) {
		var id = document.getElementById(divID);
		var text = id.innerHTML;
		console.log(text);
		return text;		
	};

key_typer('hero-text');
$('#fullpage').fullpage();
});