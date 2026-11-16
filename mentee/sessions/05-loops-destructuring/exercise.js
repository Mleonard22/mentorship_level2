// a
const scores = [72, 55, 91, 40];

 //b
let count = 0;

//c
for (const score of scores) {
    // d
    if (score >= 60) {
        // e
        count = count + 1;
    //f
    }
    //g
}

//h
console.log(count);


/*
/ home work for session 5: 

function listExpenses(expenses) {
    const allExpenses = []
    for (const expense of expenses) {
        const { cost, expenseName} = expense;
        allExpenses.push(`This is the expenese ${expenseName} and it cost $${cost} dollars.`) 
    }
    return allExpenses;
}


*/