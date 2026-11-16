
//E
let grade = "";

// B
const score = 85;

//C 
if  (score >= 90) {

// F    
    grade = "A";

//A
} else if ( score >= 80) {

//D
    grade ="B";

// G
} else {

//H
    grade = "C";
}

//J
console.log(`Grade: ${grade}`);

/*
Before you write any code, decide where the new check goes in your chain and write one sentence explaining why. Then add it, and test it with an international order of $600.:

I think the conditional could go anywhere after checking if the customer is a memeber. The conditional is unquie in that it's looking for an order that is specifially over 500 since that will make the shipping free. The only other way that this wouldn't matter is if the customer was already a member, then at the point, regardless if the order was over 500 or not  the shipping would be free
*/


let orderTotal = 600;
let country = "international";
let isMember = false;

let shippingCost;

if (isMember) {
  shippingCost = 0;
} else if (country === "local" && orderTotal > 50) {
  shippingCost = 0;
} else if (country === "local") {
  shippingCost = 5;
} else if ( orderTotal > 500 ) {
    shippingCost = 0;
} else {
  shippingCost = 15;
}

let label = shippingCost === 0 ? "Free shipping" : `Shipping: $${shippingCost}`;

console.log(label);
