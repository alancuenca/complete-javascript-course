'use strict';
// let hasLicence = false;
// const passTest = true;

// if (passTest) hasLicence = true;
// if (hasLicence) console.log('I can drive');

// function logger() {
//     console.log('my name');
// }
// logger()

// function fruitProc(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// };

// const appleJuice = fruitProc(5, 0);
// console.log(appleJuice);

// const orangeJuice = fruitProc(0, 5);
// console.log(orangeJuice);

// function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
// const age = calcAge1(1988)


// //function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1988)

// console.log(age, age2);

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);


// function cutFruit(fruit) {
//     return fruit * 4
// }
//
// function fruitProcess(apples, oranges) {
//     const applePieces = cutFruit(apples);
//     const orangePieces = cutFruit(oranges);
//
//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//     return juice;
// }
// console.log(fruitProcess(2, 3));

// const yearsToRetire = (birthYear, firstName) => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//    // return retirement;
//     return `${firstName} retires in ${retirement} years`
// }
// console.log(yearsToRetire(1988, 'Alan'));

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
//         }



// const test = calcAge(1991, 'Jonas')
//     console.log(test);


// function calcAge(birthYear, firstName) {
//     const age = 2037 - birthYear;
//     console.log(firstName, age);
//     return { firstName, age }
// }


// const yearsToRetire = function (birthYear, firstName){
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         return `${firstName} retires in ${retirement} years`
//     } else {
//         return -1;
//     }
// return retirement;
// }
// console.log(yearsToRetire(1988, 'Alan'));
/**
const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (Dolphins: ${avgDolphins} vs Koalas: ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (Dolphins: ${avgDolphins} vs Koalas: ${avgKoalas})`);
    } else {
        console.log(`Tie`);
    }
};

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas)
*/
// var sum;

// Array.prototype.getSum = function (ele) {
//     sum = ele.reduce(function (a, b) {
//         return a + b
//     });
//     return sum / ele.length
// }

// for (var key in movieObj) {
//     var b = movieObj[key];

//     if (Array.prototype.getSum(b['rating']) < 5) {
//         console.log(b['moveName']);
//     }
// }
/**
const sum = (previous, current) => previous + current;

const scores = {
    "1": {
        "team": "dolphins",
        "score": [85, 54, 41]
    },
    "2": {
        "team": "koalas",
        "score": [23, 34, 27]
    }
}

let bothScores = [];
let bothTeams = [];

for (let key in scores) {
    let team = scores[key].team
    let score = scores[key].score;
    const average = score.reduce(sum) / score.length;
    console.log(average);
    bothScores.push(average);
    bothTeams.push(team)
}

if (bothScores[0] >= bothScores[1] * 2) {
    console.log(`${bothTeams[0]} win`);
} else if(bothScores[0] * 2 <= bothScores[1]){
    console.log(`${bothTeams[1]} win`);
} else {
    console.log('Tie');
}*/

// const friends = ['Michael', 'Steven', 'Peter'];
// // Add to array
// const newLength = friends.push('Jay')
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);
// //Remove from array
// friends.pop();
// console.log(friends);
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);
// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Steven'));

// console.log(friends.includes('Steven'));
// let bill = [125, 555, 44]
// let tip = []
// let totalBill = []

// for (const i in bill) {
//     const eachBill = bill[i]
//     calcTip(eachBill);
// }

// function calcTip(eachBill) {
//     if (eachBill <= 300 && eachBill >= 50) {
//         tip.push(eachBill * .15)
//         return tip
//     } else {
//         tip.push(eachBill * .2)
//         return tip
//     }
// }

// let total = bill.map(function (num, idx) {
//     totalBill.push( num + tip[idx])
// })
// console.log(tip);
// console.log(totalBill);
/**
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    calcAge: function () {
        this.age = 2037 - this.birthYeah;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and he has ${this.hasDriversLicense? 'a':'no'} driver's license.`
    }
}

console.log(jonas.getSummary());
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
console.log(`${jonas.firstName} is a ${jonas.calcAge()} year old ${jonas.job} and he has ${jonas.hasDriversLicense? 'a': 'no'} driver's license.`);
*/
/**
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        this.BMI = this.BMI.toFixed(1)
        return this.BMI;
    }
};
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        this.BMI = this.BMI.toFixed(1)
        return this.BMI
    }
};

console.log(john.calcBMI() > mark.calcBMI() ?
    `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI})` :
    `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})`);

console.log(john.calcBMI());
console.log(mark.calcBMI());*/

// for (let i = 1; i <= 10; i++){
//     console.log(`Lifting weights repetition ${i}`);
// }
// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// for (let i = jonas.length - 1; i >= 0; i--){
//     console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++){
//     console.log(`------- Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++){
//         console.log(`Exercise ${exercise}: Lifting weights repitition ${rep}`);
//     }
// }
// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weights repetition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// //console.log(dice);

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) {
//         console.log(`Loop is about to end...`);
//     }
// }

// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [];
// let totals= [];

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2
// };

// for (let i = 0; i < bills.length; i++){
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i])
// };

// console.log(totals);

// const calcAverage = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// };

// console.log(calcAverage(totals));

// let bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tip = [];
// let totalBill = [];

// for (const i in bill) {
//     const eachBill = bill[i]
//     calcTip(eachBill);
// }

// function calcTip(eachBill) {
//     if (eachBill <= 300 && eachBill >= 50) {
//         tip.push(eachBill * .15)
//         return tip
//     } else {
//         tip.push(eachBill * .2)
//         return tip
//     }
// };

// let total = bill.map((num, i) => {
//     totalBill.push(num + tip[i])
//     calcAverage(totalBill)
// });

// console.log(tip);
// console.log(totalBill);

// function calcAverage(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum / arr.length;
// };

// console.log(calcAverage(totalBill));

//const abet = 'abcdefghijklmnopqrstuvwxyz';
//const caesarCypher = (str, num) => Array.from(str).map(c => abet.includes(c) ? abet[(abet.indexOf(c) + num) % 26] : c).join('');

let abet = 'abcdefghijklmnopqrstuvwxyz';
function caesarCypher(str, shift) {
    let out = '';
    for (let i = 0; i < str.length; i++) {
        //console.log(abet.indexOf(str[i]));
        let position = abet.indexOf(str[i]);
        if (position === -1) out += str[i];
        else out += abet[(position + shift) % abet.length];
        //console.log(abet[(position + shift) %26]);
    }
    return out;
}

console.log(caesarCypher('hello 4worldz', 1));