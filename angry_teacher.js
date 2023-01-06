/* DIGITAL HOUSE

A programming teacher, tired of students arriving late, has decided that she will cancel the class if there are few present.

She represents students arrival as an array of late arrival times, in minutes. For example, if a student arrived 10 minutes late, another 5 minutes early, another 3 minutes late, and another on time, you could represent it like this:
var studentsOfMonday = [10, -5, 3, 0];

With this information and the minimum number of students for the course to take place, the teacher wants to know if the class will take place. For example, assuming that the minimum number of students for the class to take place is 2 students, then the Monday course will take place, because there was a student who was punctual and a student who arrived early.
happens(studentsOfMonday, 2)
true

But if the minimum quantity was 3, the class would not take place:
happens(studentsOfMonday, 3)
false

Write the following functions:
1. dailyClass, which says whether the class will succeed according to the array of students who entered.
2. weeklyClass, which uses an array with the arrays of students who entered on other days, and the minimum number of students, and tells which days the classes took place and which did not. For example:

weeklyClass([studentsOfMonday, studentsOfTuesday, studentsOfWednesday], 2)
[true, false, false]

Give me a clue
We remind you that the challenges section was created for you to solve it without help to test all your acquired knowledge.
*/

// set students entrance time
let monClass = [ 10, -5, 3, 0, 2 ];
let tueClass = [ 5, -2, 3, 4, 1 ];
let wedClass = [ -2, -4, 5, 0, 2 ];
let thuClass = [ 3, 5, 7, -1, 0 ];
let friClass = [ 2, -2, 0, -5, -6 ];
let weekClasses = [ monClass, tueClass, wedClass, thuClass, friClass ];
let yesCriteria = 2;

// Function 1 that calculates whether there will be a class on the day
function dailyClass(monClass, yesCriteria) {
	let onTime = [];

	for (let studentTime of monClass) {
		studentTime <= 0 ? onTime.push(studentTime) : false;
	}

	if (onTime.length >= yesCriteria) {
		return 'Yes';
	}
	return 'No';
}
console.log(dailyClass(monClass, yesCriteria));

// Function 2 that calculates the days of the week when there was a class // I almost went crazy here!
// Need to understand why this function doesn't work if I don't insert parameters in the first
function weeklyClass() {

	let onTimeWeek = [];

	for (let studentTime in weekClasses) {
		onTimeWeek.push(dailyClass(weekClasses[studentTime], yesCriteria));
	}

	return onTimeWeek;
}
console.log(weeklyClass());
