// Create a function that converts a given string to a PascalCase format

function changeToPascalCase(string) {
   let convertedStr = '';
   for (char in string) {
      let convertsChar =
         char % 2 === 0 ? string[char].toUpperCase() : string[char].toLowerCase();

      convertedStr += convertsChar;
   }
   return convertedStr;
}
console.log(changeToPascalCase("hello"));
console.log(changeToPascalCase("yo eli"));
console.log(changeToPascalCase("hello???"));
console.log(changeToPascalCase("HELLO"));