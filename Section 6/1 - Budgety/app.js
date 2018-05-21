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

// Lecture 69 - Event Listener for key press   ////  Levture 70 - Reading Input data
var budgetController = (function () {
    //Code
})();

var UIController = (function () {
    return{
        getInput: function () {
            return{
                type: document.querySelector('.add__type').value, // Will be inc or exp
                description: document.querySelector('.add__description').value,
                number: document.querySelector('.add__value').value}
        }
    };
})();

var controller = (function (budgetCtrl, uiCtrl) {

    // private as it is not returned
    var ctrlAddItem = function(){
        // 1. Get field input data
        var input = uiCtrl.getInput();
        console.log(input);

        // 2. Add item to the budget controller

        // 3. Add item to UI

        // 4. Calculate budget

        // 5. Display Budget

        console.log("Hola");
    };

    document.querySelector('#add_button_jon').addEventListener('click', ctrlAddItem);

    // Listens for events in the whole page
    document.addEventListener('keypress', function (event) {
        if (event.key === "Enter"){
            // console.log(event);
            ctrlAddItem();
        }
    });
})(budgetController, UIController);