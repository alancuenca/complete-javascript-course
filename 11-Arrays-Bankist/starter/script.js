'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// currencies.forEach(function (value, key, map) {
// console.log(`key: ${key}, value: ${value}, map: ${map}`);
// })

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
<div class="movements__row">
<div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
<div class="movements__value">${mov}€</div>
</div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html)
  })
};

const euroToUsd = 1.1;

const movementsUSD = movements.map((move) => move * euroToUsd);

// console.log(movementsUSD);

const movDescription = movements.map((mov, i) =>
  `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
)

// console.log(movDescription);

const userName = function (acc) {
  acc.forEach(accs => accs.username = accs.owner.toLowerCase().split(' ').map(initial => initial[0]).join('')
  )
};
userName(accounts)

const updateUI = function (currentAccount) {
  displayMovements(currentAccount.movements);
  calcDisplayBalance(currentAccount);
  calcDisplaySummary(currentAccount);
}
//USER LOGIN
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault()
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
  if (currentAccount?.pin === Number(inputLoginPin.value)){
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    updateUI(currentAccount);
  };
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(acc => acc.username === inputTransferTo.value.toLowerCase());
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0
    && receiverAccount
    && currentAccount.balance >= amount
    && receiverAccount?.username !== currentAccount.username
  ) {
    // transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(accounts.indexOf(currentAccount));
  if (currentAccount.username === inputCloseUsername.value && currentAccount.pin === Number(inputClosePin.value)) {
    accounts.splice(accounts.indexOf(currentAccount), 1);
    containerApp.style.opacity = 0;
  };
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(move => move >= amount * .1 )) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
})

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0)
  labelBalance.textContent = `${acc.balance}€`
};

const calcDisplaySummary = function (acc) {
  const income = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}€`

  const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements.filter(mov => mov > 0).map(deposit => deposit * acc.interestRate / 100).filter((interest) => interest >= 1).reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest}€`
};

const deposits = movements.filter(mov => mov > 0);

const withdrawals = movements.filter(mov => mov < 0);

const max = movements.reduce((acc, mov) => acc > mov ? acc : mov)

const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * euroToUsd).reduce((acc, cur) => acc + cur, 0)

const accountMovements = accounts.flatMap(acc => acc.movements).reduce((acc, cur) => acc + cur, 0);

const numbers2 = [4, 2, 5, 1, 3];
numbers2.sort((a, b) => b - a);
// console.log(numbers2);
// const account = accounts.find(acc => acc.owner === 'Jessica Davis')

const deposit = mov => mov > 0;

labelBalance.addEventListener('click', function () {
  const movx = Array.from(document.querySelectorAll('.movements__value'), el => Number(el.textContent.replace('€', '')));

  console.log(movx);
})


const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, mov) => sum + mov, 0);

// console.log(bankDepositSum);

// const numDeposits1000 = accounts.flatMap(acc => acc.movements).reduce((prev, cur) => cur >= 1000 ? prev + 1 : prev , 0);
// console.log(numDeposits1000);


// const sums = accounts.flatMap(acc => acc.movements).reduce((sum, cur) => {
//   cur > 0 ? sum.deposits += cur : sum.withdrawals += cur;
//   return sum;
// }, { deposits: 0, withdrawals: 0 })

// console.log(sums);

// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);
//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'in', 'with'];
//   const titleCase = title
//     .toLowerCase()
//     .split(' ').map(word => exceptions.includes(word) ? word : word[0]
//       .toUpperCase() + word.slice(1))
//   .join(' ')
//   return capitalize(titleCase)
// }
// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title'));
// console.log(convertTitleCase('And this is a very long title and is a LONG title'));


/*
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
*/


// const okFood = function (food) {

//   const tenPer = food.curFood > (food.recFood * 0.9)
//   let owner = food.owners.length > 1 ? food.owners.join(' and ') : food.owners;
//   console.log(food, food.recFood * 0.9);
//   if (food.curFood > (food.recFood * 1.10)) {
//     console.log(`${owner}'s dog is eating too much.`);
//   } else if (food.curFood < (food.recFood * 0.9)) {
//     console.log(`${owner}'s dog is eating too little.`);
//   } else {
//     console.log(`${owner}'s dog is eating correct amount.`);
//   };
// };


// let sarah;

// const findSarah = function (dogs) {
//   sarah = dogs.find(x => x.owners.includes('Sarah'))
// };

// let ownersEatTooMuch = [];
// let ownersEatTooLittle = [];
// const checkAllDogs = function (food) {
//   for (const i in food) {
//     console.log(food[i].owners);
//     const current = food[i].curFood
//     const tenPer = current * .1
//     console.log((current + tenPer));
//     if (food[i].curFood > (food[i].recFood * 1.10)) {
//       ownersEatTooMuch.push(food[i].owners)
//     } else if (food[i].curFood < (food[i].recFood * 0.9)) {
//       ownersEatTooLittle.push(food[i].owners)
//     } else {
//       console.log('ok');
//     };
//   }
// };
// console.log(ownersEatTooLittle);

// const dogFood = function (dogs) {
//   dogs.forEach(el => el.recFood = el.weight ** 0.75 * 28);
//   findSarah(dogs)
//   okFood(sarah);
//   //console.log(...dogs);
//   // okFood(dogs)
//   checkAllDogs(dogs)
//   }


const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];
// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property.Do NOT create a new array, simply loop over the array.Forumla: recommendedFood = weight ** 0.75 * 28.(The result is in grams of food, and the weight needs to be in kg)
// dogFood(dogs)
dogs.forEach(el => el.recFood = Math.trunc(el.weight ** 0.75 * 28));
console.log(dogs);
//2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'}`);
//3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

//4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`);

//5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
console.log(dogs.some(dog => dog.curFood === dog.recFood));

//6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
//current > (recommended * 0.90) && current < (recommended * 1.10)
const checkEatingOkay = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
console.log(dogs.some(checkEatingOkay));

//7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
console.log(dogs.filter(checkEatingOkay));

//8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood)
console.log(dogsSorted);