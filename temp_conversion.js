/*
Celsius to fahrenheit

Create a function that receives a string in celsius or fahrenheit and converts from a unit to another

C = (F - 32) * 5/9
F = (C * 9 9/5) + 32
*/

let inputC = ""
let inputF = 0
let celcius = (inputF - 32) * 5 / 9;
let fahrenheit = (inputC * 9 / 5) + 32

function tempConversion() {
   if (inputC === "" && inputF === "") {
      return "Insert a number"
   }

   if (inputC === "") {
		return `${inputF} Fahrenheit degrees is equal to ${celcius.toFixed(2)} Celsius degrees`
   }

   if (inputF === "") {
      return `${inputC} Celsius degrees is equal to ${fahrenheit.toFixed(2)} Fahrenheit degrees`
   }
}
console.log(tempConversion())



// // Maik Brito solution that asked for a string entry
// function convertDegree(degree) {
// 	const hasC = degree.toUpperCase().includes('C');
// 	const hasF = degree.toUpperCase().includes('F');

// 	if (!hasC && !hasF) {
// 		throw new Error('Value not specified');
// 	}

// 	let newDegree = Number(degree.toUpperCase().replace('F', ''));
// 	let calculation = fahrenheit => (fahrenheit - 32) * 5 / 9;
// 	let degreeSign = 'C';

// 	if (hasC) {
// 		newDegree = Number(degree.toUpperCase().replace('C', ''));
// 		calculation = celsius => celsius * (9 / 5) + 32;
// 		degreeSign = 'F';
// 	}

// 	return calculation(newDegree).toFixed(2) + degreeSign;
// }

// try {
// 	console.log(convertDegree('0F'));
// 	console.log(convertDegree('0C'));
// } catch (error) {
// 	console.log(error);
// }
