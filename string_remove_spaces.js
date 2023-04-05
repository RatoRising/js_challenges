/* DevTipsDaily
Remove spaces from a string

input:
Dev Tips Daily

output:
DevTipsDaily
 */

let text = 'Dev Tips Daily';

// Using split & join
const removeSpaces = () => {
	joined = text.split(' ').join('');
	return joined;
}

// Using replace
const changeSpaces = () => text.replaceAll(' ', '');

console.log(removeSpaces());
console.log(changeSpaces());