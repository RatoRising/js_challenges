/* DIGITAL HOUSE

Create a function moreLess that receive an array and return a new array with the following numbers:

1. At the first position, the fraction of numbers that are positive
2. At the second position, the fraction of numbers that are zero
3. At the third position, the fraction of numbers that are negative

For example, moreLess([1, 2, 0, -1]) should return [0.5, 0.25, 0.25] as 50% are positive, 25% are zero and 25% are negative.

Give me a clue
Some questions that may help: How to iterate an array and check if the element is positive, negative or zero? How to count the elements? How to create the new array with the results.
*/

let primaryArray = [-2, -1, 0, 1, 2];

function moreLess(primaryArray) {
	let positiveArray = [];
	let zeroArray = [];
	let negativeArray = [];
	let newArray = [];
	let percentage = primaryArray.length;

	for (item in primaryArray) {
		primaryArray[item] > 0 ? positiveArray.push(primaryArray[item]) : null;
		primaryArray[item] === 0 ? zeroArray.push(primaryArray[item]) : null;
		primaryArray[item] < 0 ? negativeArray.push(primaryArray[item]) : null;
	}

	newArray.push(positiveArray.length / percentage);
	newArray.push(zeroArray.length / percentage);
	newArray.push(negativeArray.length / percentage);

	return newArray;
}

console.log(moreLess(primaryArray));