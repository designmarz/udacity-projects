/* jshint undef: true, unused: true, devel: true */
$(document).ready(function() {
// console.log("Doc Loading");
	$.getJSON( "data/content.json", function( data ) {

		var key, count = 0;
		for(key in data) {
		  if(data.hasOwnProperty(key)) {
		    count++;
		  }
		}
		gloData = data; // jshint ignore:line
		console.log(data);
		console.log(count);

		var html = '';
	// var html = '<div class="test">';

		html += "<article class='gallery_image col-sm-4'>";
		// split line into columns
		
		html += "<header><h1>" + data.project1[0] + "</h1></header>";
		html += "<img src='" + data.project1[1] + "' alt=''>";
		html += "<footer><p>" + data.project1[0] + "</p></footer>";
		// close row
		html += "</article>";		
	
		// close table
		// html += "</div>";

		// insert into div
		$('#gallery').append(html);
	});



  $.getJSON( "data/content.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val[0] + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "landing" );
});


// console.log("Doc Loaded");
});