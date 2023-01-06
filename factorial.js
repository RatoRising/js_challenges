/* DIGITAL HOUSE

Write a function the returns the factorial of a number.

Give me a clue
Remember the math classes and how factorial operation works.

*/
let numToFact = 7;

function factorial() {
	let numAccumulator = numToFact;
	for (let i = 1; i < numToFact; i++) {
		numAccumulator *= i;
	}
	return numAccumulator;
}
console.log(factorial());

function factorialize() {
	// if (numToFact === 0 || numToFact === 1)
	//   return 1;
	for (var i = numToFact - 1; i >= 1; i--) {
		numToFact *= i;
	}
	return numToFact;
}
console.log(factorialize());
