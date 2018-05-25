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

// Lecture 69 - Event Listener for key press   ////  Lecture 70 - Reading Input data  //// Lecture 71 - Init Function
    //// Lecture 72 //// Lecture 73
var budgetController = (function () {
    var Expense = function (id, description, value) {
        this.id = id;
        this.description =description;
        this.value = value;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description =description;
        this.value = value;
    };

    /* Bad solution 1
    var allExpenses = [];
    var allIncomes = [];
    var totalExpenses = 0;*/

    var data = {
        /* Bad sol 2
        allExpenses: [],
        allIncomes: []*/
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            totalExp: 0,
            totalInc:0
        }
    };

    return{
        addItem: function (type, des, val) {
            var newItem;

            newItem = Expense(ID, des, val);
        }
    }
})();

var UIController = (function () {
    var DomString = {
        INPUT_TYPE : '.add__type',
        INPUT_DESCRIPTION : '.add__description',
        INPUT_VALUE : '.add__value'
    };

    return{
        getInput: function () {
            return{
                type: document.querySelector(DomString.INPUT_TYPE).value, // Will be inc or exp
                description: document.querySelector(DomString.INPUT_DESCRIPTION).value,
                number: document.querySelector(DomString.INPUT_VALUE).value}
        }
    };
})();

var controller = (function (budgetCtrl, uiCtrl) {
    var initEventListeners = function() {
        var DomStrings = {
            BUTTON_ADD : '#add_button_jon'
        };

        document.querySelector(DomStrings.BUTTON_ADD).addEventListener('click', ctrlAddItem);

        // Listens for events in the whole page
        document.addEventListener('keypress', function (event) {
            if (event.key === "Enter"){
                // console.log(event);
                ctrlAddItem();
            }
        });
    };

    // private as it is not returned
    var ctrlAddItem = function(){
        // 1. Get field input data
        var input = uiCtrl.getInput();
        console.log(input);

        // 2. Add item to the budget controller

        // 3. Add item to UI

        // 4. Calculate budget

        // 5. Display Budget
    };

    return{
        init: function () {
            console.log("Init");
            initEventListeners();
        }
    };
})(budgetController, UIController);

controller.init();