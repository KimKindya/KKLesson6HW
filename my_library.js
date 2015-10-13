// This page demonstrates JQUery anonymousfunctons and events.
// It's also a cheat sheet.

// THIS IS VERY IMPORTANT to have first EVERY TIME. It makes sure JavaScript does not run until the page finishes loading.
$(document).ready(function(){

	// the following are the functions and events

	// this pair will make the main header disappear for 3000 miliseconds -- 3 seconds, then re-appear.

	$("h1").hide(3000);

	$("h1").show(3000);

	// This pair makes the image of jupiter fade in and out over 4 seconds

	$("img").fadeOut(4000);

	$("img").fadeIn(4000);

	// This pair makes the first paragraph with pink text hide by sliding upwards, then coming back over 5 seconds

	$(".para1").slideUp(5000);
	
	$(".para1").slideDown(5000);

	// this pair animates the blue box with the second paragraph, changing its opacity and width over 4 seconds

	$(".para2").animate({
	opacity: 0.25,
	width: "100%"
	} , 4000 );

	$(".para2").animate({
	opacity: 100,
	width: "50%"
	} , 4000 );

	// This makes an alert box appear after a click event, when user clicks on the aqua box 

	$(".clickMe").click(
	function(){
	alert("You Clicked the Box!");
	}
	);

	// Here's an example of one animation triggering another when it's done, using an anonymous function as a callback:
	
	var animateBox = function(){

	$(".aniBox1").animate( {
	opacity: .1,
	width: "100%"
	}, 5000)
	}

	$(".aniBox1").show(animateBox)

	// Same command as above, with simplified syntax

	// $(".aniBox1").show( animateBox(){
	// $(".aniBox1").animate( {opacity: .1, width:"100%"} 5000)
	// })




















// This bracket must ALWAYS close at the bottom of the document ready wrapper
})