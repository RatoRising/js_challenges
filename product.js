/* DIGITAL HOUSE

Create a function "product" that receives an array of numbers and return its product: the result of multiplying all the elements among them.
For example, product([1, 4, 7]) must return 28, that is 1 * 4 * 7.

Give me a clue
Remember how to iterate arrays and do something with each element and how to accumulate elements
*/

let numbers = [ 2, 4, 6 ];

// for loop
function product1() {
	let accumulator = 1;
	for (let i = 0; i < numbers.length; i++) {
		accumulator *= numbers[i];
	}
	return accumulator;
}

// reduce in a variable
const product2 = numbers.reduce((a, b) => a * b);

// reduce
function product3() {
	return numbers.reduce((a, b) => a * b);
}

console.log(product1());
console.log(product2)
console.log(product3());