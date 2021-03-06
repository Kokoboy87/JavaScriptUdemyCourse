'use strict';
/*
//----------------------------//
//========= Part 1 ==========//
//--------------------------//

//======= Data 1 =========//
//+++++ First Challenge +++++//
// I use let because i wanted to test the Data 2. with const are not allowed to change the values of the varriables.
let marksWeight = 78;
let marksHeight = 1.69;
let johnsWeight = 92;
let johnsHeight = 1.95;
let marksBMI = marksWeight / marksHeight ** 2;
let johnsBMI = johnsWeight / (johnsHeight * johnsHeight);
let markHigherBMI = marksBMI > johnsBMI;
console.log(marksBMI);
console.log(johnsBMI);
console.log(markHigherBMI);
//+++++ Second Challenge If/Else statement +++++//
if (marksBMI > johnsBMI) {
	console.log(`Mark's BMI is higher than John's`);
	console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})`);
} else {
	console.log(`John's BMI is higher than Mark's`);
	console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})`);
}

//====== Data 2 ==========//
//+++++ First Challenge +++++//
marksWeight = 95;
marksHeight = 1.88;
johnsWeight = 85;
johnsHeight = 1.76;
marksBMI = marksWeight / marksHeight ** 2;
johnsBMI = johnsWeight / (johnsHeight * johnsHeight);
markHigherBMI = marksBMI > johnsBMI;
console.log(marksBMI, johnsBMI, markHigherBMI);
//+++++ Second Challenge If/Else statement +++++//
if (marksBMI > johnsBMI) {
	console.log(`Mark's BMI is higher than John's`);
	console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})`);
} else {
	console.log(`John's BMI is higher than Mark's`);
	console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})`);
}

//====== Challenge 3 =======//

const teamDolphins = (57 + 112 + 101) / 3;
const teamKoalas = (70 + 95 + 123) / 3;
console.log(teamDolphins);
console.log(teamKoalas);

if (teamKoalas > teamDolphins) {
	console.log('Team Koala is the Winner!!!');
} else if (teamKoalas < teamDolphins) {
	console.log('Team Dolphins is the Winner!!!');
} else {
	console.log("It's a Draw....");
}

//+++++ Bonus 1 +++++//
if (teamDolphins > 100 && teamDolphins > teamKoalas) {
	console.log('Team Dolphins is the Winner!!!');
} else if (teamKoalas > 100 && teamKoalas > teamDolphins) {
	console.log('Team Koala is the Winner!!!');
} else {
	console.log('Non of the teams reach 100 points');
}

//+++++ Bonus 2 +++++//
if (teamDolphins > 100 && teamDolphins > teamKoalas) {
	console.log('Team Dolphins is the Winner!!!');
} else if (teamKoalas > 100 && teamKoalas > teamDolphins) {
	console.log('Team Koala is the Winner!!!');
} else if (teamDolphins >= 100 && teamKoalas >= 100 && teamDolphins === teamKoalas) {
	console.log("it's a Draw...");
} else {
	console.log('No team wins the trophy!!!');
}


//====== Challenge 4 ======//
const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(tip);

console.log(`The tip on ${bill}$ bill is ${bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2}$ and the total amount is ${bill + tip}$`);


//----------------------------//
//========= Part 2 ==========//
//--------------------------//

//====== Challenge 1 ======//
const calcAverageScore = (score1, score2, score3) => (score1 + score2 + score3) / 3;
//---- Test Data 1 ----//
const dolphinsScore1 = calcAverageScore(44, 23, 71);
const koalasScore1 = calcAverageScore(65, 54, 27);
//---- Test Data 2 ----//
const dolphinsScore2 = calcAverageScore(85, 54, 41);
const koalasScore2 = calcAverageScore(23, 34, 27);
console.log(dolphinsScore2, koalasScore2);

function checkWiner(avgDolphins, avgKoalas) {
	if (avgDolphins >= 2 * avgKoalas) {
		console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
	} else if (avgKoalas >= 2 * avgDolphins) {
		console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
	} else {
		console.log(`No team wins...`);
	}
	return;
}

checkWiner(dolphinsScore2, koalasScore2);


//====== Challenge 5 =====//

const calcTip = function (bill) {
	// //!!!!!! That's my solution, but because of that(i create a variable inside the function) the Array was log to the console as undefined and NaN. Instead i need to just return the function as the code below !!!!!!!//
	// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
	// console.log(tip);
	// //!!!!! i just need to return it !!!!!//
	return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
console.log(bills);
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);


//====== Challenge 6 =====//

const mark = {
	fullName: 'Mark Miller',
	height: 1.69,
	weight: 78,

	calcBMI: function () {
		this.bmi = this.weight / (this.height * this.height);
		return this.bmi;
	},
};

const john = {
	fullName: 'John Smith',
	height: 1.95,
	weight: 92,

	calcBMI: function () {
		this.bmi = this.weight / this.height ** 2;
		return this.bmi;
	},
};

john.calcBMI();
mark.calcBMI();

if (john.bmi > mark.bmi) {
	console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
} else if (mark.bmi > john.bmi) {
	console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else {
	console.log('Something is wrong. Try again!!');
}


//====== Challenge 7 =====//

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let total = [];

for (let i = 0; i < bills.length; i++) {
	let calcTips = bills[i] <= 300 && bills[i] >= 50 ? bills[i] * 0.15 : bills[i] * 0.2;
	tips.push(calcTips);
	let calcTotal = bills[i] + tips[i];
	total.push(calcTotal);
}
console.log(`-----Bill:${bills}`);
console.log(`-----Tips:${tips}`);
console.log(`-----Total:${total}`);

const calcAverage = function (arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		//sum = sum + arr[i];
		sum += arr[i];
	}
	return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
*/
