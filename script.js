'use strict';

const somebody = {
    firstName: 'John',
    LastName: 'doe',
    birthYear: 1995,

    calcAge() {
        return 2022 - this.birthYear;
    }
}

console.log(somebody);
console.log(somebody.calcAge());

// ES5 { function Constructor}
const Person5 = function (firstName, LastName, birthYear) {
    this.firstName = firstName;
    this.LastName = LastName;
    this.birthYear = birthYear;
}

Person5.prototype.CalcAge = function () {
    return 2022 - this.birthYear;
}
// STATIIC METHODS
Person5.hello = function () {
    console.log('hello there 👋');
}


const Player5 = function (firstName, LastName, birthYear, team, jersyNo) {
    Person5.call(this, firstName, LastName, birthYear)
    this.team = team;
    this.jersyNo = jersyNo;
}

Player5.prototype.introduce = function () {
    console.log(`I'm ${this.firstName} and I plays for ${this.team}`);
}

const ismail = new Person5('jagunmolu', 'Adam', 1970);
const cardi = new Player5('cardi', 'B', 1991, 'Barca', 10);

console.log(ismail)
console.log(ismail.CalcAge());
console.log(cardi);
// console.log(Cardi.CalcAge())
console.log(cardi.introduce());
console.log(cardi)


// const someone = {
//     firstName: 'Dan',
//     LastName: 'Juma',
//     birthYear: 1995,

//     getAward() {
//         return 2022 - this.birthYear;
//     }
// }

// console.log(someone);
// console.log(someone.getAward());


// const Person5 = function (firstName, lastName, birthYear) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthYear = birthYear;
// }



// const Engineer = function (firstName, lastName, birthYear, achievement) {
//     Person5.call(this, firstName, lastName, birthYear)
//     this.birthYear = birthYear;
//     this.firstName = firstName;
//     this.achievement = achievement;
// }

// Engineer.prototype.getAward = function () {
//     return 2022 - this.birthYear;
// }

// // Engineer.prototype.introduce = function () {
// //     console.log(`I'm ${this.firstName} i ${this.achievement} many awards `)
// // }

// const kamal = new Engineer('Hassan', 'Damilola', 1990, 'golden cup');
// const emmy = new Person5('Bola', 'Gee', 1992, 'awards');

// console.log(kamal)
// console.log(kamal.getAward())
// console.log(emmy);
// // console.log(emmy.introduce())
// console.log(emmy)

// ES6 {function Construction}
// class Person {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear
//     }

//     CalcAge() {
//         return 2022 - this.birthYear;
//     }

//     set setFullName(realFullName) {
//         if (realFullName.includes(' ')) {
//             return (realFullName = this.fullName);
//         } else {
//             console.log(`${realFullName} have no initial`)
//         }
//     }

//     get getAge() {
//         return 2022 - this.birthYear;
//     }

//     static hello() {
//         console.log(this);
//         console.log('Hello everyone 👋');
//     }
// }

// const burna = new Person('Burna', 1982);
// const wizzy = new Person('Wizkid', 1990);
// console.log(burna);
// console.log(burna.CalcAge());

// burna.setFullName = 'Burna Boy';
// wizzy.setFullName = 'Wizkid';
// Person.hello();
// console.log(wizzy.getAge);
// console.log(burna.fullName);



// class Player extends Person {
//     constructor(fullName, birthYear, team, jersyNo,) {
//         // First things is the parent-Class params
//         super(fullName, birthYear);
//         this.team = team;
//         this.jersyNo = jersyNo;
//     }

//     introduce() {
//         console.log(`I am ${this.fullName} with age ${2022 - this.birthYear} years , I played for ${this.team} with the jersey number ${this.jersyNo}`)
//     }
// }
// const ronaldo = new Player('Christiano Ronaldo', 1985, 'Man United', 7);
// console.log(ronaldo.CalcAge())
// ronaldo.introduce();


// class Artist extends Person {
//     constructor(fullName, birthYear, songs, awards) {
//         super(fullName, birthYear);
//         this.song = songs;
//         this.awards = awards;
//     }

//     introduce() {
//         console.log(`I am ${this.fullName},I am ${2022 - this.birthYear} years, I sang ${this.song} and i received ${this.awards} awards`)
//     }

//     getAward() {
//         this.getAward = 2022 - this.birthYear
//         if (this.getAward >= 1998) {
//             console.log(`you will be nominate when you are above`)
//         } else {
//             console.log(`Enjoy yourself`)
//         }

//     }

// }
// const Wizkid = new Artist('Adedeji Ibrahim Balogun', 1990, 'made In Lagos', 7);
// console.log(Wizkid.CalcAge());
// Wizkid.introduce()





