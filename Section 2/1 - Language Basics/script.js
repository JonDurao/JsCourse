/**
 *
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

// Lectures 8 & 9 (Basic)
/*var age = 25;
var fullAge = true;
var lastName = "Durao";
var name = "Jon";

console.log("Hello World " + name + "!!");
console.log("Your surname is " + lastName);
console.log("You're " + age + " (this is " + fullAge + ")");
*/

// Lecture 10 (Variables, prompt, alert)
/*var job, married;
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

// Lecture 11 (Operators)
/*
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

// Lecture 12 (If/Else, Boolean logic, Switch)
/*
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

// Lecture 16 (Fuctions)
/*
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

// Lecture 17 (Statements & Expressions)
/*
// Expresions (Produces immediate value
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

