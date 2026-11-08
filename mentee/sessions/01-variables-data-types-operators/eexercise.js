//D
const itemCount = 2;

//B
const itemPrice = 15;

// A
const cartTotal = itemCount * itemPrice;

//C
console.log(`Cart: ${itemCount} items, total ${cartTotal}`);





const name = "Notebook"; // this wont change
let price = "10"; // will change later
let stock = 12; // will change later
const isOnSale = false;

stock = stock - 2; // 10

console.log(`NoteBook: Only ${stock} left`);
console.log(typeof name, typeof price, typeof stock, typeof isOnSale);




/* Before running the result: 

This will work like a regular number becasue it is multiplication only. There is nothing special you can do so it will work like an arithematic 
*/

console.log(price * 2)


/* Before running the result:

Becasue "+" can do string concatenation, this will do that since the variable is type string

*/


console.log(price + 2)