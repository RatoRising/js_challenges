function leapYear(year) {
   let isLeapYear = (year % 400 === 0 && year % 100 === 0) || (year % 4 === 0 && year % 100 !== 0)
   return isLeapYear ? 'Leap year' : 'not leap year';
}

console.log(leapYear(1992));
