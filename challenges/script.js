//======= Data 1 =========//
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

//====== Data 2 ==========//

marksWeight = 95;
marksHeight = 1.88;
johnsWeight = 85;
johnsHeight = 1.76;
marksBMI = marksWeight / marksHeight ** 2;
johnsBMI = johnsWeight / (johnsHeight * johnsHeight);
markHigherBMI = marksBMI > johnsBMI;
console.log(marksBMI);
console.log(johnsBMI);
console.log(markHigherBMI);
