/* 
Create a function that checks if a movie is action and its value considering that:

1. If it is an action movie and the value is greater than 5, it should return "no", otherwise it will return "yes",
2. If it is NOT an action movie and the value is less than or equal to 15, it must return "yes"
3. If it is NOT an action movie and the value is greater than 15, it should return "maybe",
*/

let isActionFlick = false;
let ticketCost = 20;

let watchMovie = function(isActionFlick, ticketCost) {
	if (isActionFlick === true && ticketCost > 5) {
		return 'no';
	}
	if (ticketCost <= 15) {
		return 'yes';
	}
	return 'maybe';
};
console.log(watchMovie());


// What will these functions return?
console.log(watchMovie(false, 10));
console.log(watchMovie(true, 10));
console.log(watchMovie(false, 20));

