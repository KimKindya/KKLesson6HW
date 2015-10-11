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

// EXAMPLE OF A FOR LOOP, using ITEMS IN AN ARRAY

	cats = ["tabby", "siamese", "persian"]
	for(var i = 0; i< cats.length; i++){
	console.log(cats[i])
	}

// Here, we define an array with 3 strings
// Again, we define a variable representing the number of iterations, which starts with 0
// the iterations will repeat NOW for the number of items in the array, represented by cats.length, here being 3
// i++ again means add 1 to each iteration
// the console will show the current item in the array corresponding to the position in the array
// when i is no longer less than the number of items in the array (3) the loop stops
// the console will print out each cat type in order




