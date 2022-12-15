'use strict';

// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//     Person.call(this, firstName, birthYear)
//     this.course = course;
// };

// Student.prototype = Object.create(Person.prototype)

// Student.prototype.introduce = function () {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Comp Sci')
// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// Prototypes


// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

// console.log(jonas);
// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);

// console.log(Person.prototype.constructor);

// const arr = [3, 6, 7, 7, 8, 8, 9, 0]
// console.log(arr);

// Array.prototype.unique = function () {
//    return [...new Set(this)]
// }

// console.log(arr.unique());


// const Car = function (speed, make) {
//     this.speed = speed;
//     this.make = make
// };

// Car.prototype.accel = function () {
//     this.speed += 10
//     console.log(`${this.make} is going ${this.speed}`)
// };

// Car.prototype.brake = function () {
//     this.speed -= 5
//     console.log(`${this.make} is going ${this.speed}`)
// };

// const honda = new Car(100, 'Honda')
// const ford = new Car(100, 'Ford')
// ford.accel()
// ford.accel()
// ford.accel()

// honda.brake()
// honda.brake()
// honda.brake()

// class PersonCl {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     }
//     greet() {
//         console.log(`Hello ${this.firstName}`);
//     }
//     get age() {
//         return 2037 - this.birthYear
//     }
//     set fullName(name) {
//         console.log(name);
//         if (name.includes(' ')) this._fullName = name;
//         else alert (`${name} is not a full name`)
//     }
//     get fullName() {
//         return this._fullName;
//     }
// }
// // // new object stored in 'jessica'
// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica.age);
// console.log(jessica);

// jessica.calcAge()
// jessica.greet()

// const account = {
//     owner: 'Jonas',
//     movements: [200, 300, 400, 500],

//     get latest() {
//         return this.movements.slice(-1).pop();
//     },
//     set latest(mov) {
//         this.movements.push(mov)
//     }
// }

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     },
//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// }

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.birthYear = 2002;
// steven.calcAge()

// const sarah = Object.create(PersonProto);
// sarah.init("Sarah", 1999)
// sarah.calcAge()


// class Car {
//     constructor(make, speed) {
//         this.speed = speed;
//         this.make = make
//     }
//     get speedUS() {
//         return this.speed / 1.6;
//     }
//     set speedUS(mph) {
//         this.speed = mph * 1.6
//     }
//     get accel() {
//         this.speed += 10
//         console.log(`${this.make} is going ${this.speed}`);
//     }
// };

// const Car = function (make, speed) {
//     this.speed = speed;
//     this.make = make
// };
// Car.prototype.accel = function () {
//     this.speed += 10
//     console.log(`${this.make} is going ${this.speed}`);
// };
// Car.prototype.brake = function () {
//     this.speed -= 10
//     console.log(`${this.make} is going ${this.speed}`);
// }
// const EV = function (make, speed, charge) {
//     Car.call(this, make, speed);
//     this.charge = charge
// }
// EV.prototype = Object.create(Car.prototype);

// /**
//  * @param {number} chargeTo the number
//  */
// EV.prototype.chargeBattery = function (chargeTo) {
//     this.charge = chargeTo
//     console.log(`Tesla is now charged to ${this.charge}%`);
// }
// EV.prototype.accelerate = function () {
//     this.speed += 20;
//     this.charge -= 1;
//     console.log(`Tesla is going ${this.speed} mph and has a charge of ${this.charge}%`);
// }
// EV.prototype.brake = function () {
//     this.speed -= 20;
//     this.charge += 1;
//     console.log(`Tesla is going ${this.speed} mph and has a charge of ${this.charge}%`);
// };


// const tesla = new EV('Tesla', 60, 23)
// console.dir(tesla);
// tesla.accelerate();
// tesla.accelerate();
// tesla.brake();
// tesla.brake();
// tesla.chargeBattery(90)
// const ford = new Car('Ford', 100);

// console.log(ford.speedUS)
// ford.speedUS = 50
// console.log(ford)
// ford.accel
// ford.accel

// class PersonCl {
//     constructor(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
//     get calcAge() {
//         console.log(2037 - this.birthYear);
//     }
// };

