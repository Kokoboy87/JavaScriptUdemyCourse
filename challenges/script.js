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
