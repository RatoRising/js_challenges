// You have to create a function that runs through the array of objects below 'array' and return only the values of the objects that has the property name.
// Taken from a technical mock interview

array = [{
   a: 1,
},
{
   name: "June",
},
{},
{
   name: "Mark",
},
{
   name: "Sophia",
},
{
   b: 2,
},
];

function getNames(array) {
let propertyToSearch = "name";
const filterProp = array
   .filter((key) => key.hasOwnProperty(propertyToSearch))
   .map((obj) => obj[propertyToSearch]);
return filterProp;
}
console.log(getNames(array));