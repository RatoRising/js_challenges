/* Convert school grades

Create a function that converts the grades from the numeric system to the characters systems such as A B C according to the criteria below and then create a new function that return the average grade of a student with at least 5 grades

* from 90 and on - A
* from 80 to 89  - B
* from 70 to 79  - C
* from 60 to 69  - D
* less than 60   - F
*/

function convertGrades(grade) {
	if (grade < 0 || grade > 100 || grade === '' || grade === undefined || grade === null) {
		return 'Invalid grade';
	}

	if (grade < 60) return 'E';
	if (grade < 70) return 'D';
	if (grade < 80) return 'C';
	if (grade < 90) return 'B';
	if (grade < 101) return 'A';
}

function studentGrade(gradesArray) {
	const average = gradesArray.reduce((a, b) => a + b) / gradesArray.length;

	if (average < 59) return 'E';
	if (average < 69) return 'D';
	if (average < 79) return 'C';
	if (average < 89) return 'B';
	if (average < 101) return 'A';
}

console.log(convertGrades(100));
console.log(studentGrade([70, 70, 50, 100, 100]));