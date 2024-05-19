//Target html elements
const sumTotalBal = document.querySelector("#summary_balance_amt");
const sumIncome = document.querySelector("#summary_income_amt");
const sumExpense = document.querySelector("#summary_income_exp");

//Create budget class
class Budget {
    //set income and expense parameters to empty object
    constructor() {
        this.income = {};
        this.expense = {};
    }

    //addIncome method takes in a description and amount and creates the key value pair to the income obj
    addIncome(description, amount) {
        this.income[description] = amount;
    }

    //addExpense method takes in a description and amount and creates the key value pair to the expense obj
    addExpense(description, amount) {
        this.expense[description] = amount;
    }

    //Returns sum of total values in income object
    totalIncome() {
        return Object.values(this.income).reduce((total, income) => total + income, 0)
    }

    //Returns sum of total values in expense object
    totalExpense() {
        return Object.values(this.expense).reduce((total, expense) => total + expense, 0)
    }

    //Returns total income minus total expenses
    totalBalance() {
        return this.totalIncome() - this.totalExpense();
    }

    // remove(description) {
    //     if (this.income[description]) {
    //         delete this.income[description];
    //     } else {
    //         delete this.expense[description];
    //     }
    // }
}

//New instance of the class Budget
const userBudget = new Budget();

//Function with parametes description, amount, and container that creates new element to display new input
const displayTrans = (description, amount, container) => {
    const div = document.createElement("div");
    const trans = document.createElement("h1");
    const income = document.createElement("h1");
    // const remove = document.createElement("button");

    div.className = "trans-div";
    trans.className = 'trans-desc'
    // remove.className = "button"

    trans.textContent = description;
    income.textContent = `$${amount}`;
    // remove.textContent = 'Remove';

    container.appendChild(div);
    div.appendChild(trans);
    div.appendChild(income);
    // div.appendChild(remove);

    //Updates the summary total balance by calling the totalBalance method;
    sumTotalBal.innerHTML = ` $${userBudget.totalBalance()}`;


};


const addIncome = document.querySelector('.income-submit');
addIncome.addEventListener('click', function() {
    event.preventDefault();
    const description = document.querySelector("#income-desc").value;
    const amount = document.querySelector('#income-amt').value;
    
    //calls the addIncome method to add the description/number key value pair to the income object
    userBudget.addIncome(description, Number(amount));

    const container = document.querySelector(".budget_trans_container")

    displayTrans(description, amount, container);
    //updates total income in summary by calling the totalIncome method
    sumIncome.innerHTML = ` $${userBudget.totalIncome()}`;
})

const addExpense = document.querySelector('.expense-submit');
addExpense.addEventListener('click', function() {
    event.preventDefault();
    const description = document.querySelector("#expense-desc").value;
    const amount = document.querySelector('#expense-amt').value;
    
    //Calls the addExpense method to add new expense key value pair to the expense object
    userBudget.addExpense(description, Number(amount));

    const container = document.querySelector(".budget_trans_container2")
    displayTrans(description, amount, container);
    //updates total expense in summary by calling the totalExpense method
    sumExpense.innerHTML = ` $${userBudget.totalExpense()}`;
})

// const removeTrans = document.querySelectorAll(".button");
// removeTrans.addEventListener('click', function() {
//     const description = document.querySelector('.trans-desc')
//     console.log("hi")
//     userBudget.remove(description);
//     console.log(userBudget)
// });