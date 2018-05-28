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
    //// Lecture 72 //// Lecture 73 //// Lecture 74
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
            var newItem, ID;
            //ID = 0;

            if (data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            if (type === 'exp'){
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            data.allItems[type].push(newItem);
            return newItem;
        },
        testing: function () {
            console.log(data);
        }
    }
})();

var UIController = (function () {
    var DomString = {
        INPUT_TYPE : '.add__type',
        INPUT_DESCRIPTION : '.add__description',
        INPUT_VALUE : '.add__value',
        LIST_INCOME : '.income__list',
        LIST_EXPENSE : '.expenses__list'
    };

    return{
        getInput: function () {
            return{
                type: document.querySelector(DomString.INPUT_TYPE).value, // Will be inc or exp
                description: document.querySelector(DomString.INPUT_DESCRIPTION).value,
                value: document.querySelector(DomString.INPUT_VALUE).value}
        },
        addListItem: function(obj, type){
            var htmlCome, newHtmlCome, listElement;

            // Create HTML with placeholder
            if (type ==='inc'){
                listElement = DomString.LIST_INCOME;
                htmlCome = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> ' +
                    '<div class="item__value">+ %value%</div> <div class="item__delete"> <button class="item__delete--btn">' +
                    '<i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
            } else if (type ==='exp') {
                listElement = DomString.LIST_EXPENSE;
                htmlCome = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div>' +
                    '<div class="right clearfix"><div class="item__value">- %value%</div><div class="item__percentage">21%</div>' +
                    '<div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            // Replace placeholders
            newHtmlCome = htmlCome.replace('%id%', obj.id);
            newHtmlCome = newHtmlCome.replace('%description%', obj.description);
            newHtmlCome = newHtmlCome.replace('%value%', obj.value);

            // Insert HTML into the DOM
            document.querySelector(listElement).insertAdjacentHTML('beforeend', newHtmlCome);
        },
        clearFields : function(){
            var fields, fieldsArray;

            fields = document.querySelectorAll(DomString.INPUT_VALUE + ', ' + DomString.INPUT_DESCRIPTION);

            //fields.slice()
            fieldsArray = Array.prototype.slice.call(fields);

            // valores disponibles value, index, array
            fieldsArray.forEach(function (value) {
                value.value = "";
            });

            fieldsArray[0].focus();

            console.log(fields);
            console.log(fieldsArray);
        },
        getDOMStrings: function () {
            return DOMStrings;
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
        var input, newItem;

        // 1. Get field input data
        input = uiCtrl.getInput();
        console.log(input);

        // 2. Add item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        console.log(newItem);
        budgetCtrl.testing();

        // 3. Add item to UI
        uiCtrl.addListItem(newItem, input.type);
        uiCtrl.clearFields();

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