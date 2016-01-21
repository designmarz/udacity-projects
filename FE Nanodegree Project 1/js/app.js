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
	// var html = '<div class="test">';
		$.each( data, function( key, val ) {
			console.log("Key -----------");
			console.log(key);
			console.log("----------- Value");
			console.log(val);
			console.log("------ End -----");

			html += "<article class='gallery_image col-sm-2'>";
			// split line into columns
			
			html += "<header><h1 class='primary-text-color'>" + val[0] + "</h1></header>";
			html += "<a href='#' class='thumbnail'><img src='" + val[2] + "' id='"+key+"' class='img-responsive'alt='"+val+"'></a>";
			html += "<footer><p class='secondary-text-color'>" + val[1] + "</p></footer>";
			// close row
			html += "</article>";		
		});


		// insert into div
		$('#gallery').append(html);
	});



//   $.getJSON( "data/content.json", function( data ) {
//   var items = [];

//   $.each( data, function( key, val ) {
//     items.push( "<li id='" + key + "'>" + val[0] + "</li>" );
//     items.push( "<li id='" + key + "'>" + val[2] + "</li>" );
//     items.push( "<li id='" + key + "'>" + val[1] + "</li>" );
//   });
 
//   $( "<ul/>", {
//     "class": "my-new-list",
//     html: items.join( "" )
//   }).appendTo( "#landing" );
// });


// console.log("Doc Loaded");
});