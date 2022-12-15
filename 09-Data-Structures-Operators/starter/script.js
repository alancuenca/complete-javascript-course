'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery({ starterIndex, mainIndex, time = '20', address }) {
    // console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    //console.log(mainIngredient);
    //console.log(otherIngredients);
  },

};

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
// console.log(rest);
rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23).set(true, 'We are open').set(false, 'we are closed')
// console.log(rest.get('name'));
// console.log(rest.get(true));
const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')))

rest.set(document.querySelector('hi'), 'Heading')

const [a, , b, ...other] = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(a, b, other);



// const entries = Object.values(restaurant.openingHours);
// console.log(entries);
// this returns separate arrays of the entries

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`)
// }

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// console.log(restaurant.openingHours.mon?.open);

const users = [{ name: 'jonas', email: 'email@google.com' }];
// console.log(users[0]?.name ?? 'User array empty');

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach')

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sol, 21',
  mainIndex: 2,
  starterIndex: 2,
})

restaurant.orderDelivery({
  address: 'Via del Sol, 21',
  mainIndex: 2,
  starterIndex: 2,
})




// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags
// } = restaurant;

// console.log(restaurantName, hours, tags);

// const {
//   menu = [],
//   starterMenu: starters = []
// } = restaurant

// console.log(menu, starters);

// const { fri } = openingHours
// console.log(fri); // 11  23
// restaurant.numGuests = 0
// const guests = restaurant.numGuests || 10
// console.log(guests);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// }

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Gio'
// }

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;
// console.log(rest1.numGuests);
// console.log(rest2.numGuests);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const goal = Object.entries(game.scored)
// console.log(goal);

for (const [key, value] of goal) {
  // console.log(`Goal ${+key + 1}: ${value}`);
}

const odds = Object.values(game.odds)
// console.log(odds);

let sum = 0
for (let i = 0; i < odds.length; i++) {
  // console.log(sum += odds[i] / odds.length)
}

// const odd = Object.entries(game)
// console.log(odd);

// for (const [] of odd) {
//   console.log(`${} ${}`);
// }
for (const [team, odd] of Object.entries(game.odds)) {
  // console.log(team, odd);
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
  // console.log(`Odd of ${teamStr} ${odd}`);
}


const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
// console.log(scorers);
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// }

// printGoals(...game.scored)


// const [players1, players2] = game.players
// const [gk, ...fieldPlayers] = players1
// console.log(players1);
// console.log(players2);
// console.log(gk, fieldPlayers);

// const allPlayers = [...players1, ...players2]
// console.log(allPlayers);
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
// console.log(players1Final);

// const { odds: { team1, x: draw, team2 } } = game;

// team1 < team2 && console.log(`Team 1 is more likely to win`);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

// for (const [i, el] of menu.entries()) console.log(`${i}: ${el}`);


const question = new Map([
  ['question', 'What is the best programming language ?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'try again']
]);
// console.log(question);

for (const [key, value] of question) {
  if (typeof key === 'number') { }
  // console.log(`answer ${key}: ${value} `);
}
const answer = 3;
// console.log(answer);
// console.log(question.get(question.get('correct') === answer))

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
// gameEvents.delete(64)
// console.log(gameEvents);

// const events = [...new Set(gameEvents.values())]
// console.log(events);

// const average = [...gameEvents.keys()].pop()

// let firstHalf = ''
// let secondHalf = ''
// let minutes = 0
// for (const [time, events] of gameEvents) {
//   time < 45 ? firstHalf += time+":" + events + "  " : secondHalf += time+":" + events + "  ";;
// }
// console.log(`First half events ${firstHalf}`);
// console.log(`Second half events ${secondHalf}`);
// console.log(`An event happened every ${average / gameEvents.size} minutes`);

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === 'B' || s === "E")
//     console.log('You got the middle seat');
//   else console.log('You got lucky');
// }
// // B and E are the middle seat
// checkMiddleSeat('11B')
// checkMiddleSeat('23C')
// console.log();

// const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
// console.log(p.replaceAll('dog', 'monkey'));

// let word = prompt('Enter a word you want to camelCase', 'camel_case');

// const camelCase = function (word) {
// }

//const names = namez.split(' ');
const capitalizeName = function (namez) {
  namez = namez.split(' ')
  console.log(namez);
  const namesUpper = []
  for (const n of namez) {
    console.log(n, namez);
    //namesUpper.push(n[0].toUpperCase() + n.slice(1))
    //another solution
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
  }
  console.log(namesUpper); // ['Alan', 'Cuenca']
}


// capitalizeName('alan cuenca')

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// const button = document.querySelector('button');



// const camelCase = function (x) {
//   const text = x.split('\n'); // returns an array without new lines
//   console.log(text);
//   for (const [check, i] of text.entries()) {
//     const [first, second] = i.toLowerCase().trim().split('_')
//     let upper = second.replace(second[0], second[0].toUpperCase())
//     const output = first.concat(upper).padEnd(20);
//     console.log(`${output}${'✅'.repeat(check + 1)}`);
//   }
// };


// button.addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   camelCase(text);
// })

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
const getCode = str => str.slice(0, 3).toUpperCase()
const split = flights.split('+');
for (const flight of split) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(50);
  console.log(output);
}