
// // A
// function isEven(n) {
//     //B
//     return n % 2 === 0;
// //C
// }
// //D
// console.log(isEven(4));
// //E
// console.log(isEven(7));







//From make js:

function calculateTip(bill, percentage) {
  return (bill * percentage) / 100;
}

function calculateTotal(bill, tip) {// this is take the bill amount and the tip amount adding them together and giving the total.
  return bill + tip;
}

const splitBill = (total, people) => total / people; // this is taking the total amount bill plus tip and dividing the by how many people there is.

function format(amount) {
  return `$${amount}`;
}

const bill = 10;
const tip = calculateTip(bill, 15);
const total = calculateTotal(bill, tip);
const perPerson = splitBill(total, 2);

console.log(
  `Tip: ${format(tip)}, total ${format(total)}, each ${format(perPerson)} `,
);

// My Code:


function isGoodTip(percent) {
    if( percent >= 15 ) {
        return true;
    } else {
        return false;
    }
}

console.log(isGoodTip(tip))


let tipRating = isGoodTip(10) ? "Generous" : "Standard";


console.log(tipRating);



// console.log(`from tip variable: ${tip}`)
// console.log(`from total variable: ${total}`)
// console.log(`from perPperson variable: ${perPerson}`)



// Write one sentence: why does `isGoodTip` return `true`/`false` instead of returning the word? It's checking to see if the amount passed in the parameter fulfills the condition. If it does it passes true and if not it passes false. It'll also be easier to use the value of true or false to check other conditions if need be for later functions