/* Dev Tips Daily
Check wheter a number is perfect number or not

input: 20, 36
output: true, false

Info: perfect number, a positive integer that is equal to the sum of its proper divisors. The smallest perfect number is 6, which is the sum of 1, 2, and 3. Other perfect numbers are 28, 496, and 8,128.
 */

let number = 496;

function perfectNumber() {
	let isPerfect = `${number} is a perfect number.`;
	let isNotPerfect = `${number} is not a perfect number.`;
	let accumulator = 0;

	for (let i = 1; i < number; i++) {
		if (number % i === 0) {
			console.log(i)
			accumulator += i;
		}
	}

	return accumulator === number && accumulator !== 0 ? isPerfect : isNotPerfect;
}

console.log(perfectNumber());