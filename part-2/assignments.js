'use strict';
/*
//===== Assignment 1 Functions =====//

function descrideCountry(country, population, capitalCity) {
    //+++++ We can also return the string/template litera without creating a variable inside the function +++++//
    //++++ return `${country} has ${population} million people and its capital city is ${capitalCity}.`; +++++// 
	const countryInformation = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
	return countryInformation;
}

const greece = descrideCountry('Greece', 10.7, 'Athens');
console.log(greece);
const italy = descrideCountry('Italy', 60.4, 'Rome');
console.log(italy);
const brazil = descrideCountry('Brazil', 211, 'Brasilia');
console.log(brazil);


//===== Assignment 2 Functions Declarations Vs. Expressions =====//
//++++ Function Declaration +++++//
const calcChina1 = percentageOfWorld1(1441);
const calcGreece1 = percentageOfWorld1(10.7);
const calcBrazil1 = percentageOfWorld1(211);

function percentageOfWorld1(population) {
	return (population / 7900) * 100;
}

//++++ Assignment 3 Function Expression +++++//

const percentageOfWorld2 = function (population) {
	return (population / 7900) * 100;
};

const calcChina2 = percentageOfWorld2(1441);
const calcGreece2 = percentageOfWorld2(10.7);
const calcBrazil2 = percentageOfWorld2(211);

console.log(calcChina1, calcChina2);
console.log(calcGreece1, calcGreece2);
console.log(calcBrazil1, calcBrazil2);

//====== Assignment 4 Arrow Function =====//

const percentageOfWorld3 = population => (population / 7900) * 100;

const calcChina3 = percentageOfWorld3(1441);
const calcGreece3 = percentageOfWorld3(10.7);
const calcBrazil3 = percentageOfWorld3(211);
console.log(calcChina3, calcGreece3, calcBrazil3);


//===== Assignment 5 Function Calling Other Functions =====//
//+++++ My Prediction +++++//
function percentageOfWorld1(population) {
	return (population / 7900) * 100;
}

function describePopulation(country, population) {
	const countryPercentage = percentageOfWorld1(population);
	return `${country} has ${population} million peope, which is about ${countryPercentage}% of the world.`;
}

console.log(describePopulation('China', 1441));
console.log(describePopulation('Greece', 10.7));
console.log(describePopulation('Brazil', 211));

//-----------------------------------------------------//

// //+++++ Jonas Solution +++++//
// function percentageOfWorld1(population) {
// 	return (population / 7900) * 100;
// }

// const describePopulation = function (country, population) {
// 	const percentage = percentageOfWorld1(population);
// 	const description = `${country} has ${population} million peope, which is about ${percentage}% of the world.`;
// 	console.log(description);
// };

// describePopulation('China', 1441);
// describePopulation('Greece', 10.5);
// describePopulation('Brazil', 211);


//===== Assignment 6 Introduction to Arrays ======//
function percentageOfWorld1(population) {
	return (population / 7900) * 100;
}

const population = [10.7, 1441, 211, 60.4];
const percentages = [percentageOfWorld1(population[0]), percentageOfWorld1(population[1]), percentageOfWorld1(population[2], percentageOfWorld1(population[3]))];
console.log(population.length === 4);
console.log(percentages);


//===== Assignment 7 Basic Array Operations(Methods) ======//
const neighbours = ['Turkey', 'Italy', 'Bulgaria'];
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop('Utopia');
console.log(neighbours);

if (!neighbours.includes('Germany')) {
	console.log('Probably not a central European country');
}

neighbours[neighbours.indexOf('Italy')] = 'Albania';
console.log(neighbours);


//====== Introduction to Objects ======//

const myCountry = {
	country: 'Greece',
	capital: 'Athens',
	language: 'Greek',
	population: 10.7,
	neighbours: ['Albania', 'Turkey', 'Italy'],
};

//===== Dot vs. Bracket Notation =====//
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}- speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry.population);
*/

//====== Object Methods =====//
const myCountry2 = {
	country: 'Greece',
	capital: 'Athens',
	language: 'Greek',
	population: 10.7,
	neighbours: ['Albania', 'Turkey', 'Italy'],

	describe: function () {
		return `${this.country} has ${this.population} million ${this.language}- speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
	},

	checkIsland: function () {
		this.isIsland = this.neighbours.length === 0 ? true : false;
		return this.isIsland;
	},
};

console.log(myCountry2.describe());
console.log(myCountry2.checkIsland());
