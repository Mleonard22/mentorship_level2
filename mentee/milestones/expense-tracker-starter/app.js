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
    {expenseName:"Meal", cost: 22, type: "Food", isPaid: false }, 
    {expenseName: "Water Bill", cost: 100, type: "Bill", isPaid: true
    },
    {expenseName: "Netflix", cost: 15, type:"Entertainment", isPaid: false},
    {expenseName: "Car Note", cost: 200, type:"Bill", isPaid: true},
    {expenseName: "Rent", cost: 700, type:"Bill", isPaid: true}

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


//covers stage 2: 
function totalAmount(expense) {
    let startAmount = 0;
    for (let i = 0; i < expense.length; i++) 
        { startAmount = startAmount + expense[i].cost;
    }
    return `The total amount of expenses is $${startAmount} dollars.`
}


// home work for session 5: 

function listExpenses(expenses) {
    const allExpenses = []
    for (const expense of expenses) {
        const { cost, expenseName} = expense;
        allExpenses.push(`This is the expenese ${expenseName} and it cost $${cost} dollars.`) 
    }
    return allExpenses;
}

// instead of doing unpaid expenses, since I don't have that as a category, I did non essential expenses:

function variableExpenses (expenses) {
    const varExpenses = [];

    for (const expense of expenses) {
        const { expenseName, isNecessary } = expense;
        if (!isNecessary) {
        varExpenses.push(expenseName) 
        }
    }
    return `This is a list of non essential expenses: ${varExpenses}`
}


// ---------- output ----------

console.log(variableExpenses(expenses));

console.log(listExpenses(expenses));

console.log(totalAmount(expenses)); 

console.log(fixedExpense(expenses[1]));

console.log(cheapExpense(expenses[3]));