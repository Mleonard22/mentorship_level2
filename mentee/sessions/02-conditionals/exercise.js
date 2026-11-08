
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
} else if ( orderTotal >= 500 ) {
    shippingCost = 0;
} else {
  shippingCost = 15;
}

let label = shippingCost === 0 ? "Free shipping" : `Shipping: $${shippingCost}`;

console.log(label);
