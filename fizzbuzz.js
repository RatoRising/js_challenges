// Fizzbuzz
// Divisible by 3 = "Fizz"
// Divisible by 5 = "Buzz"
// Divisible by 3 e 5 = "fizzBuzz"
// If not a number = "Insert a valid number"
// If not divisible by 3 or 5 = "Returns the input number"

function fizzBuzz(inputNumber) {
	const isNotNumber = typeof inputNumber !== 'number';
	const isFizz = inputNumber % 3 === 0;
	const isBuzz = inputNumber % 5 === 0;
	const isFizzBuzz = inputNumber % 3 === 0 && inputNumber % 5 === 0;

	return isNotNumber
		? 'Insert a valid number'
		: isFizzBuzz ? 'FizzBuzz' : isFizz ? 'Fizz' : isBuzz ? 'Buzz' : inputNumber;
}

console.log(fizzBuzz(3));

function fizzBuzz(inputNumber) {
	if (typeof inputNumber !== 'number') {
		return 'Insert a valid number';
	}
	if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
		return 'FizzBuzz';
	}
	if (inputNumber % 3 === 0) {
		return 'Fizz';
	}
	if (isBuzz = inputNumber % 5 === 0) {
		return 'Buzz';
	}
	return inputNumber;
}

console.log(fizzBuzz(5));