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


//===== Type Conversion & Coercion =====//
// Type Covnersion
const inputYear = '1987';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Georgios'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion
//----- The + sign trigger a coercion to convert numbers to strings. The + operator is the only one that JavaScript it doesn't convert to a number -----//
console.log('I am ' + 23 + ' years old');
//----- The - sign operates the opposite, converte strings to numbers -----//
console.log('23' - '10' - 3);
//----- The * & / sign converte strings to numbers, thats the only way the multiplier and deviting operator works -----//
console.log('23' * '2');
//----- The > sign converte strings to numbers, that's the only the logical operator works -----//
console.log('23' > '18');

// Examples of Type Coercion
let n = '1' + 1; // it converts to '11' string because of the + operator
n = n - 1; // and here because of the - operator it converts the '11' to 11(number) - 1 = 10
console.log(n);

let i = 2 + 3 + 4 + '5'; // it calculate the first 3 numbers and the total is 9 and it convert the 9 to a string and it become '9'+'5'='95'
console.log(i);

let x = '10' - '4' - '3' - 2 + '5'; // the - operator make the strings to a number from '10' to 2 and then the + operator makes it a string again.
console.log(x);


// ===== Truthy and Falsy Values =====//
// ===========================================================//
// = 5 Falsy Values: 0, '', undefined, null, NaN = //    // All this values are going to became a false when we try to convert them to a Boolean.
// ==========================================================//

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Georgios')); // String that is not an Empty string is a truthy value
console.log(Boolean('')); // Empty string is falsy value
console.log(Boolean({}));

// That's an example of how the number 0 will be converted to false, Because javascript try to convert 'money' value to a Boolean.And that's why the 'else' statement executed on this example. //
const money = 0;
if (money) {
	console.log("Don't spend it all ;)");
} else {
	console.log('You should get a job!');
}

// Because height is undefined it execute the "else" statement.So that is a Falsy value also.
let height;
if (height) {
	console.log('YAY! Height is defined');
} else {
	console.log('Height undefined');
}


//===== Equality Operators =====//
const age = 18; // if we change the value to '18' sting only the second 'if' statement will be executed
if (age === 18) console.log('You are old enough (strict)'); // if we have a single line of code we don't need the curly brackets in the 'if' statement.

if (age == 18) console.log('You are old enough (loose)');
// //---- that it will work with the loose equality operator ----//
// const favorite = prompt('What is your favorite number?');
// console.log(favorite);
// console.log(typeof favorite);
//---- and that only with the strict equality operator ----//
const favorite = Number(prompt('What is your favorite number?'));
console.log(favorite); // We have to wrap the Value into the number function
console.log(typeof favorite);

if (favorite === 23) {
	// That work's because of the loose equality operator. if we use the === strict equality operator we need to convert favorite to a number.
	console.log('Cool! 23 is an amazing number!');
} else if (favorite === 7) {
	console.log('7 is also a cool number!');
} else if (favorite === 9) {
	console.log('9 is also a cool number!');
} else {
	console.log('Number is not 23 or 7 or 9!');
}

if (favorite !== 23) console.log('Why not 23?'); // That executes only when we choose numbers other than 23.
*/
