/*
Family expenses system

Create an object that has 2 arrays containing:
* income
* exepenses

Now, create a function that will calculate the total of income and expenses and will show a message alerting if the family has a positive or negative balance and the balance amount.
*/

let entries = {
	income: [1000, 500, 800, 1000],
	expenses: [1200, 3200, 2000]
};

function familyBalance() {
	const sum = (a, b) => a + b;
	const totalIncome = entries.income.reduce(sum);
	const totalExpenses = entries.expenses.reduce(sum);
	const balance = totalIncome - totalExpenses;

	if (balance > 0) {
		return `The family is positive with the balance of ${balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.`;
	}

	if (balance <= 0) {
		return `The family is negative with the balance of ${balance.toLocaleString('pt-BR', { syle: 'currency', currency: 'BRL' })}.`;
	}
}

console.log(familyBalance());