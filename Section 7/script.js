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
// Lecture 100 (Destructuring)
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
console.log(age, retirement);