const sumTotalBal = document.querySelector("#summary_balance_amt");
const sumIncome = document.querySelector("#summary_income_amt");
const sumExpense = document.querySelector("#summary_income_exp");

class Budget {
    constructor() {
        this.income = {};
        this.expense = {};
    }

    addIncome(description, amount) {
        this.income[description] = amount;
    }

    addExpense(description, amount) {
        this.expense[description] = amount;
    }

    totalIncome() {
        return Object.values(this.income).reduce((total, income) => total + income, 0)
    }

    totalExpense() {
        return Object.values(this.expense).reduce((total, expense) => total + expense, 0)
    }

    totalBalance() {
        return this.totalIncome() - this.totalExpense();
    }
}

const userBudget = new Budget();

const addIncome = document.querySelector('.income-submit');
addIncome.addEventListener('click', function() {
    event.preventDefault();
    const description = document.querySelector("#income-desc").value;
    const amount = document.querySelector('#income-amt').value;
    
    userBudget.addIncome(description, Number(amount));

    const container = document.querySelector(".budget_trans_container")
    const div = document.createElement("div");
    const trans = document.createElement("h1");
    const income = document.createElement("h1");

    div.className = "trans-div"

    trans.textContent = description;
    income.textContent = amount;

    container.appendChild(div);
    div.appendChild(trans);
    div.appendChild(income);

    sumTotalBal.innerHTML = ` $${userBudget.totalBalance()}`;
    sumIncome.innerHTML = ` $${userBudget.totalIncome()}`;
})

const addExpense = document.querySelector('.expense-submit');
addExpense.addEventListener('click', function() {
    event.preventDefault();
    const description = document.querySelector("#expense-desc").value;
    const amount = document.querySelector('#expense-amt').value;
    
    userBudget.addExpense(description, Number(amount));

    const container = document.querySelector(".budget_trans_container2")
    const div = document.createElement("div");
    const trans = document.createElement("h1");
    const income = document.createElement("h1");

    div.className = "trans-div"

    trans.textContent = description;
    income.textContent = amount;

    container.appendChild(div);
    div.appendChild(trans);
    div.appendChild(income);

    sumTotalBal.innerHTML = ` $${userBudget.totalBalance()}`;
    sumExpense.innerHTML = ` $${userBudget.totalExpense()}`;
})