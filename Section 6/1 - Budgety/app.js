/**
 * EXAMPLE OF PRIVACY IN JS
var budgetController = (function () {
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

/**
 * Lecture 68 - Module Pattern
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

// Lecture 69 - Event Listener for key press   ////  Lecture 70 - Reading Input data  //// Lecture 71 - Init Function //// Lecture 72 //// Lecture 73 //// Lecture 74 //// Lecture 75 //// Lecture 76 //// Lecture 77 //// Lecture 78
var budgetController = (function () {
    var Expense = function (id, description, value) {
        this.id = id;
        this.description =description;
        this.value = value;
        this.percentage = -1;
    };

    Expense.prototype.calcPercentage = function (totalIncome) {
        if (totalIncome > 0){
            this.percentage = Math.round(((this.value / totalIncome) * 100));
        } else {
            this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function () {
        return this.percentage;
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

    var calculateTotal = function (type) {
      var sum = 0;

        data.allItems[type].forEach(function (value) {
            sum += value.value;
        });

        data.totals[type] = sum;
    };

    var data = {
        /* Bad sol 2
        allExpenses: [],
        allIncomes: []*/
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp:0,
            inc:0
        },
        budget: 0,
        percentage: -1
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
        deleteItem: function(type, id){
            var ids, index;

            ids = data.allItems[type].map(function (value) {
               return value.id;
            });

            index = ids.indexOf(id);

            if (index !== -1){
                // removes elements
                data.allItems[type].splice(index, 1);
            }
        },
        calculateBudget: function(){
            var totalExp, totalInc, budget, perSpent;

            // calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');

            // calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;

            // calculate the percentage of income that we spent
            if (data.totals.inc > 0){
                data.percentage = Math.round((data.totals.exp/data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
        },
        calculatePercentage: function(){
          data.allItems.exp.forEach(function (value) {
             value.calcPercentage(data.totals.inc);
          });
        },
        getPercentages: function(){
            var allPerc;

            allPerc = data.allItems.exp.map(function (value) {
               return value.getPercentage();
            });

            return allPerc;
        },
        getBudget: function(){
            return {
                budget: data.budget,
                income: data.totals.inc,
                expense: data.totals.exp,
                percentage: data.percentage
            }
        },
        testing: function () {
            console.log(data);
        }
    }
})();

