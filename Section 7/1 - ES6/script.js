/**
 * Lecture 95 (Declaration Let and Const)
 *  ES5 (Function scoped)
var nameES5 = 'Jon Durao';
var ageES5 = 25;
// Mutable
nameES5 = 'Jon Durao Moreno';

console.log(nameES5);

// ES6 (Block scoped)
// Const -> unmutable value
const nameES6 = 'Jon Durao';
// let -> mutable value, like VAR in ES5
let ageES6 = 25;
// Error, la constante no puede cambiar
// nameES6 = 'Jon Durao Moreno';
console.log(nameES6);

// ES5, Function Scoped
function driverLicence5(passedTest) {
    if (passedTest){
        var firstName = 'DriverES5';
        var yearBirth = 1992;
    }

    console.log(firstName + " was born in " + yearBirth);
}
// Variables not recognized here, only visible in the same function in which they were declared
// console.log(firstName + " was born in " + yearBirth);

driverLicence5(true);

// Overwrites the var already created
var j = 23;
for (var j = 0; j < 5; j++){
    console.log(j);
}
console.log(j);

// ES6, Function Scoped
function driverLicence6(passedTest) {
    // ReferenceError in ES6, undefined in ES5 (Temporal dead-zone)
    // console.log(firstName + " was born in " + yearBirth);

    // Correct declaration
    let firstName;
    const yearBirth = 1992;

    if (passedTest){
        //let firstName = 'Driver';
        //const yearBirth = 1992;
        firstName = 'DriverES6';
    }
    // Variables not recognized here, only visible in the same block of code in which they were declared
    console.log(firstName + " was born in " + yearBirth);
}

driverLicence6(true);

// creates a new let for the block where defined
let i = 23;
for (let i = 0; i < 5; i++){
    console.log(i);
}
console.log(i);
 */
/**
 * Lecture 96 (Blocks and IIFEs[Immediately Invoked Function Expression] in ES6) for data privacy
 *
// IIFEin ES6
// Block of code (simplest way)
{
    const a = 1;
    let b = 2;
    var c = 3;

    console.log(a + b);
}

console.log(c);
// values not accessible for this one
// console.log(a + b);

// IIFE ES5
(function () {
    var c = 3;
})();

// values not accessible for this one
// console.log(c);
 */
