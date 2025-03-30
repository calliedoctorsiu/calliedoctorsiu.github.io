"use strict";
$(document).ready(function() {
	// preload images
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});
	
	// set up event handlers for links    
	$("#image_list a").click(function(evt) {
		// swap image
		var imageURL = $(this).attr("href");
		$("#image").attr("src", imageURL);
		
		//swap caption
		var caption = $(this).attr("title");
		$("#caption").text(caption);
				
		// cancel the default action of the link
	    evt.preventDefault();  // jQuery method that's cross-browser compatible
	}); // end click
	
	// move focus to first thumbnail
	$("li:first-child a:first-child").focus();
}); // end ready
$('#menu').slicknav({
	label: '',
	duration: 1000,
	easingOpen: "easeOutBounce", //available with jQuery UI
	prependTo:'#demo2'
});
$(document).ready(function() {
    $('#menu').slicknav({
        prependTo: 'nav', // Where to place the menu
        label: '', // Remove the "Menu" label
    });
});