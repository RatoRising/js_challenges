/* DIGITAL HOUSE

The utopian tree: Utopian trees grow in a particular way, in two cycles:
• every spring they double their size
• each summer they grow one meter

If Laura plants a one-meter utopian tree in late autumn, how tall would it be after N cycles?
Some examples:
•	si N = 0, its height will be 1 meter (did not grow)
•	si N = 1, its height will be 2 meters (doubled height in spring)
•	si N = 2, its height will be 3 meters (grew a meter more in the summer)
•	si N = 3, its height will be 6 meters (doubled in height the following spring)
•	and so on ...

Write the utopianTreeHight function, which takes a number of growth cycles, and returns the resulting height of Laura's tree.

Give me a clue
Take into account the time between season changes.

*/

// spring sumer autumn winter


// This function meets what is requested according to the description of the exercise that considers each operation
function utopianTreeHight_1(growthCicles) {
	let springGrows = 2;
	let summerGrows = 1;
	let totalGrowth = 1;

	for (plantedAutumn = 1; plantedAutumn <= growthCicles; plantedAutumn++) {
		plantedAutumn % 2 === 1 ? (totalGrowth *= springGrows) : (totalGrowth += summerGrows);
	}
	return totalGrowth;
}
console.log(utopianTreeHight_1(4));

// This function considers that one cycle is equal to the total of 1 year (four seasons)
function utopianTreeHight_2(growthCicles) {
	let springGrows = 2;
	let summerGrows = 1;
	let totalGrowth = 1;

	for (plantedAutumn = 1; plantedAutumn <= growthCicles; plantedAutumn++) {
		totalGrowth = totalGrowth * springGrows + summerGrows;
	}
	return totalGrowth;
}
console.log(utopianTreeHight_2(4));



// In this example the "counter & 1" works as a module for 1 and 0 (counter % 2 === 1 or counter % 2 === 0)
function utopianTreeHight_3(growthCicles) {
	let springGrows = 2;
	let summerGrows = 1;
	let totalGrowth = 1;
	for (let counter = 0; counter < growthCicles; counter++) {
		if (counter & 1) {
			totalGrowth += summerGrows;
		} else totalGrowth *= springGrows;
	}
	return totalGrowth;
}
console.log(utopianTreeHight_3(4));
