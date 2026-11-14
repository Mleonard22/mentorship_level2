// Goal output 35

// A   const prices = [5, 10, 20];
// B   let total = 0;
// C   for (const price of prices) {
// D   total = total + price;
// E   }
// F   console.log(total);
// X   total = price;
// Y   const total = 0;


// //a 
// const prices = [5, 10, 20];
// //b
// let total = 0;
// //c
// for (const price of prices) {
//     total = total + price;
// }


// const tasks = ["Buy milk", "Call bank", "Pay rent"];

// for (let i = 0; i < tasks.length; i++) {
//   console.log(`${i + 1}. ${tasks[i]}`);
// }


const task = { title: "Buy milk", isDone: false, priority: 1 };





const { title, priority } = task;
console.log(`${title} is priority ${priority}`);