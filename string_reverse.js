// Reverse a string

function reverseAString_1(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
        console.log(newStr); // Inside the loop the console.log will display the whole log for each loop as it is part of it.
    }
}
let result_1 = reverseAString_1('Hello')


function reverseAString_2(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    console.log(newStr); // Outside the loop the console.log will display only the final result after complete all the iterations.
}
let result_2 = reverseAString_2('Hello')
