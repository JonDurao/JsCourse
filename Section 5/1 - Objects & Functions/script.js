/**
 * Lecture 53 (Function constructor)
var jon = {
    name: 'Jon',
    yearBirth: 1992,
    job: 'Programmer'
};

var Person = function (name, yearBirth, job) {
    this.name = name;
    this.yearBirth = yearBirth;
    this.job = job;
    this.calculateAge = function () {
        console.log(2018 - this.yearBirth);
    }
};

// Adds the function to all the objects of the type Person
Person.prototype.calculateAge = function () {
    console.log(2018 - this.yearBirth);
};

 // Adds the property to all the objects of the type Person
Person.prototype.lastName = 'Durao';

var jon = new Person('Jon', 1992, 'Programmer');
var luis = new Person('Luis', 1996, 'Student');

console.log(jon.lastName);
jon.calculateAge();
console.log(luis.lastName);
luis.calculateAge();

console.log(jon instanceof Person);
console.log(jon.hasOwnProperty('job'));
console.log(jon.hasOwnProperty('lastName'));

var x = [2,4,6];
console.info(x);
*/
/**
 * Lecture 54 (Object.Create)
var personProto = {
    calculateAge: function () {
        console.log(2018 - this.yearBirth);
    }};

var jon = Object.create(personProto);
jon.job = 'Programmer';
jon.name = 'Jon';
jon.yearBirth = 1992;

var luis = Object.create(personProto, { name: {value: 'Luis'},
                                        yearBirth: {value: 1996},
                                        job: {value: 'Student'}});
*/
/**
 * Objects vs Primitives
 * Primitive only the defined types (rest are objects)
 * Variables contained in primitives hold the data inside of the variable
 * Variables contained in objects don't hold the data per se, only a reference to the memory stack
 * Inner functions change an object (as it is a reference) but not primitives, it changes a copy, not the global one
 **/
/**
 * Lecture 55 (Objects vs Primitives)
// Primitives
var a = 23;
var b = a;

a = 46;
console.log(a);
console.log(b);

// Objects
var obj1 = {int1: 23};
var obj2 = obj1;

obj1.int1 = 46;
console.log(obj1.int1);
console.log(obj2.int1);

// Functions
var age = 26;
var obj = {
    name: 'Jon',
    city: 'Madrid'
};

function change(a, b) {
    a = 25;
    b.city = 'Berlin';
}

change(age, obj);
console.log(age);
console.log(obj.city);
*/
/**
 * Functions
 * - They are intances of type Object
 * - Behaves like any other Object
 * - Can be stored in a variable
 * - Can be passed as an argument
 * - Can be returned from another function
 */
/**
 * Lecture 56 (Callbacks. Functions as Arguments)
var years = [1992, 1996, 2002];

function arrayCalc(vector, fn) {
    var arrRes = [];

    for (var i=0; i<vector.length; i++){
        arrRes.push(fn(vector[i]));
    }

    return arrRes;
}

function calculateAge (el){
    return 2018 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el){
    if (el >= 18 && el <= 81)
        return Math.round(206.9 - (0.67 * el));
    else
        return -1;
}

// Callback function (calculateAge) because it will be called later in the flow
var ages = arrayCalc(years, calculateAge);
console.log(ages);
var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);
var fullHeartRates = arrayCalc(ages, maxHeartRate);
console.log(fullHeartRates);
*/
/**
 * Lecture 57 (Functions Returning Functions)
function interviewQuestion(job) {
    if (job === 'Designer'){
        return function (name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'Teacher') {
        return function (name) {
            console.log(name + ', what subject do you teach?');
        }
    } else {
        return function (name) {
            console.log(name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('Teacher');
var designerQuestion = interviewQuestion('Designer');

teacherQuestion("Jon");
designerQuestion("Luis");
interviewQuestion("Other")("Manu");
*/
/**
 * Immediately Invoke Function Expressions
 * Function Called on its own
 * Preserves data privacy
 * Not reusable
 */
/**
 * Lecture 58 (IIFEs. Immediately Invoke Function Expressions)
// Normal Way
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

// IFE (Called on its own, and data private)
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= (5-goodLuck));
})(4);
*/
/**
 * Closures
 * Variables of a function can be accessed after the return
 */
/**
 * Lecture 59 (Closures)
function retirement(retirementAge){
    var a = ' Years left.'

    return function (yearBirth) {
        var age = 2018 - yearBirth;
        console.log(retirementAge - age + a);
    }
}

var retirementES = retirement(65);
retirementES(1992);

retirement(66)(1992);

function interviewQuestion(job){
    return function (name) {
        switch (job){
            case 'Programmer':
                console.log(name + " what do you program");
                break;
            case 'Student':
                console.log(name + " what do you study");
                break;
            default:
                console.log(name + " what do you do");
                break;
        }
    }
}

var Jon = interviewQuestion('Programmer');
Jon("Jon");

interviewQuestion("Student")("Luis");
interviewQuestion("MiniStudent")("Manu");*/
/**
 * Bind, Call, Apply
 * CALL -> can call a function with a different object being referenced by THIS! (Method Borrowing)
 * APPLY -> similar to CALL but using an array to pass the rest of the arguments
 * BIND -> generates a copy of the function changing "this" for a new object specified by us
 */
/**
 * Lecture 60 (Bind, Call, Apply)
var Jon = {
    name: 'Jon',
    age: 25,
    job: 'Programmer',
    presentation: function (style, timeOfDay) {
        if (style === 'formal'){
            console.log("Good " + timeOfDay + ' ladies and gentlemen! I\'m ' + this.name + " I\'m a " + this.job + " and I\'m " + this.age + ' years old.')
        } else if (style === 'friendly'){
            console.log('What\'s up!!! I\'m ' + this.name + " I\'m a " + this.job + " and I\'m " + this.age + ' years old. Have a nice ' + timeOfDay);
        }
    }
};

var Luis = {
    name: 'Luis',
    age: 21,
    job: 'Student'
};

Jon.presentation('formal', 'morning');

Jon.presentation.call(Luis, 'friendly', 'night');
Jon.presentation.apply(Luis, ['friendly', 'night']);

var luisFormal = Jon.presentation.bind(Luis, 'formal');
luisFormal('morning');
luisFormal('evening');

var years = [1992, 1996, 2002];

function calculateAges(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i ++){
        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}

function calculateAge(el) {
    return 2018 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = calculateAges(years, calculateAge);
var fullJapan = calculateAges(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);*/