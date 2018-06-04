/**
 * Section 2 (JS Basics)
 * Datatypes -> Numbers (Always floating point)
 *              Strings
 *              Boolean
 *              Undefined (Doesn't have a value yet)
 *              Null (Not existent)
 * JS has dynamic typing of variables
 * JS variable mutation is automatic
 * JS comparison -> === equals value
 *                  == equals value AND type
 */

/**
 * Lecture 8 & 9 (Variables & Datatypes)

var age = 25;
var fullAge = true;
var lastName = "Durao";
var name = "Jon";

console.log("Hello World " + name + "!!");
console.log("Your surname is " + lastName);
console.log("You're " + age + " (this is " + fullAge + ")");
*/
/**
 * Lecture 10 (Variable mutation and type coercion)
var job, married;
var age = 25;
var name = "Jon";

console.log(age + name);
console.log(age + age);
console.log(job);

job = "Programmer"
married = false;
console.log(name + " // " + age + " // " + job + " // " + married);

age = "Twenty Five";
console.log(name + " // " + age + " // " + job + " // " + married);

// To receive data from the console
var lastName = prompt("What is your last name?")
console.log("Last name is " + lastName);

// Send info in a pop up window
alert("Alerta Alerta");
*/
/**
 * Lecture 11 (Operators)
var age = 25;
var now = 2018;
var year = now - age;
console.log(year);

year = now - age * 2;
console.log(year);

var ageJon = 25;
var ageManu = 15;

ageJon = ageManu = (3 + 5) * 4 - 6;
console.log(ageJon + " // " + ageManu);

ageJon++;
ageManu += ageJon;
console.log(ageJon + " // " + ageManu);
*/
/**
 * Lecture 12 & 13 (If/Else, Boolean logic, Switch)
var age = 25;
var job;
var married = "25";
var marriedBool = true;
var name = "Jon";

if (married === age) {
    console.log(name + " is Married");
} else {
    console.log(name + " is NOT Married");
}

if (marriedBool) {
    console.log(name + " is Married");
} else {
    console.log(name + " is NOT Married");
}

if (23 == "23"){
    console.log("23 == \"23\"");
}

if (23 !== "23"){
    console.log("23 NOT === \"23\"");
}

if (age > 18){
    console.log(name + " is a man");
} else if (age >= 13 && age < 18) {
    console.log(name + " is a teenager");
} else {
    console.log(name + " is a child");
}

job = prompt("What is your job?")

switch (job){
    case "Programmer":
        console.log(name + " is a programmer");
        break;
    default:
        console.log(name + " does things");
        break;
}
*/
/**
 * Lecture 16 (Functions)
var birthYear, retirementYear;

calculateAge(21, "Luis", 2018);
calculateAge(25, "Jon", 2018);

calculateRetirement("Luis", calculateAge(21, "Luis", 2018));
calculateRetirement("Jon", calculateAge(25, "Jon", 2018));

function calculateAge(age, name, year) {
    birthYear = year - age;
    console.log("birthYear of " + name + " is " + birthYear);
    return birthYear;
}

function calculateRetirement(name, year) {
    retirementYear = year + 65;
    console.log("You'll retire the year " + retirementYear);
}
*/
/**
 * Lecture 17 (Statements & Expressions)
// Expressions (Produces immediate value)
3 + 4;
var x = 3;

var someFunc = function (value) {
    // code
}

// Statement (Doesn't produce immediate product)
if (x === 5) {
    // do Stuff
}
*/
/**
 * Lecture 18 (Arrays)
var Jon = ["Jon", "Durao", 1992, "Programmer", false];
var names = ["Jon", "Luis", "Manu"];
var years = new Array(1992, 1996, 2002);

console.log(names[0]);

names[10] = "Test";
console.log(names);

// Adds at the end
Jon.push("Green");
// Adds at the beggining
Jon.unshift("Mr.");
// Removes the last value
Jon.pop();
// Removes the 1st element
Jon.shift()

alert(Jon.indexOf(1992));
console.log(Jon);

if (Jon.indexOf("Teacher") === -1){
    console.log("Jon is not a teacher")
}
*/
/**
 * Lecture 19 (Objects & Properties)
var jon = {
    name: "Jon",
    lastName:"Durao",
    age:25,
    yearOfBirth:1992,
    job:"Programmer",
    married:false
};

console.log(jon);
console.log(jon.name);
console.log(jon["name"]);

var xyz = "job";
console.log(jon[xyz]);

jon.lastName = "Durao Moreno";
console.log(jon.lastName);

var luis = new Object();
luis.name = "Luis";
luis.lastName = "Durao";
luis.age=21;
luis.yearOfBirth=1996;
luis.job="Student";
luis.married=false;

console.log(luis);
*/
/**
 * Lecture 20 (Objects & Methods)
var jon = {
    name: "Jon",
    lastName:"Durao",
    yearOfBirth:1992,
    job:"Programmer",
    married:false,
    family:["Martin","Mercedes","Luis","Manu"],
    age: function (yearOfBirth) {
        return 2018 - yearOfBirth;
    }
    age: function () {
        return 2018 - this.yearOfBirth;
    }
};

console.log(jon);
console.log(jon.family);
console.log(jon.family[2]);
//console.log(jon.age(jon.yearOfBirth));
console.log(jon.age());

jon.age = jon.age();
console.log(jon);
*/
/**
 * Lecture 21 (Loops & Iterations)
for (var counter=0; counter<10; counter++){
    console.log(counter)
}

var names = ["Jon", "Luis", "Manu"];
for (var counter=0; counter<names.length; counter++){
    console.log(names[counter]);
}

for (var counter=names.length - 1; counter >= 0; counter--){
    console.log(names[counter]);
}

var counterWhile = 0;
while (counterWhile < names.length){
    console.log(names[counterWhile]);
    counterWhile++;
}

for (var counterWhileTwo=0; counterWhileTwo<names.length; counterWhileTwo++){
    if (counterWhileTwo === 1){
        continue;
    }
    console.log(names[counterWhileTwo]);
}

for (var counterWhileTwo=0; counterWhileTwo<names.length; counterWhileTwo++){
    if (counterWhileTwo === 1){
        break;
    }
    console.log(names[counterWhileTwo]);
}*/