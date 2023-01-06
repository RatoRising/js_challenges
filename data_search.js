/*
Searching and counting data in arrays

Based on the book category array below, solve the following challenges

* Count the number of categories and the number of books per category
* Count the number of authors
* Show books written by Augusto Cury
* Change the function above into a function that will receive the author's name and return the books written by this author
*/

const booksByCategory = [{
		category: 'Riqueza',
		books: [{
				title: 'Os segredos da mente milionária',
				author: 'T. Harv Eker'
			},
			{
				title: 'O homem mais rico da Babilônia',
				author: 'George S. Clason'
			},
			{
				title: 'Pai rico, pai pobre',
				author: 'Robert T. Kiyosaki e Sharon L. Lechter'
			}
		]
	},
	{
		category: 'Inteligência Emocional',
		books: [{
				title: 'Você é Insubstituível',
				author: 'Augusto Cury'
			},
			{
				title: 'Ansiedade – Como enfrentar o mal do século',
				author: 'Augusto Cury'
			},
			{
				title: 'Os 7 hábitos das pessoas altamente eficazes',
				author: 'Stephen R. Covey'
			}
		]
	},
	{
		category: 'Inteligência Desmotivacional',
		books: [{
				title: 'A maior motivação é o desespero',
				author: 'Coach de Fracassos'
			},
			{
				title: 'Quem acredita sempre cansa',
				author: 'Coach de Fracassos'
			}
		]
	}
];

function totalOfCategories() {
	const totalCategories = booksByCategory.length;

	console.log(`Total of categories is ${totalCategories}.`);
}
// totalOfCategories();

function totalPerCategory() {
	for (let objectsInBooksByCategory of booksByCategory) {
		let category = objectsInBooksByCategory.category;
		let totalOfBooks = objectsInBooksByCategory.books.length;
		console.log(`Total books of category: ${category} is ${totalOfBooks}.`);
	}
}
// totalPerCategory();

function countAuthors() {
	let authors = [];

	for (let objectsInBooksByCategory of booksByCategory) {
		for (let objectAuthorInBooks of objectsInBooksByCategory.books) {
			if (authors.indexOf(objectAuthorInBooks.author) === -1) {
				authors.push(objectAuthorInBooks.author);
			}
		}
	}
	console.log(`Total of authors is ${authors.length}.`);
}
// countAuthors();

function countTitles() {
	let titles = [];

	for (let objectsInBooksByCategory of booksByCategory) {
		for (let objectTitleInBooks of objectsInBooksByCategory.books) {
			if (titles.indexOf(objectTitleInBooks.title) === -1) {
				titles.push(objectTitleInBooks.title);
			}
		}
	}
	console.log(`Total of titles is ${titles.length}.`);
}
// countTitles();

function returnAugustoCuryBooks() {
	let titles = [];
	let author = 'Augusto Cury'

	for (let objectsInBooksByCategory of booksByCategory) {
		for (let objectAuthorInBooks of objectsInBooksByCategory.books) {
			if (objectAuthorInBooks.author === author) {
				titles.push(objectAuthorInBooks.title);
			}
		}
	}
	console.log(`The books of ${author} are: ${titles.join(', ')}.`);
}
// returnAugustoCuryBooks();

function returnAnyAuthor(author) {
	let titles = [];

	for (let objectsInBooksByCategory of booksByCategory) {
		for (let objectAuthorInBooks of objectsInBooksByCategory.books) {
			if (objectAuthorInBooks.author === author) {
				titles.push(objectAuthorInBooks.title);
			}
		}
	}
	console.log(`Books of ${author}: ${titles.join(', ')}.`);
}
// returnAnyAuthor('Coach de Fracassos');

function tellMeEverything() {
	totalOfCategories();
	totalPerCategory();
	countAuthors();
	countTitles();
	returnAugustoCuryBooks();
	returnAnyAuthor('Coach de Fracassos');
}
tellMeEverything()