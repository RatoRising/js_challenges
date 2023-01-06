/* Dev Tips Daily
Check if a given three digit number is an Armstrong number or not
input: 153 / 326
output: true / false
*/

let nNumber = 8192;

function armstrongNumberChecker() {
	let isArmstrong = `${nNumber} is an Armstrong Number.`;
	let notArmstrong = `${nNumber} is not an Armstrong Number.`;
	let nNumberToArray = Array.from(String(nNumber));
	let nNumberReducer = nNumberToArray.map((item) => item ** nNumberToArray.length).reduce((a, b) => a + b);

	if (nNumber > 1 && nNumberToArray.length === 1) {
		return notArmstrong;
	}

	return nNumberReducer === Number(nNumber) ? isArmstrong : notArmstrong;
}

console.log(armstrongNumberChecker());
