// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// // PROBLEM 1:
// // we work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// // 1) Understanding the problem :
// // - What is temperature amplitude? answer: difference between higher and lowest temperature.
// // - How to compute max and min temperature
// // - What is a sensor error ? And what to do?

// // 2) Breaking up into sub-problems
// // - How to ignore errors?
// // - Find max value in temp array
// // - Find min value in temp array
// // - Subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
// 	let max = temps[0];
// 	let min = temps[0];

// 	for (let i = 0; i < temps.length; i++) {
// 		const curTemp = temps[i];
// 		if (typeof curTemp !== 'number') continue;

// 		if (curTemp > max) max = curTemp;
// 		if (curTemp < min) min = curTemp;
// 	}
// 	console.log(max, min);
// 	return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// // PROBLEM 2:
// // - Function should now receive 2 arrays of temps

// // 1) Understanding the problem
// // - With 2 arrays, should we implement functionality twice? NO! just merge two arrays

// // 2) Breaking up into sub-problems
// // - Merge 2 arrays?

// const calcTempAmplitudeNew = function (t1, t2) {
// 	const temps = t1.concat(t2);
// 	console.log(temps);

// 	let max = temps[0];
// 	let min = temps[0];

// 	for (let i = 0; i < temps.length; i++) {
// 		const curTemp = temps[i];
// 		if (typeof curTemp !== 'number') continue;

// 		if (curTemp > max) max = curTemp;
// 		if (curTemp < min) min = curTemp;
// 	}
// 	console.log(max, min);
// 	return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew([3, 4, 5], [6, 7, 8]);
// console.log(amplitudeNew);

//============ CHALLENGE ===============//

/* Given an array of forecasted maximum temperatures the thermometer displays
a string with these tempretures.

Example: [17, 21, 23] will print "... 17℃ in 1 days ... 21℃ in 2 days ... 23℃ in 3 days..."

Create a funtion 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [17, 5, -5, 0, 4]
*/

// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ℃
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string

const data1 = [17, 21, 23];
const data2 = [17, 5, -5, 0, 4];

const printForestcast = function (arr) {
	let str = '';
	for (let i = 0; i < arr.length; i++) {
		str += `${arr[i]}℃ in ${i + 1} days ...`;
	}
	console.log('...' + str);
};

printForestcast(data2);
