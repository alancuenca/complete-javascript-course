/**
 *
 **/
// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 95;
// const johnHeight = 1.76;


// const mass = {
//     mark: 78,
//     john: 92
// }
// const height = {
//     mark: 1.69,
//     john: 1.95
// }

//  const mass = {
//      mark: 95,
//      john: 85
//  }
//  const height = {
//      mark: 1.88,
//      john: 1.76
//  }


/**
 *

let markBMI = mass.mark / height.mark ** 2;
console.log(markBMI);
let johnBMI = mass.john / height.john ** 2;
console.log(johnBMI);
const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
if (markHigherBMI) {
    console.log(`Mark's BMI is higher.`);
    console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1) })`);
} else {
    console.log(`John's BMI is higher`);;
}
*/

/**
const age = 12;
const ofAge = age >= 18;

if (ofAge) {
    console.log(`Sarah can get a license.`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

let century;
const birthYear = 2001;
if (birthYear <= 2000) {
     century = 20;
} else {
     century = 21;
}

console.log(century);
*/

// const inputYear = 1991;
// console.log(String(inputYear), inputYear);

// const dolphins = [96, 108, 89];
// const koalas = [88, 108, 110]

// if ((dolphins[1] > koalas[1]) && (dolphins[1] >= 100 && dolphins[1] > koalas[1])) {
//     console.log("dolphins win");
// } else if (dolphins[1] === koalas[1]){
//     console.log("tie");
//     console.log(dolphins[1]);
// } else {
//     console.log("koalas win");
// }

// const day = 'tuesday';

// switch (day) {
//     case 'monday': console.log("Plan something"); console.log("Code");
//         break;
//     case 'tuesday':
//     case 'wednesday': console.log("wednesday"); console.log('Plan another thing');
//         break;
//     case 'thursday':
//         break;
//     case 'friday':
//         break;
//     case 'saturday':
//         break;
//     case 'sunday':
//         break;
//     default: console.log('Not a valid day');
// }

// if (day == 'monday') {
//     console.log('monday');
// } else if (day == 'tuesday' || day == 'wednesday') {
//     console.log('tuesday and wednesday');
// } else {
//     console.log('another day');
// }

let tip;
let bill = 430
// if (bill >= 50 || bill <= 300) {
//     console.log(`The bill was ${bill}, the tip was ${value = bill * .15} and the total was ${value + bill}`);
// }
    bill >= 50 && bill <= 300 ?
    console.log(`The bill was ${bill}, the tip was ${value = bill * .15} and the total was ${value + bill}`)
    : console.log(`The bill was ${bill}, the tip was ${value = bill * .2} and the total was ${value + bill}`);
