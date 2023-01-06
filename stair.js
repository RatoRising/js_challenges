/* DIGITAL HOUSE

We want to represent a stair with variable height using a string array
For example, a 3 steps high stair will be represented with the following array:
var stair3 = [
 "  #",
 " ##",
 "###"
]

and a 5 steps high stair will be represented with the following array:
var stair5 = [
 "    #",
 "   ##",
 "  ###",
 " ####",
 "#####"
]

Write a function that receive a number as its height and return an array that represents the corresponding stair. Do not forget that the space " " is part of the answer.

Give me a clue
In Javascript you can repeat a text using the repeat as follows: var step = "#".repeat(2); // now step = "##"; This will help to increase the steps, but how to insert the amount of steps according to the number indicated by the resulting array? How to insert an element in an array?

*/

function addSteps(fullStair) {
	let newStair = [];

	for (let step = 1; step <= fullStair; step++) {
		newStair.push(`${' '.repeat(fullStair - step)}${'#'.repeat(step)}`);
	}

	return newStair;
}
// The console.log is correctly displayed in the browser, however to display the result according to expected in the terminal you need to use the console.table
console.log(addSteps(5));
console.table(addSteps(5));