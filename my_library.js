// This page demonstrates JQUery anonymousfunctons and events.
// It's also a cheat sheet.

// THIS IS VERY IMPORTANT to have first EVERY TIME
$(document).ready(function(){

	// the following are the functions and events

	// these will make the main header disappear for 3000 miliseconds -- 3 seconds, then re-appear.

	$("h1").hide(3000);

	$("h1").show(3000);

	// These will make the image of jupiter fade in and out over 4 seconds

	$("img").fadeOut(4000);

	$("img").fadeIn(4000);

	// This makes the first paragraph with pink text hide by sliding upwards, then coming back over 5 seconds

	$(".para1").slideUp(5000);
	
	$(".para1").slideDown(5000);

	// this animates the blue box with the second paragraph, changing its opacity and width over 4 seconds

	$(".para2").animate({
	opacity: 0.25,
	width: "100%"
	} , 4000 );

	$(".para2").animate({
	opacity: 100,
	width: "50%"
	} , 4000 );

	// This creates a click event when user clicks on the aqua box 

	$(".clickMe").click(
	function(){
	alert("You Clicked the Box!");
	}
	);























// This bracket must ALWAYS close at the bottom of the document ready wrapper
})