
// A
function isEven(n) {
    //B
    return n % 2 === 0;
//C
}
//D
console.log(isEven(4));
//E
console.log(isEven(7));







// From make js:

function calculateTip(bill, percentage) {
  return (bill * percentage) / 100;
}

function calculateTotal(bill, tip) {
  return bill + tip;
}

const splitBill = (total, people) => total / people;

function format(amount) {
  return `$${amount}`;
}

const bill = 10;
const tip = calculateTip(bill, 100);
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


let tipRating = isGoodTip(tip) ? "Generous" : "Standard";


console.log(tipRating);