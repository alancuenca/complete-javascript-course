'use strict';

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'jonas';
// let job = 'teacher';
// const year = 1991;

//console.log(addArrow(1,2));

// function addDec(a, b) {
//     return a + b
// }

// const addEx = function (a, b) {
//     return a + b
// }

// const addArrow = (a, b) => a + b;

// console.log(numProducts);
// if (!numProducts) deleteCart();

// var numProducts = 10

// function deleteCart() {
//     console.log('all products deleted');
// }

//this = object that is calling the method
//console.log(this);
function calcAge (birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
}

calcAge(1991);

const calcAgeArrow = (birthYearx) => {
    console.log(2037 - birthYearx);
    console.log(this);
}

calcAgeArrow(1991)

const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    }
}
console.log(jonas);
jonas.calcAge()

const matilda = {
    year: 2017
}

matilda.calcAge = jonas.calcAge;
matilda.calcAge()