/**
 * Lecture 97 (Strings ES6)

let firstName = 'Jon';
let lastName = 'Durao';
const yearBirth = 1992;

function calcAge(year) {
    return Date() - year;
}

// Template Literals!!!!
// ES5
console.log('This is ' + firstName + ' ' + lastName + ' born in ' + yearBirth + ', age ' + calcAge(yearBirth));
// ES6
console.log(`This is ${firstName} ${lastName} born in ${yearBirth}, age ${calcAge(yearBirth)}`);

const n = `${firstName} ${lastName}`;
// returns bool if string ends/starts with the string (case-sensitive)
console.log(n.startsWith('J'));
console.log(n.startsWith('j'));
console.log(n.endsWith('o'));
console.log(n.endsWith('O'));
// returns bool if string contains the string (case-sensitive)
console.log(n.includes('Jon'));
// Repeat string a number of times
console.log(`${firstName} `.repeat(5));*/
/**
 * Lecture 98 (Arrow Functions)
 *
const years = [1992, 1996, 2002];

// ES5
var agesES5 = years.map(function (el) {
    return 2018 - el;
});

console.log(agesES5);

// ES6
let agesES6 = years.map(el => 2018 - el);
console.log(agesES6);

agesES6 = years.map((el, index) => `Age element ${index + 1}: ${2018 - el}`);
console.log(agesES6);

agesES6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    return `Age element ${index}: ${now - el}`
});
console.log(agesES6);*/
/**
 * Lecture 99 (Lexical this, arrow function)
// ES5
var boxES5 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        // Guarda el this de la funcion
        var self = this;
        document.querySelector('.green').addEventListener('click', function () {
            // this apunta al objeto global Window
           // var str = 'This box number ' + this.position + ' is ' + this.color;
           var str = 'This box number ' + self.position + ' is ' + self.color;
           alert(str);
        });
    }
};

//boxES5.clickMe();

// ES6
const boxES6 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click',
        () => {
            let str6 = 'This box number ' + this.position + ' is ' + this.color;
            alert(str6);
        });
    }
};

boxES6.clickMe();

// ES66
const boxES66 = {
    color: 'green',
    position: 1,
    // Comparte el this global por lo que no tiene color o position
    clickMe: () => {
        document.querySelector('.green').addEventListener('click',
            () => {
                let str6 = 'This box number ' + this.position + ' is ' + this.color;
                alert(str6);
            });
    }
};

//boxES66.clickMe();

function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriendsES5 = function (friends) {
    var arr = friends.map(function (value) {
        return this.name + ' is friends with ' + value;
    }.bind(this));

    console.log(arr);
};

// ES6
Person.prototype.myFriendsES6 = function (friends) {
    let arr = friends.map((value) => `${this.name} is friends with ${value}`);

    console.log(arr);
};

var friends = ['Jon', 'Luis', 'Manu'];
new Person('Jon').myFriendsES6(friends); */
/**
 * Lecture 100 (Destructuring)
// ES5
var Jon = ['Jon', 25];
var name5 = Jon[0];
var age5 = Jon[1];

// ES6
const [name6, age6] = ['Jon', 25];
console.log(name6, age6);

const obj = {
    fN: 'Jon',
    lN: 'Durao'
};

// Mismo nombre que en el objeto
const  {fN, lN} = obj;
console.log(fN, lN);

const  {fN: a, lN: b} = obj;
console.log(a, b);

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 70 - age];
}

const [age, retirement] = calcAgeRetirement(1992);
console.log(age, retirement);*/
/**
 * Lecture 101 (Arrays in ES6)
const boxes = document.querySelectorAll('.box');

// ES5
var boxesES5 = Array.prototype.slice.call(boxes);
boxesES5.forEach(function (value) {
    //value.style.backgroundColor = 'dodgerblue';
});

// ES6
const boxesES6 = Array.from(boxes);
boxesES6.forEach(value => value.style.backgroundColor = 'dodgerblue');

// ES5 loop over array
for (var i = 0; i < boxesES6.length; i++){
    if (boxesES6[i].className === 'box blue'){
        continue;
    }

    //boxesES6[i].textContent = 'I changed!'
}

// ES6 loop
for (const cur of boxesES6){
    if (cur.className.includes('blue'))
        continue;

    cur.textContent = 'I changed!';
}

// ES5
var ages = [25, 21, 16];

var full = ages.map(function (value) {
   return value >= 18;
});

console.log(full);
console.log(full.indexOf(false));
console.log(ages[full.indexOf(false)]);

// ES6
console.log(ages.findIndex(value => value <= 18));
console.log(ages.find(value => value <= 18));*/
/**
 * Lecture 102 (Spread operator)

function addAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addAges(1, 2, 3, 4);
console.log(sum1);

// ES5
var ages = [1, 2, 3, 5];
// apply uses elements of the array as arguments in the call
var sum2 = addAges.apply(null, ages);
console.log(sum2);

// ES6
// ... expands an array into its components
const sum3 = addAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familyMiller, 'Test', ...familySmith];
console.log(bigFamily);

const elementBoxes = document.querySelectorAll('.box');
const elementHeading = document.querySelector('h1');

const allElements = [...elementBoxes, elementHeading];
console.log(allElements);

allElements.forEach(value => {
    value.style.backgroundColor = 'dodgerblue';
    value.style.color = 'purple';
});*/
/**
 * Lecture 103 (REST Parameters of function)
// transform multiple single values into an array

// ES5
function isFullAgeES5() {
    console.log(arguments);

    var argsArr = Array.prototype.slice.call(arguments);
    console.log(argsArr);

    argsArr.forEach(function (value) {
       console.log((2018 - value) >= 18);
    });
}
isFullAgeES5(1992, 1996, 2002, 2012);

// ES6
function isFullAgeES6(...years) {
    console.log(years);
    years.forEach(value => console.log((2018 - value) >= 18));
}

isFullAgeES6(1992, 1996, 2002, 2012);

// ES55
function isFullAgeES55(limit) {
    // Excluimos el primer argumento que seria limit
    var argsArr = Array.prototype.slice.call(arguments, 1);
    console.log(argsArr);

    argsArr.forEach(function (value) {
        console.log((2018 - value) >= limit);
    });
}
isFullAgeES55(21, 1992, 1998, 2002, 2012);

// ES66
function isFullAgeES66(limit, ...years) {
    console.log(years);
    years.forEach(value => console.log((2018 - value) >= limit));
}

isFullAgeES66(21, 1992, 1998, 2002, 2012);*/
/**
 * Lecture 104 (Default Parameters)

// ES5
function personSmithES5(nombre, nacimiento, apellido, nacionalidad) {
    this.nombre = (nombre === undefined) ? 'John' : nombre;
    this.nacimiento = (nacimiento === undefined) ? 0 : nacimiento;
    this.apellido = (apellido === undefined) ? 'Doe' : apellido;
    this.nacionalidad = (nacionalidad === undefined) ? 'World' : nacionalidad;
}

var jon = new personSmithES5('Jon');
console.log(jon);

// ES6
function personSmithES6(nombre = 'John', nacimiento = 1, apellido = 'Doe', nacionalidad='World') {
    this.nombre = nombre;
    this.nacimiento = nacimiento;
    this.apellido = apellido;
    this.nacionalidad = nacionalidad;
}

var jon6 = new personSmithES6('Jon');
console.log(jon6);*/
/**
 * Lecture 105 (Maps)
const question = new Map();
question.set('question', 'What is love?');
question.set(1, 'A Feeling');
question.set(2, 'A Chemical Reaction');
question.set(3, 'I\'m not sure');
question.set(4, 'yaba yaba');
question.set('correct', 1);
question.set(true, 'You are right!!!');
question.set(false, 'Really?');

console.log(question);

console.log(question.get('question'));

console.log(question.size);

if (question.has(4))
    question.delete(4);

console.log(question.size);

question.forEach((value, key) => console.log(`This is the value ${key}, and it's set to \'${value}\'`));

console.log('----------------------------------------------------------');

console.log(question.get('question'));
for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number'){
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));

console.log(question.get(ans === question.get('correct')));

console.log('----------------------------------------------------------');

question.clear();
console.log(question.size);*/
/**
 * Lecture 106 (Classes)
// Make inheritance easier

// ES5
var PersonES5 = function (name, year, job) {
    this.name = name;
    this.year = year;
    this.job = job;
};

PersonES5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.year;
    console.log(age);
};

var JonES5 = new PersonES5('Jon', 1992, 'Programmer');
JonES5.calculateAge();

// ES6
// Not hoisted (Only used after their declaration)
// Cannot add properties to classes
class PersonES6 {
    constructor (name, year, job){
        this.name = name;
        this.year = year;
        this.job = job;
    }

    calculateAge(){
        const age = PersonES6.getYear()  - this.year;
        console.log(age);
    }

    static getYear(){
        return new Date().getFullYear();
    }

    static greeting(){
        console.log('Hello there');
    }
}

let JonES6 = new PersonES6('Jon', 1992, 'Super Programmer');
PersonES6.greeting();
JonES6.calculateAge();*/
/**
 * Lecture 107 (Classes with Subclasses)
// ES5
var PersonES5 = function (name, year, job) {
    this.name = name;
    this.year = year;
    this.job = job;
};

PersonES5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.year;
    console.log(age);
};

var AthleteES5 = function (name, year,job, olympicGames, medals) {
      PersonES5.call(this, name, year, job);
      this.olympicGames = olympicGames;
      this.medals = medals;
};

// Takes the prototype of  PersonES5
AthleteES5.prototype = Object.create(PersonES5.prototype);

AthleteES5.prototype.wonMedal = function(){
    if (this.medals > 0)
        console.log("Winner!!!!");
};

var JonES5 = new AthleteES5('Jon', 1992, 'Programmer', 4, 2);
JonES5.calculateAge();
JonES5.wonMedal();

// ES6
class PersonES6 {
    constructor (name, year, job){
        this.name = name;
        this.year = year;
        this.job = job;
    }

    calculateAge(){
        const age = new Date().getFullYear()  - this.year;
        console.log(age);
    }
};

class AthleteES6 extends PersonES6 {
    constructor (name, year, job, olympicGames, medals){
        super(name, year, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal(){
        if (this.medals > 0){
            console.log('Winner ES6!!!!');
        }
    }
}

const JonES6 = new AthleteES6('Jon6', 1992, 'Athlete', 6, 6);
JonES6.calculateAge();
JonES6.wonMedal();*/