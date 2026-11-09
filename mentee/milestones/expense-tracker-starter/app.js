// Expense Tracker — your app for the whole course.
//
// Part 1 (session 6): data + functions, console only.
// Part 2 (session 9): a screen, and add / mark paid / delete.
// Part 3 (session 11): survives a refresh, and fetches live data.
//
// Start here, after session 4:
//
// Design check — answer these in a comment before writing any code.
//   1. What shape is an expense? Write one example.
//   2. What do you want to find out about your expenses?
//
// Example of the shape, from the brief:
//   { label: "Internet", amount: 45, category: "home", isPaid: false }

// ---------- data ----------
let expenses = [
    {expenseName:"Meal", cost: 22, type: "food", isNecessary: false }, 
    {expenseName: "Water Bill", cost: 100, type: "Bill", isNecessary: true
    },
    {expenseName: "Netflix", cost: 15, type:"entertainment", isNecessary: false},
    {expenseName: "Car Note", cost: 200, type:"Bill", isNecessary: true}
]
// ---------- functions ----------
function fixedExpense(theExpense) {
    if (theExpense.isNecessary == true) {
        return `The expense ${theExpense.expenseName}, was needed and already in the budget.`
    } else {
        return "The was not added in the budget."
    }
}

function cheapExpense(theExpense) {
    if (theExpense.cost < 50) {
        return `The ${theExpense.expenseName} wasnt costly.`
    } else {
        return `The ${theExpense.expenseName} was high.`
    }
}
// ---------- output ----------

console.log(fixedExpense(expenses[1]));

console.log(cheapExpense(expenses[3]));