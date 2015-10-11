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

// Added WHILE LOOPS



