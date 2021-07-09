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
*/
