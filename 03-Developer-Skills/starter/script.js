// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/**  We work for a company building a smart home thermometer.
Our most recent task is this: "Given an array of temperatures of one day,
calculate the temperature amplitude.
Keep in mind that sometimes there might be a sensor error."
*/
// const temp1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temp2 = [11, 7, 1, 'error', 11];
// const temp = temp1.concat(temp2);
// console.log(temp);
//1)
// -what is amplitude? ANSWER: difference between highest and lowest temp
// -how to compute the max and min temps?
// -what is a censor error? what to do?

//2)
//// -how to ignore errors?
//// -find max value in temp array
//// -find min value in temp array
// -subtract min from max (maplitude) and return it

// const calcTempAmplitude = function (temps) {
//     let max = temp[0];
//     let min = temp[0];
//     for (let i = 0; i < temp.length; i++) {
//         if (typeof temp[i] !== 'number') continue;
//         if (temp[i] > max) max = temp[i];
//         if (temp[i] < min) min = temp[i];
//     }
//     console.log(max);
//     console.log(min);
//     return max - min;
// };
// const amplitude = calcTempAmplitude()
// console.log(amplitude);

// PROBLEM 2:
// -Function should now receive 2 arrays of temps

// 1) understand the problem
// -with 2 arrays, shoudl we implement functionality twice? NO! just merge two arrays
// 2)
// -merge 2 arrays

// function isIsogram(str) {
//     //...
//     return !/(\w).*\1/i.toString(str);
// }

// console.log(isIsogram("isogram"));
// let string = "yctionAa";
// //let pattern = /(\w).*\1/i
// let pattern = /(\w).*\1/i
// // \w this is all the alphabet
// // . returns anything bewteen
// // star is a wild card
// // \1 means, return the first GROUP . this is how it finds the repeated letters
// // /i is case insensitive
// let result = string.match(pattern)

// console.log(result);

// const measureKelvin = function () {
//     const measurement = {
//         type: 'temp',
//         unit: 'celsius',
//         value: Number(prompt('Degrees celsius:')),
//     };

//     console.table(measurement);
//     const kelvin = measurement.value + 273;
//     return kelvin
// }

// console.log(measureKelvin());

const temp1 = [17, 21, 23]
const temp2 = [12, 5, -5, 0, 4]

function printForecast(arr) {
    let str = '';
    for (let day = 0; day < arr.length; day++){
        const tempDay = day+1
        str += `${arr[day]}°C in ${tempDay} days ... `
        //console.log(` ... ${newTemp}°C in ${tempDay} days`);
    }
    console.log(str);
};

printForecast(temp2)