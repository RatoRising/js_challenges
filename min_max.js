/* Dev Tips Daily
Print all the numbers between min and max which are divisible by 5 and not divisible by 11.

input: printNum(40, 80)
output:	40
			45
			50
			60
			65
			70
			75
			80
 */

let min = 40;
let max = 80;

function minMax() {
	for (let i = min; i <= max; i++) {
		if (i % 5 === 0 && i % 11 !== 0) {
			console.log(i);
		}
	}
}

console.log(minMax());