var UIController = (function () {
    var DomString = {
        BUTTON_ADD : '#add_button_jon',
        INPUT_TYPE : '.add__type',
        INPUT_DESCRIPTION : '.add__description',
        INPUT_VALUE : '.add__value',
        LIST_INCOME : '.income__list',
        LIST_EXPENSE : '.expenses__list',
        OUTPUT_BUDGET : '.budget__value',
        OUTPUT_INCOME : '.budget__income--value',
        OUTPUT_INCOME_PER : '.budget__income--percentage',
        OUTPUT_EXPENSE : '.budget__expenses--value',
        OUTPUT_EXPENSE_PER : '.budget__expenses--percentage',
        OUTPUT_EXPENSE_ITEM_PER : '.item__percentage',
        OUTPUT_DATE : '.budget__title--month'
    };

    var formatNumber = function(num, type){
        num = Math.abs(num);
        num = num.toFixed(2);

        var numSplit = num.split('.');

        var int = numSplit[0];
        if (int.length > 3){
            int = int.substr(0, int.length - 3) + "," + int.substr(int.length-3 , 3);
        }

        var dec = numSplit[1];

        return (type === 'exp' ? '- ' : '+ ') + int + '.' + dec;
    };

    var nodeForEach = function(list, callback){
        for (var i = 0; i < list.length; i++){
            callback(list[i], i);
        }
    };

    return{
        getInput: function () {
            return{
                type: document.querySelector(DomString.INPUT_TYPE).value, // Will be inc or exp
                description: document.querySelector(DomString.INPUT_DESCRIPTION).value,
                // parse value to float
                value: parseFloat(document.querySelector(DomString.INPUT_VALUE).value)}
        },
        addListItem: function(obj, type, income){
            var htmlCome, newHtmlCome, listElement;

            // Create HTML with placeholder
            if (type ==='inc'){
                listElement = DomString.LIST_INCOME;
                htmlCome = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> ' +
                    '<div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn">' +
                    '<i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
            } else if (type ==='exp') {
                listElement = DomString.LIST_EXPENSE;
                htmlCome = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div>' +
                    '<div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">%percentage%</div>' +
                    '<div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            // Replace placeholders
            newHtmlCome = htmlCome.replace('%id%', obj.id);
            newHtmlCome = newHtmlCome.replace('%description%', obj.description);
            newHtmlCome = newHtmlCome.replace('%value%', formatNumber(obj.value, type));

            // Insert HTML into the DOM
            document.querySelector(listElement).insertAdjacentHTML('beforeend', newHtmlCome);
        },
        changedType: function(){
            var fields = document.querySelectorAll(DomString.INPUT_VALUE + ',' + DomString.INPUT_DESCRIPTION + ',' + DomString.INPUT_TYPE);

            nodeForEach(fields, function (current) {
                current.classList.toggle('red-focus');
            });

            document.querySelector(DomString.BUTTON_ADD).classList.toggle('red');
        },
        deleteListItem: function(id){
            var elem;

            elem = document.getElementById(id);
            elem.parentNode.removeChild(elem);
        },
        showBudget: function(obj){
            document.querySelector(DomString.OUTPUT_BUDGET).textContent = formatNumber(obj.budget, (obj.budget>=0 ? 'inc' : 'exp'));
            document.querySelector(DomString.OUTPUT_INCOME).textContent = formatNumber(obj.income, 'inc');
            document.querySelector(DomString.OUTPUT_EXPENSE).textContent = formatNumber(obj.expense, 'exp');
            if (obj.percentage<0){
                document.querySelector(DomString.OUTPUT_EXPENSE_PER).style.visibility = 'hidden';
            } else {
                document.querySelector(DomString.OUTPUT_EXPENSE_PER).style.visibility = '';
                document.querySelector(DomString.OUTPUT_EXPENSE_PER).textContent = obj.percentage + '%';
            }
        },
        showDate: function(){
            var monthNames, now;

            monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            now = new Date();
            document.querySelector(DomString.OUTPUT_DATE).textContent = monthNames[now.getMonth()] + ' ' + now.getFullYear();
        },
        showPercentage: function(percentages){
            var allPerc = document.querySelectorAll(DomString.OUTPUT_EXPENSE_ITEM_PER);
            nodeForEach(allPerc, function (current, index) {
                if (percentages[index] > 0){
                    current.textContent = percentages[index] + '%';
                }  else {
                    current.textContent = '---';
                }
            });
        },
        clearFields : function(){
            var fields, fieldsArray;

            fields = document.querySelectorAll(DomString.INPUT_VALUE + ', ' + DomString.INPUT_DESCRIPTION);

            //fields.slice()
            fieldsArray = Array.prototype.slice.call(fields);

            // value, index, array
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
    var DomStrings = {
        BUTTON_ADD : '#add_button_jon',
        BUTTON_DELETE_INCOME : 'inc-',
        BUTTON_DELETE_EXPENSE : 'exp-',
        CONTAINER_LIST : '.container',
        CONTAINER_LIST_EXPENSE : '.expenses__list',
        SELECT_TYPE : '.add__type'
    };

    var initEventListeners = function() {
        document.querySelector(DomStrings.BUTTON_ADD).addEventListener('click', ctrlAddItem);
        document.querySelector(DomStrings.CONTAINER_LIST).addEventListener('click', ctrlDeleteItem);

        // Listens for events in the whole page
        document.addEventListener('keypress', function (event) {
            if (event.key === "Enter"){
                // console.log(event);
                ctrlAddItem();
            }
        });

        document.querySelector(DomStrings.SELECT_TYPE).addEventListener('change', uiCtrl.changedType);
    };

    var updateBudget = function () {
        // 1. Calculate budget
        budgetCtrl.calculateBudget();

        // 2. Display Budget
        var budget = budgetCtrl.getBudget();
        console.log(budget);

        uiCtrl.showBudget(budget);
    };

    var updatePercentages = function () {
        // 1. Calculate budget
        budgetCtrl.calculatePercentage();

        // 2. Display Budget
        var percentage = budgetCtrl.getPercentages();
        console.log(percentage);

        uiCtrl.showPercentage(percentage);
    };

    // private as it is not returned
    var ctrlAddItem = function(){
        var input, newItem;

        // 1. Get field input data
        input = uiCtrl.getInput();
        console.log(input);

        if ((input.value !== '' && !isNaN(input.value) && input.value > 0) && input.description !== '' ){
            // 2. Add item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            console.log(newItem);
            budgetCtrl.testing();

            // 3. Add item to UI
            uiCtrl.addListItem(newItem, input.type, budgetCtrl.getBudget().income);
            uiCtrl.clearFields();

            // 4. calculate and update budget
            updateBudget();

            // 5. update percentage
            updatePercentages();
        }
    };

    var ctrlDeleteItem = function (event) {
        var itemID, splitID, type, id;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if (itemID){
            splitID = itemID.split('-');
            type = splitID[0];
            id = parseInt(splitID[1]);

            // 1. Delete item from data structure
            budgetCtrl.deleteItem(type, id);

            // 2. Delete item from UI
            uiCtrl.deleteListItem(itemID);

            // 3. Update and show budget
            updateBudget();
        }
    };

    return{
        init: function () {
            console.log("Init");
            uiCtrl.showBudget({
                budget: 0,
                income: 0.00,
                expense: 0.00,
                percentage: -1
            });
            initEventListeners();
            uiCtrl.showDate();
        }
    };
})(budgetController, UIController);

controller.init();