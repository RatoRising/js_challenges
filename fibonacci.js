/* Dev Tips Daily
input: fibo(8)
output:	0
			1
			1
			2
			3
			5
			8
			13
 */


function fibo(numberToFibo) {
	let n1 = 0;
	let n2 = 1;
	let next = undefined;

	for (let i = 1; i < numberToFibo; i++) {
		console.log(n1);
		next = n1 + n2; // 1
		n1 = n2; // 1
		n2 = next; // 1
	}
}
fibo(8);

//This is what happens during the iteration
next = 2;
n1 = 1;
n2 = next; // 2

next = 3;
n1 = 2;
n2 = next; // 3

next = 5;
n1 = 3;
n2 = next; // 5

next = 8;
n1 = 5;
m2 = next; // 8

next = 13;
n1 = 8;
n2 = next; // 13

next = 21;
n1 = 13;
n2 = next = 21;

next = 34;