// class StudentCl {
//     constructor() {

//     }
// }

// class PersonCl {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     }
//     greet() {
//         console.log(`Hello ${this.firstName}`);
//     }
//     get age() {
//         return 2037 - this.birthYear
//     }
//     set fullName(name) {
//         console.log(name);
//         if (name.includes(' ')) this._fullName = name;
//         else alert (`${name} is not a full name`)
//     }
//     get fullName() {
//         return this._fullName;
//     }
//     static hey() {
//         console.log('hey there');
//     }
// };
// class StudentCl extends PersonCl {
//     constructor(fullName, birthYear, course) {
//         // Always needs to happen first or we can't access this keyword
//         super(fullName, birthYear);
//         this.course = course
//     }
//     introduce() {
//         console.log(`My name is ${this.fullName} and I study ${this.course}`);
//     }
// };

// const martha = new StudentCl('Martha Jones', 2012, 'Comp Sci')
// martha.introduce();
// martha.calcAge();

// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     },
//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// };

// const steven = Object.create(PersonProto);
// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//     PersonProto.init.call(this, firstName, birthYear);
//     this.course = course;
// };
// StudentProto.introduce = function () {
//     console.log(`My name is ${this.firstName} and I study ${this.course}.`);
// }

// const jay = Object.create(StudentProto)
// jay.init('Jay', 2010, 'Comp Sci')

// console.dir(steven)
// console.dir(PersonProto)
// console.dir(jay)
// jay.introduce();


// 1 punblic fields
// 2 private fields
// 3 public methods
// 4 private methods

// class Account {
//     //1 public fields (instances)
//     local = navigator.language;

//     // 2 private fields
//     #movements = [];
//     #pin;
//     constructor(owner, currency, pin) {
//         this.owner = owner;
//         this.currency = currency;
//         // protected property
//         this.#pin = pin;
//         // this._movements = [];
//         // this.locale = navigator.language;
//         console.log(`Thanks for opening an account, ${this.owner}`);
//     }
//     // 3 public methods
//     //  Public interface
//     getMovements() {
//         return this.#movements;
//     }
//     deposite(val) {
//         this.#movements.push(val);
//         // console.log(this.#movements);
//         return this;
//     }
//     withdraw(val) {
//         this.deposite(-val);
//         return this;
//     }
//     requestLoan(val) {
//         // if (this.#approvedLoan(val)) {
//         if (this._approvedLoan(val)) {
//             this.deposite(val);
//             console.log(`Loan approved of ${val}`);
//             return this;
//         }
//     }
//     // 4 private methods
//     // #approvedLoan(val) {
//     _approvedLoan(val) {
//         return true;
//     }

// };

// const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1.deposite(250);
// acc1.withdraw(200);
// acc1.requestLoan(100)
// console.log(acc1);
// console.log(acc1.getMovements());
// // console.log(acc1._approvedLoan);

// class CarCl {
//     constructor(make, speed) {
//         this.speed = speed;
//         this.make = make
//     }
//     brake() {
//         this.speed -= 20;
//         console.log(`${this.make} is going ${this.speed} mph.`);
//         return this
//     }
// };

// class EVCl extends CarCl {
//     #charge;
//     constructor(make, speed, charge) {
//         super(make, speed);
//         this.#charge = charge
//     }
//     accelerate() {
//         this.speed += 20;
//         this.#charge --;
//         console.log(`Tesla is going ${this.speed} mph and has a charge of ${this.#charge}%`);
//         return this
//     }

//     /**
//      * @param {number} chargeTo the number
//      */
//     chargeBattery(chargeTo) {
//         this.#charge = chargeTo
//         console.log(`Tesla is now charged to ${this.#charge}%`);
//         return this;
//     }
// };


// const tesla = new EVCl('Tesla', 120, 23)
// console.dir(tesla);
// // tesla.accelerate();
// // tesla.accelerate();
// // tesla.brake();
// // tesla.brake();
// // tesla.chargeBattery(90)
// // const ford = new CarCl('Ford', 100);
// tesla.accelerate().brake().brake().accelerate().chargeBattery(60).accelerate()