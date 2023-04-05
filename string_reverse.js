// Create a function that reverses any given string

// Method 1
function reverseString1(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
console.log(reverseString1('Boost the world!'));

// Method 2
const reverseString2 = (str) => {
    return Array.from(str).reverse().join('')
}
console.log(reverseString2('Boost the world!'));

// Method 3
const reverseString3 = (str) => {
    return str.split('').reverse().join('')
}
console.log(reverseString3('Boost the world!'));