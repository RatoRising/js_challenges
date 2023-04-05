// Create a function that checks if a year is a leapyear or not
// You need to check the rules for leapyear

function leapYear(year) {
   let isLeapYear = (year % 400 === 0 && year % 100 === 0) || (year % 4 === 0 && year % 100 !== 0)
   return isLeapYear ? 'Leap year' : 'not leap year';
}

console.log(leapYear(1992));
