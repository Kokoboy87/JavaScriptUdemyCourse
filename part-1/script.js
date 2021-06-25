/*
let js = 'amazing';
console.log(40 + 8 + 23 - 20);

console.log('Jonas');
console.log(23);

let firstName = "Mariaaaaa";


console.log(firstName);
console.log(firstName);
console.log(firstName);

//let jonas_matilda = 'JM' // we can do this
//let jonas&matilda = 'JM' //But not this. no symbols other than '$' and '_' use us Var on JS

let myFirstJob = "Carpenter"
let mySecondJob = "Server"
let myCurrentJob = "Unemployment"

console.log(myFirstJob)
console.log(mySecondJob)
console.log(myCurrentJob)

//======== Data types ========//

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1986;
console.log(year);
console.log(typeof year);

console.log(typeof null);

//======= let, const and var =======//
let age = 30;
age = 31;

const birthYear = 1987;
// birthYear = 1990; //that gives an error because we can't change the Value of a const variable.

const job; //that gives an error also, we can't have an empty value const variable.


//-------------------------------//
//-----  BASIC OPERATORS  ------//
//-----------------------------//

//====== Math Operators ======//
const now = 2021;
const ageGeorgios = now - 1987;
const ageMaria = now - 2003;
console.log(ageGeorgios, ageMaria);

console.log(ageGeorgios * 2, ageGeorgios / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

firstName = 'Georgios';
lastName = 'kokotinis';
console.log(firstName + ' ' + lastName);

//====== Assignment operators =======//
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

//===== Comparison operators =====//
console.log(ageGeorgios > ageMaria); // >, <, >=, <=
console.log(ageMaria >= 18);

const isFullAge = ageMaria >= 18;

console.log(now - 1987 > now - 2003);


//====== Math Operators ======//

const now = 2021;
const ageGeorgios = now - 1987;
const ageMaria = now - 2003;

console.log(now - 1987 > now - 2003);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageGeorgios + ageMaria) / 2;
console.log(ageGeorgios, ageMaria, averageAge);


//===== Strings and Template literals ========//

const firstName = 'Georgios';
const job = 'Bartender';
const birthYear = 1987;
const year = 2021;
//---- old school strings, before ES6 ----//
const george = "I'm" + ' ' + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(george);
//---- Template literals ( `` ) is the new way with the ES6 to use instead of string ----//
const georgeNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(georgeNew);

console.log(`Just a regular string....`); // we can use backticks in newer version of ES6 javascript for any string instead of quotes.
//---- before ES6 tempate literals ----//
console.log('String with \n\
multiple \n\
lines');
//---- in ES6 tempate literals ----//
console.log(`String with
multiple
lines`);


//===== Taking Decisions: if / else Statement =====//

const age = 15;

if (age >= 18) {
	console.log('Sarah can start driving 🚗');
} else {
	const yearsLeft = 18 - age;
	console.log(`Sarah is not old enough🛑. Wait another ${yearsLeft} years!`);
}

const birthYear = 1987;

let century;
if (birthYear <= 2000) {
	century = 20;
} else {
	century = 21;
}
console.log(century);
*/
