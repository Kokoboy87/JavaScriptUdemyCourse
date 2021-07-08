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
*/

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
