/**
 * EXAMPLE OF PRIVACY IN JS
 */
/*var budgetController = (function () {
   // private data and functionality
    var x = 23;

    var add = function (a) {
        return x + a;
    };

    return{
        publicTest: function (b) {
            console.log(add(b));
        }
    }
})();

console.log(budgetController.x);
// Can be accessed cause it's placed inside a return block
console.log(budgetController.publicTest(25));
console.log(budgetController.add(25));*/

// Lecture 68 - Module Pattern
/**
 * Closures and EFI (Immediately Invoked Function)
var budgetController = (function () {
    var x = 23;

    // Esta funcion es privada
    var add = function (a) {return a + x;}

    return {
        publicTest: function (b) {
            return add(b);
        }
    }
})();

var UIController = (function () {
    //Code
})();

var controller = (function (budgetCtrl, uiCtrl) {
    var z = budgetCtrl.publicTest(25);

    return{
        anotherPublicTest: function () {
            console.log('value is ' + z);
        }
    }
})(budgetController, UIController);*/

// Lecture 69 - Event Listener for key press
var budgetController = (function () {
    //Code
})();

var UIController = (function () {
    //Code
})();

var controller = (function (budgetCtrl, uiCtrl) {
    document.querySelector('.add__btn').addEventListener('click', function () {
       alert('Element Clicked')
    });
})(budgetController, UIController);