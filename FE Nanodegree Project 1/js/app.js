/* jshint undef: true, unused: true, devel: true */
$(document).ready(function() {
// console.log("Doc Loading");
	
	$.getJSON( "data/content.json", function( data ) {
		var key, count = 0;
		for(key in data) { if(data.hasOwnProperty(key)) { count++; }
		  // data.length = count;
		}
		gloData = data; // jshint ignore:line
		console.log(data);
		console.log(count);
		var html = '';
		$.each( data, function( key, val ) {
			// console.log("------ Loop Start -----");
			// console.log("Key   -----------> " + key);
			// console.log("Value -----------> " + val);
			// console.log("------ Loop End -----");
			html += "<article class='gallery_image'>";
			html += "<header><h1 class='primary-text-color'>" + val[0] + "</h1></header>";
			html += "<a href='#' class='img-link'>";
			html += "<img src='" + val[2] + "' id='"+key+"' class='img-responsive'alt='"+val+"'>";
			html += "</a>";
			html += "<footer><p class='secondary-text-color'>" + val[1] + "</p></footer>";
			// close row
			html += "</article>";		
		});
		// insert html into div
		$('#gallery').append(html);

		// owl-carousel Start //

		$('.owl-carousel').owlCarousel({
			   animateOut: 'fadeOut',
			    items:5,
			    margin:30,
			    stagePadding:30,
			    smartSpeed:450
			});

		$( ".img-link" ).click(function( event ) {
		  event.preventDefault();
		  console.log(this);
		});

		// owl-carousel End //

		console.log("JSON Loaded");
	}); // End JSON data //




console.log("Doc Loaded");
});