/* Dev Tips Daily
Print prime numbers between give rang m to n
input: printPrime(20, 50)
output:  23
         29
         31
         37
         41
         43
         47
 */

// check for prime
function isPrime(xNum) {
	// Number 0 and 1 are both prime and composite so they are excluded and return false
	if (xNum == 1 || xNum == 0) return false;
	// No even number other than 2 is prime, so for any number in i that module is 0 return false
	for (let i = 2; i < xNum; i++) {
		if (xNum % i === 0) return false;
	}
	// Remaining numbers are prime
	return true;
}

// print numbers
function printPrime(min, max) {
	for (let i = min; i <= max; i++) {
		if (isPrime(i)) {
			console.log(i);
		}
	}
}

printPrime(20, 50);