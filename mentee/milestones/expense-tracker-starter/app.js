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

// shape of an expense:
// {expenseName: "Rent", cost: 700, type:"Bill", isPaid: true}
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
    {expenseName: "Rent", cost: 700, type:"Bill", isPaid: true},
    {expenseName: "Insurance", cost: 1000, type:"Bill", isPaid: false}

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

function getTotal(expense) {
    let startAmount = 0;
    for (let i = 0; i < expense.length; i++) 
        { startAmount = startAmount + expense[i].cost;
    }
    return `The total amount of expenses is $${startAmount} dollars.`
}

function getUnpaidTotal(expenses) {
    let startAmount = 0;
    
    for (const expense of expenses) {
        const { cost, isPaid} = expense
        if (!isPaid) {
            startAmount += cost
        }
    }
    return `The total amount of unpaid expenses is $${startAmount} dollars.`
}

function listExpenses(expenses) {
    const allExpenses = []
    for (const expense of expenses) {
        const { cost, expenseName} = expense;
        allExpenses.push(`This is the expenese ${expenseName} and it cost $${cost} dollars.`) 
    }
    return allExpenses;
}


function getUnpaid(expenses) {
   
    const name = [];
    let total = 0;
    for (const expense of expenses) {
         const { expenseName, cost, isPaid} = expense
        if (isPaid === false){
            name.push(expenseName)
            total += cost}
   
} return `the expesnes are ${name} and the total comes out to $${total} dollars`
}



// Covers stage 1:


function describeExpense(expenses) {
    const { expenseName, type, cost, isPaid } = expenses

    return `${expenseName} - $${cost} (${type}, ${!isPaid ? "Not Paid": "Paid"})`
}


function getPriority(expense) {
    
    if (expense.isPaid === false && expense.cost > 100) {
        return "Pay First"
    } else if (expense.isPaid == false) {
        return "Unpaid"
    } else {
        return "Paid"
    }

    /* I went about setting my conditionals by the most specific first. I do think there is some flexibility in how you handles the conditions, but since we are looking to if a bill is not paid I decided to go with those first */
}


// Covers Stage 3:


// ---------- output ----------

// console.log(describeExpense(expenses[1])) // Output: Water Bill - $100 (Bill, Paid)
// console.log(describeExpense(expenses[3])) // Output: Car Note - $200 (Bill, Paid)
// console.log(describeExpense(expenses[5])) // Output: Insurance - $1000 (Bill, Not Paid)

// console.log(getPriority(expenses[1])) // Output: Paid
// console.log(getPriority(expenses[2])) // Output: Unpaid
// console.log(getPriority(expenses[5])) // Output: Pay First


console.log(getUnpaidTotal(expenses)) // Output: The total amount of unpaid expenses is $1037 dollars.

// console.log(getUnpaid(expenses))

// console.log(variableExpenses(expenses));

// console.log(listExpenses(expenses));

// console.log(getTotal(expenses)); 

// console.log(fixedExpense(expenses[1]));

// console.log(cheapExpense(expenses[3]));