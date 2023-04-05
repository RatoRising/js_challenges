// Create a function that returns the amount of each number inside the array corners.

const corners = [1, 2, 5, 5, 10, 10, 7, 9, 8, 5, 8, 8, 15, 10, 11, 11, 12, 11, 7, 5, 7, 7, 10, 9, 7, 7, 10, 4, 9, 7, 7, 15, 12, 10, 8, 12, 9, 7, 14, 13, 8, 9, 12, 7, 12, 9, 11, 11, 11, 14, 17, 9, 9, 6, 7, 14, 13, 10, 5, 12, 10, 10, 15, 3, 12, 13, 4, 6, 9, 11, 9, 11, 9, 9, 13, 7, 6, 11, 10, 7, 13, 5, 9, 8, 9, 7];

// 5 = 6
// 7 = 14
// 10 = 10

function countDuplicates(corners) {
   const map = Object.create(null); // It can be an empty object.
   for (const item of corners) {
      map[item] ? map[item] += 1 : map[item] = 1
   }
   return map;
}
console.log(countDuplicates(corners));


const occurrences = corners.reduce((acc, curr) => {
   return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
}, {});
console.log(occurrences)