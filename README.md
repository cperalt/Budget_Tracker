# [Budget_Tracker](https://cperalt.github.io/Budget_Tracker/)

## User Interface
* intuitive and user-friendly interface
* Inlcude input fields to enter income and expense descriptions
* Provide input fields to enter income and expense amounts.
* Add buttons to add income and expenses.
* Dsiplays total budget, income, and expenses on the UI.

## Budget Calculation
* Calculates total budged based on income and expenses entered
* Total budget updates whenever income or expense is added
* Income and expenses are stored in seperate objects
* App handles positive and negative numbers

## Functionality
* Ability to add income and expense
* Proper validation

## Display
* Displays income, expenses, and total budget
* Summary updates dynamically

## Object Oriented Programming
* Implemented budget class with properties and methods
* Methods include addIncome, addExpense, totalIncome, totalExpense, totalBalance

## Instructions
* Input a description and an number amound and press sumbit.


> [!NOTE]
> There is a bug when the user attempts to submit an identical transaction such as Salary 345 and Salary 524. Only the first Salary submission gets added to the totals and to the income object while the rest are ommitted. This is due to the nature of objects and key value pairs, where keys are unique, resulting in that there can only be one unique key. The method used to add the transactions is perhaps not best practice due to this situation. I intend to revise the code in a way that is more flexible and better implemented.
