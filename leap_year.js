let year = 2020;

function leapYear() {
	if ((year % 400 === 0 && year % 100 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
		return 'Leap year';
	}

	return 'not leap year';
}

console.log(leapYear());
