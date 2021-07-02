const country = 'Greece';
const continent = 'Europe';
let population = 10.72;
const isIsland = false;
let language;
language = 'Ελληνίκα';
population++;
const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
const newDescription = `${country} is in ${continent}, and it's ${population} million people speak ${language}`;

/*
// ======= Type Conversion & Coercion =======//
let x = '9' - '5'; // 4
let y = '19' - '13' + '17'; // 617
let z = '19' - '13' + 17; // 23
let i = '123' < 57; // false
let j = 5 + 6 + '4' + 9 - 4 - 2; // 1149 - 4 = 1145 - 2 = 1143
console.log(j);
// ------------------------------------------//
if (population >= 33) {
	console.log(`${country} population is above average`);
} else {
	console.log(`${country} population is ${33 - population} million below average`);
}
// ------------------------------------------//



//======== Equality operator ========//
const numNeighbors = Number(prompt('How many neighbor countries does your country have?'));

if (numNeighbors === 1) {
	console.log('Only 1 border!');
} else if (numNeighbors > 1) {
	console.log('More than one border!');
} else {
	console.log('No borders');
}
//----------------------------------------//

//======== Logical operators =========//

if (language === 'english' && population < 50 && !isIsland) {
	console.log(`You should live in ${country}!`);
} else {
	console.log(`${country} is not for Sarah`);
}
//-----------------------------------------//


//======= The Switch Statement ========//
language = 'arabic';

switch (language) {
	case 'chinese':
	case 'mandarin':
		console.log('MOST number of native speakers');
		break;
	case 'spanish':
		console.log('2nd place in numbers of native speakers');
		break;
	case 'english':
		console.log('3rd place');
		break;
	case 'hindi':
		console.log('Number 4');
		break;
	case 'arabic':
		console.log('5th most spoken language');
		break;
	default:
		console.log('Great language too😋');
}
//---------------------------------------//
*/

//======= Conditional (Ternary) Operator =======//
population >= 33 ? console.log(`${country} population is above average`) : console.log(`${country} population is below average`); // That was my prediction

console.log(`${country} population is ${population >= 33 ? 'above' : 'below'} average`); // That's Jonas prediction

//------------------------------------------//

// console.log(typeof isIsland);
// console.log(typeof country);
// console.log(typeof population);
// console.log(typeof language);
// console.log(language);
// console.log(population / 2);
// console.log(population);
// console.log(population > 6);
// console.log(population < 33);
// console.log(description);
// console.log(newDescription);
