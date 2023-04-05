/* DIGITAL HOUSE

Write a function the returns the factorial of a number.

Give me a clue
Remember the math classes and how factorial operation works.

*/
let numToFact = 5;

function factorial() {
	let numAccumulator = numToFact;
	for (let i = 1; i < numToFact; i++) {
		numAccumulator *= i;
	}
	return numAccumulator;
}
console.log(factorial());

function fatorialAsc() {
	let res = 1;
	for (let i = 1; i <= numToFact; i++) {
		res *= i
	}
	return res;
}
console.log(fatorialAsc(5));


function factorialize() {
	// if (numToFact === 0 || numToFact === 1)
	//   return 1;
	for (var i = numToFact - 1; i >= 1; i--) {
		numToFact *= i;
	}
	return numToFact;
}
console.log(factorialize());


const fatRecursive1 = (numToFact) => {
	if (numToFact === 0) {
		return 1;
	}
	return numToFact * fatRecursive1(numToFact - 1)
}
console.log(fatRecursive1(5));

const fatRecursive2 = (numToFact) => numToFact === 0 ? 1 : numToFact * fatRecursive2(numToFact - 1)
console.log(fatRecursive2(5));