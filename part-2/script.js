'use strict';
/*
//====== Strict mode activation ======//
//+++++ strict mode show us the error in live 6(in perpose i removed the "s" from the variable ) +++++//
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

//+++++ unexpected strict mode reserved word example +++++//
const interface = 'Audio';
const private = 534;
const if = 23;


//====== Functions ======//
function logger() {
	console.log('My name is Georgios');
}
//++++ calling / running / invoking the function ++++//
logger();
logger();
logger();

//++++ "apples and bannanas" are parameters that are going to get defined once we call the function ++++//
function fruitProcessor(apples, bannanas) {
	const juice = `Juice with ${apples} apples and ${bannanas} bannanas`;
	return juice;
}
//++++ '5 and 0' are the Arguments ++++//
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleBannanaJuice = fruitProcessor(2, 4);
console.log(appleBannanaJuice);

//++++ Build in Function +++++//
//++++ Takes the '23' string and return as a number ++++//
const num = Number('23');
console.log(num);


//====== Functions Declarations Vs. Expressions ======//

//++++ Functions Declarations +++++//
//++++ We can call the code before the function is defined +++++//
const age1 = calcAge1(1987);

function calcAge1(birthYear) {
	return 2021 - birthYear;
}

console.log(age1);

//-----------------------------------------------//

//++++ Functions Expressions +++++//

const calcAge2 = function (birthYear) {
	return 2021 - birthYear;
};
//++++ But we CAN'T call the code in the function expression before we defined +++++//
const age2 = calcAge2(1987);
console.log(age2);


//===== Arrow Function ======//
//++++ Arrow Function is a lot faster and cleaner to write, it doesn't need curly brackets or a return keyword when is a single line code ++++//
const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1987);
console.log(age3);

//++++ But when you have more lines of code we need to use curly brackets and the return keyword. Also we need to use parentheses if we have more parameters +++++//
const yearsUntilRetirement = (birthYear, fisrtName) => {
	const age = 2021 - birthYear;
	const retirement = 65 - age;
	// return retirement;
	return `${fisrtName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1987, 'George'));
console.log(yearsUntilRetirement(1976, 'Takis'));

//===== Function calling other Functions ======//
function cutFruitPieces(fruit) {
	return fruit * 4;
}

function fruitProcessor(apples, bannanas) {
	const applePieces = cutFruitPieces(apples);
	const bannanaPieces = cutFruitPieces(bannanas);

	const juice = `Juice with ${applePieces} piece of apples and ${bannanaPieces} pieces of bannanas`;
	return juice;
}
console.log(fruitProcessor(2, 3));

//===== Reviewing Functions ======//
//+++++ We can have the same parameter name in many differend functions because they are not related to each other. +++++//
const calcAge = function (birthYear) {
	return 2021 - birthYear;
};

const yearsUntilRetirement = function (birthYear, fisrtName) {
	const age = calcAge(birthYear);
	const retirement = 65 - age;

	if (retirement > 0) {
		//++++ The return statement exits emmediately the function +++++//
		return retirement;
		//++++ So it never reached the console.log, if we want to execute the console.log "function"  we need to move it before the return statement +++++//
		console.log(`${fisrtName} retires in ${retirement} years.`);
	} else {
		return -1;
		console.log(`${fisrtName} has already retired 🎉`);
	}

	// return `${fisrtName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1987, 'Georgios'));
console.log(yearsUntilRetirement(1950, 'Takis'));


//====== Introduction to Arrays ======///
//+++++ That's how we store multiple data without Arrays +++++//
const friend1 = 'Mitsan';
const friend2 = 'Poutras';
const friend3 = 'Moulan';

//+++++ And that's the same thing with Arrays +++++//
const friends = ['Mitsan', 'Poutras', 'Moulan'];
console.log(friends);

//+++++ We can have an Array without the brackets, but we need to have the keyword 'new' in order to work +++++//
const dogs = new Array('Boris', 'Luna', 'Igor', 'Bob');
console.log(dogs);

console.log(friends[0]);
//++++ Array.length is not zero based, so it give us the exact amount of items/elements in Array +++++//
console.log(friends.length);
//++++ We can use the Array.length to get the last element of an Array with outneed to know the exact number of the Array ++++//
console.log(friends[friends.length - 1]);
//+++++ We can change any values in the Array, so now the last name instead of Mulan is Giannakis ++++//
friends[2] = 'Giannakis';
console.log(friends);
//++++ we can also import varriables inside an Array ++++//
const firstName = 'Georgios';
//++++ We can calculate the age inside an Array. And we can also put an Array inside another Array exmp(friends Array). ++++//
const georgios = [firstName, 'Kokotinis', 2021 - 1987, 'Bartender', friends];
console.log(georgios);

//------ Exercise Arrays ------//
const calcAge = function (birthYear) {
	return 2021 - birthYear;
};
const years = [1990, 1976, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


//====== Basic Array Operations(Methods) =====//
// Add elements
//++++ The Push method it's add an Element at the end of the Array +++++//
//+++++ Push is a Function +++++//
const friends = ['Mitsan', 'Poutras', 'Moulan'];
const newLength = friends.push('Giannakis');
console.log(friends);
console.log(newLength);

//++++ Unshift method it add an Element at the beginning of the Array ++++//
friends.unshift('Panos');
console.log(friends);

//---------------------------------------------------//

// Remove elements
//++++ The pop method removes an element from the end of the Array ++++//
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

//++++ The Shift method removes an element from the beginning of the Array ++++//
friends.shift();
console.log(friends);

//++++ IndexOf tell us in which position an element is in the Array ++++//
console.log(friends.indexOf('Poutras'));

//++++ Include is a method similar to IndexOf, but insted of returning the index of the element its simply returns if true the element is in the Array, or false if not ++++//
friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Mitsan'));
//++++ It's shows false because it is testing with strict equality, it doesn't do type coercion('23' the string is different than 23 the number +++++//
console.log(friends.includes('23')); // but if i log it as 23 number is going to be true.

if (friends.includes('Mitsan')) {
	console.log('You have a friend called Mitsan');
}


//====== Introduction to Objects ======//
//++++ Array ++++//
const georgeArray = ['George', 'Kokotinis', 2021 - 1987, 'Bartender', ['Poutras', 'Mitsan', 'Moulan']];
//++++ Objects ++++//
//---- In Objects we can define key value pairs ----//
const george = {
	firstName: 'George',
	lastName: 'Kokotinis',
	age: 2021 - 1987,
	job: 'Bartender',
	friends: ['Poutras', 'Mitsan', 'Moulan'],
};
console.log(georgeArray);


//===== Dot vs. Bracket Notation =====//
const george = {
	firstName: 'George',
	lastName: 'Kokotinis',
	age: 2021 - 1987,
	job: 'Bartender',
	friends: ['Poutras', 'Mitsan', 'Moulan'],
};
console.log(george);
//++++ Dot Notation ++++//
console.log(george.lastName);
//++++ Bracket Notation +++++//
console.log(george['lastName']);
//++++ In Bracket Notation we can put any expression, we don't have to write the string here we can compute it from some operation ++++//
const nameKey = 'Name';
console.log(george['first' + nameKey]);
console.log(george['last' + nameKey]);

const interestedIn = prompt('What do you want to know about George? Choose between firstName, lastName, age, job, and friends');
console.log(george[interestedIn]);

if (george[interestedIn]) {
	console.log(george[interestedIn]);
} else {
	console.log('Wrong request!Choose between firstName, lastName, age, job, and friends');
}

george.location = 'USA';
george['twitter'] = 'https://twitter.com';
console.log(george);

//++++ Challenge ++++//
console.log(`${george['firstName']} has ${george.friends.length} friends, and his best friend is called ${george.friends[0]}.`);


//===== Object Methods =====//
const george = {
	firstName: 'George',
	lastName: 'Kokotinis',
	birthYear: 1987,
	job: 'Bartender',
	friends: ['Poutras', 'Mitsan', 'Moulan'],
	hasDriversLicense: true,

	//+++++ Functions that are atteched to Objects called Methods(Function Value) +++++//
	// calcAge: function (birthYear) {
	// 	return 2021 - birthYear;
	// },

	// //++++ This variable ++++//
	// calcAge: function () {
	// 	//++++ 'This' variable print the whole george object ++++//
	// 	console.log(this);
	// 	return 2021 - this.birthYear;
	// },

	//++++ We can store a new property with 'this' keyword. ++++//
	calcAge: function () {
		//++++ we can use the Dot notation to create new Properties ++++//
		this.age = 2021 - this.birthYear;
		return this.age;
	},

	//----- Challenge Method -----//
	getSummary: function () {
		return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
	},
};

//++++ Dot Notation ++++//
//++++ with 'This' variable we don't need to add anything inside the parentheses ++++//
console.log(george.calcAge());
console.log(george.age);
console.log(george.age);
//++++ Bracket Notation ++++//
// console.log(george['calcAge'](1987));

//---- Challenge -----//
console.log(george.getSummary());


//====== Iteration: the for loop ======//
//++++ Tha's a Completely Wrong way to count reps +++++//
// console.log('Lifting weigths repetition 1💪');
// console.log('Lifting weigths repetition 2💪');
// console.log('Lifting weigths repetition 3💪');
// console.log('Lifting weigths repetition 4💪');
// console.log('Lifting weigths repetition 5💪');
// console.log('Lifting weigths repetition 6💪');
// console.log('Lifting weigths repetition 7💪');
// console.log('Lifting weigths repetition 8💪');
// console.log('Lifting weigths repetition 9💪');
// console.log('Lifting weigths repetition 10💪');

//++++ And here is how we can do it with a for loop ++++//
//----- 'for' loop keeps running while condition is TRUE -----//
for (let rep = 1; rep <= 10; rep++) {
	console.log(`Lifting weigths repetition ${rep} 💪`);
}
*/

//====== Looping Arrays, Breaking & Continuing ======//
const george = ['George', 'Kokotinis', 2021 - 1987, 'Bartender', ['Poutras', 'Mitsan', 'Moulan']];

const types = [];

for (let i = 0; i < george.length; i++) {
	//---- Reading from george array ----//
	console.log(george[i], typeof george[i]);
	//---- Filling types array ----//
	// types[i] = typeof george[i];
	types.push(typeof george[i]);
}

console.log(types);
//++++ Very Important to understand this snippet of code(from 341 to 347) +++++//
const years = [1987, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
	ages.push(2021 - years[i]);
}
console.log(ages);

//---- Continue and Break ----//
console.log('---- ONLY STRINGS ----');
for (let i = 0; i < george.length; i++) {
	if (typeof george[i] !== 'string') continue;

	console.log(george[i], typeof george[i]);
}

console.log('---- BREAK WITH NUMBER ----');
for (let i = 0; i < george.length; i++) {
	if (typeof george[i] === 'number') break;

	console.log(george[i], typeof george[i]);
}
