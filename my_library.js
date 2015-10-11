// This page will be the "cheat sheet" for lesson 6, the second day of JavaScript, and 
// intro to JQUery.

// JavaScript Cheat Sheet Day 2: LOOPS

// LOOP:a block of code that gets repeated for a defined
// number of iterations (for loop) or until a certain condition is
// met (while loop)

// Typically one variable or condition in the loop changes each
// time it is run

// EXAMPLES OF LOOPS: TO SEE THESE CUT AND PASTE CODE DIRECTLY INTO CONSOLE

// EXAMPLE OF A FOR LOOP, USING NUMBERS -- a loop that is repeated for a defined number of iterations

	for(var i = 0; i<13; i++){
	console.log(i)
	}

// // the variable defined as i is the number of times the loop is to be repeated. 
// We start with 0 because in the first iteration 1 will be added to it
// the console log will show the current value of i in each iteration
// the first number that appears in the console will be 1

// i++ means in each iteration, add 1. You can also do i-- which means in each iteration, subtract 1

// The iterations will repeat until the last number is less than 13, in other words 12. Then the loop will stop.

// The result in the console is that you will see the numbers 1 to 12 appear

// EXAMPLE OF A FOR LOOP, using STRINGS IN AN ARRAY

	cats = ["tabby", "siamese", "persian"]
	for(var i = 0; i< cats.length; i++){
	console.log(cats[i])
	}

// Here, we define an array containing 3 strings
// Again, we define a variable representing the number of iterations, which starts with 0
// the iterations will repeat NOW for the number of strings in the array, represented by cats.length, here being 3
// i++ again means add 1 to each iteration
// the console will show the current string in the array corresponding to the position in the array
// when i is no longer less than the number of strings in the array (3) the loop stops
// the console will print out each cat type in order


// EXAMPLE OF NESTED LOOPS

// We create an array filled with 2 arrays. Inside of each array are several strings.

	var insects_array = ["butterfly", "bee", "beetle"];

	var fish_array = ["tuna", "flounder", "halibut"];

	var combined_array = [insects_array, fish_array];

// In order to display the information (strings) inside of each of these arrays (in the console) we need to create two NESTED loops

// The first, outer loop keeps track of the total number of items The outer loop will repeat for the number of times equal to the combined array's length (6)the combined array using variable i
// The outer loop will repeat for the number of times equal to the combined array's length (6)

// The second, inner loop is keeping track of the items in each individual array. It "freezes" the outer loop each time it repeats.
// During the "Freeze" in each iteration of outer loop, the second loop is stopping to count the number of items in each of the component arrays using j
// When the inner loop displays the strings in the component arrays, the outer loop resumes until everything is counted and printed

	
for( var i = 0; i < combined_array.length; i++){


		for( var j = 0; j < combined_array[i].length; j++){
			console.log(combined_array[i][j]);
		}

// EXAMPLE OF A WHILE LOOP -- repeating the code until a condition is met

	x = 5;

	while(x < 15){
		console.log("x is currently " + x);
		x++;
	}	

// Here, we start at 5, and add 1 to it in each iteration. As long as the total value is LEss THAN 15, 
// the loop will repeat
// When the condition is met that the value is 15, the loop will stop.

// A While loop can also be used to count DOWN using the minus-minus command

	x = 10;

	while( x >= 0 ){
		console.log(x + "little indians");
		x--;
	}

// JQUERY: An External JavaScript Library
// Library: a collection of functions and code that someone has written to make a set of tasks easier in a specific programming language
//By including the library in your code, you'll have access to
// its functions and methods

// to use a library for a project
// Create a new file, my_library.js, inside the same folder as your HTML file
// In the <Script> tags, refer to this file as a relative path as your src 

// Common library problems
// Load the page with the JavaScript console open (Command + Option + J) to see if any errors are raised when the page and library are loaded
// Sometimes libraries conflict with each other due to similar naming conventions of functions and methods
// You may have to remove a library or edit it to get it to work with another library
// To check to see if a library is loaded, try calling one of its functions or methods. For instance, to make sure jQuery is loaded, just try calling jQuery in the JavaScript console

// jQuery is a "write less, do more" library
// can be marginally slower than using native JavaScript but exposes much JavaScript functionality in a very developerfriendly and cross-browser-friendly way
// The 2.x version does not support IE6, 7 or 8 if this is important to know for your project

// TO USE A JQUERY LIBRARY
// Inside of the <head> section of your HTML file, include a copy of the jQuery library:
// <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js">
// </script>

// You could also just download the library and include it in your project
// directory, referencing it relatively

// The main JQUERY line MUST be BEFORE your own my_library.js file reference in the HEAD!

// USE JQUERY to SELECT ELEMENTS on a page using the JavaScript console (assuming the page uses JQuery as its library)

	$("body")

// USE the DOLLAR SIGN as the characteristic JQuery command.
// In the parenthesis write, in quotes, the name of the desired element

// The console should return an Array with selected elements:
// >[><body>...</body>]

// You can use an element name, class (remember the . at beginning) or id (#)

	$("ul li")

// Note the above is to select the LINE ITEM INSIDE the unordered list, not the list itself.

// MONITORING FOR EVENTS with JavaScript
// For instance, we could monitor for a click event on a <button> element to fire a specific snippet of code


// THE FOLLOWING IS VERY VERY IMPORTANT!
// $(document).ready() snippet must always be at the TOP of your my_library file!
// This snippet ensures that your code doesn't run until your document fires a ready event
// The ready event fires when all of the page's DOM elements are loaded, even if multimedia elements aren't fully loaded
// By encapsulating all of our jQuery code to only run when the document is ready, the elements you're selecting will definitely be on the page when you access them

// Anonymous functions - write functions that make them a "first class citizen" data type, meaning they can be:
// given as an argument to a function (yes, a function taking a function)
// returned by a function or block of code
// assigned to a variable

// SYTNAX FOR ANONYMOUS FUNCTIONS

// function(){
// alert("This is an anonymous function");
// }
// Anonymous functions can be stored in variables:
// var my_anon_func = function(){ alert("Har!"); }

//IN a mylibrary.js file, THE ABOVE SYNTAX APPEARS NESTED UNDER THE DOCUMENT READY SNIPPET

// CALLBACK: an anonymous function supplied to another function to be run when that function is done running

// EXAMPLE OF A CALLBACK
// Define an anonymous function called someOtherFunction

	var mysteryFunction = function(){ alert('hello world'); }

// Declare a regular or anonymous function that takes another function as an argument, does something, then runs that other function

	function otherFunction(anyFunction){ console.log(3+5); anyFunction(); }

// Call the regular function, supplying the initial
// anonymous function as an argument

	otherFunction(mysteryFunction);

// THE FOLLOWING IS ALSO VERY IMPORTANT!
// To use $(document).ready() and ensure the page is ready for your jQuery, you'll need to pass it an anonymous function (a callback) to execute when the document is ready

$(document).ready(

//Code that executes when the document is ready function(){

alert("Document Ready!);
}
);

// See index page and new my_library.js file for examples of "The Fun Stuff" or, "JQUery events"