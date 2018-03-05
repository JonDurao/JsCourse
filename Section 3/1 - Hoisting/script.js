// Lecture 30 (Hoisting)
/*
// En la creacion del contexto de ejecucion se declaran las funciones antes de ejecutar el codigo
calculateAge(1990);
function calculateAge(year) {
    console.log(2018 - year);
}
calculateAge(1999);

// Type Error, hoisting solo funciona con declaraciones de funciones exlicitas
// retirement(1996);
var retirement = function (year) {
    console.log(65 - (2018 - year));
};
retirement(1992);

// Undefined, variables se declaran en memoria pero no se les asigna el valor hasta que se ejecuta el codigo
console.log(age);
var age = 25;
console.log(age);


function foo() {
    // created by JS as a new object variable "age" (different from the one in the global context)
     var age = 65;
     console.log(age);
}

foo();
console.log(age);
*/

 // Lecture 31 (Scoping)
/*
var a = "A";
first();

function first() {
    var b = "B";
    second();

    function second() {
        var c = "C";
        console.log(a + b + c);
        third();
    }
}

function third() {
    var d = "D";
    console.log(a+d);
    console.log(a+b+c+d);
}
*/

// Lecture 33 (this)
console.log(this);
calculateAge(1999);

function calculateAge(year) {
    console.log(2018 - year);
    console.log(this);
}

var Jon = {
    name: "Jon",
    lastName: "Durao",
    yearBirth: 1992,
    calculateAge: function () {
        console.log(this);
        console.log(2018 - this.yearBirth);

        function innerFunction() {
            console.log(this);
        }

        innerFunction();
    }
};

Jon.calculateAge();

var luis = {
    name: "Luis",
    yearBirth: 1996
};

luis.calculateAge = Jon.calculateAge;
luis.calculateAge();