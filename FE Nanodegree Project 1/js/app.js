/* jshint undef: true, unused: true, devel: true */
$(document).ready(function() {

	$('.owl-carousel').owlCarousel({
	   animateOut: 'fadeOut',
	    items:3,
	    margin:30,
	    stagePadding:30,
	    smartSpeed:450
	});

	$( ".img-link" ).click(function( event ) {
	  event.preventDefault();
	  // Future: add dialog box popup or modal
	});

});