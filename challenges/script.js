/*
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
*/
