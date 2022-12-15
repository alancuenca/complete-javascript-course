'use strict';

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking);
// };

// createBooking('LH123')
// createBooking('LH123', 2)

// const flight = 'LH234';
// const jonas = {
//     name: 'Jonas Schmedtmann',
//     passport: 123456
// };

// const checkIn = function (flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;

//     if (passenger.passport === 123456) {
//         //alert('checked in')
//     } else {
//        // alert('wrong passport')
//     }
// }


// const newPassport = function (person) {
//     person.passport = Math.trunc(Math.random() * 10000000)
// }

// newPassport(jonas)
// checkIn(flight, jonas)
// console.log(flight, jonas);

// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase()
// };
// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// };

// // higher order function -> takes another function
// const transformer = function (str, fn) {
//     console.log(`original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);
//     console.log(`transformed by: ${fn.name}`);
// }

// transformer('Javascript is the best!', upperFirstWord)

// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey')
// greeterHey('Jonas');
// greeterHey('Steven')

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    booking: [],
    book(flightNum, name) {
        //console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.booking.push({ flight: `${this.iataCode}${flightNum}`, name })
    }
};

lufthansa.book(239, 'Alan'), lufthansa.book(300, 'Cotton');
const book = lufthansa.book;
book.call(lufthansa, 23, 'Joe');
//book.call(euroWings, 23, 'Jim')

const euroWings = {
    airline: 'Eurowings',
    iataCode: 'EU',
    booking: [],
    book() {

    }
};

book.call(euroWings, 223, 'Aaron')

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    booking: [],
};

book.call(swiss, 555, 'Mary');

const flightData = [588, 'George'];
book.apply(swiss, flightData)
//console.log(swiss);

// Bind

const bookEW = book.bind(euroWings);
bookEW(233, 'Steve')

// with event listeners


lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    this.planes++
    console.log(this.planes);
}
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

// partial application

const addTax = (rate, value) => value + value * rate;

const addVAT = addTax.bind(null, 0.23); // this sets the rate in stone

//console.log(addVAT(100))

const newAddVat = (rate) => (value) => value + value * rate;

const tax = newAddVat(.23)
    //console.log(tax(100));


    // Coding Challenge #1

    /*
    Let's build a simple poll app!

    A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

    Here are your tasks:

    1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
      1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
            What is your favourite programming language?
            0: JavaScript
            1: Python
            2: Rust
            3: C++
            (Write option number)

      1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
    2. Call this method whenever the user clicks the "Answer poll" button.
    3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
    4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

    HINT: Use many of the tools you learned about in this and the last section 😉

    BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

    BONUS TEST DATA 1: [5, 2, 3]
    BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

    GOOD LUCK 😀
    */

    // let i = [0, 0, 0, 0]
    // let j = i[1] + 1
    // let newQ = i.splice(1,1, j)
    // console.log(j,i);
    // let div = document.createElement('div')
    // document.body.appendChild(div)
    // div.classList.add('answer')
    // // let answer = div.innerHTML = poll.answers

    // const poll = {
    //     question: 'What is your favourite programming language?',
    //     options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    //     // This generates [0, 0, 0, 0]. More in the next section 😃
    //     answers: new Array(4).fill(0),
    //     registerNewAnswer(value) {



    //         value = prompt(
    //             'What is your favourite programming language?',
    //             '0: JavaScript, 1: Python, 2: Rust, 3: C++'
    //         );
    //         let x = this.options
    //         let y = this.answers
    //         let sum = y[value] + 1
    //         console.log(x, poll.answers);
    //         if (value <= 3 && value >= 0) {
    //             y.splice(value, 1, sum)
    //         } else {
    //             window.alert('Please enter 0, 1, 2, or 3')
    //         } div.innerHTML = this.answers;
    //     },
    // };
    // //poll.registerNewAnswer()

    // document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))


    // const poll = {
    //     question: 'What is your favorite programming language?',
    //     options: ['0: Javascrpt', '1: Python', '2: Rust', '3: C++'],
    //     answers: new Array(4).fill(0),
    //     registerNewAnswer() {
    //         const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
    //         console.log(answer);
    //         typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
    //         //console.log(this.answers);
    //         this.displayResults();
    //         this.displayResults('string')
    //     },
    //     displayResults(type = 'array') {
    //         if (type == 'array') {
    //             console.log(this.answers);
    //         } else if (type === 'string') {
    //             console.log(`Poll results are ${this.answers.join(', ')}`);
    //         }
    //     }
    // };

    // document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))
    // // poll.registerNewAnswer()
    // poll.displayResults.call({answers: [5, 3, 3]}) // call substitutes

    // const runOnce = function () {
    //     console.log('This will never run again');
    // };
    // runOnce();

    // const secureBooking = function () {
    //     let passengerCount = 0;

    //     return function () {
    //         passengerCount++;
    //         console.log(`${passengerCount} passengers`);
    //     }
    // };

    // const booker = secureBooking();
    // console.dir(booker);
    // booker(); // 1 passengers
    // booker(); // 2 passengers
    // booker(); // 3 passengers

    // let f;

    // const g = function () {
    //     const a = 23;
    //     f = function () {
    //         console.log(a * 2);
    //     }
    // }

    // g();
    // console.log(f);
    // f();

    // const boardPassengers = function (n, wait) {
    //     const perGroup = n / 3;
    //     setTimeout(function () {
    //         console.log(`we are now boarding all ${n} passengers`);
    //         console.log(`there are 3 groups, each with ${perGroup} passengers`);
    //     }, wait * 1000)
    //     console.log(`will start boarding in ${wait} seconds`)
    // }

    // boardPassengers(180, 3)
    (function () {
        const header = document.querySelector('h1');
        header.style.color = 'red';

        document.querySelector('body').addEventListener('click', function () {
            header.style.color = 'blue';
        });
    })();