// Session 07 — your before-class prediction snippet.

console.log("predict.js running");



// // 3. What's `a[0].x` at the end?

// const a = [{ x: 1 }];
// const b = a;
// b[0].x = 5;

// console.log(a); // 1

// console.log(b);
// console.log(a[0].x);

// const x = [3, 4, 5];
// const y = x;


// This is what I would use in order to figure out if it's referencing the initial array or referencing a new array

// console.log(x === y); // true 




// const tasks = [
//   { title: "Buy milk", isDone: false }
// ];

// const list = document.querySelector("#task-list");

// function createTaskElement({ title, isDone }) {
// // I would need this because I referencing it somewhere else. If I wasnt I could be okay with just using it without  doing "const item"
//   const item = document.createElement("li");
//   item.textContent = isDone ? `✓ ${title}` : title;
//   return item;
// }

// function render() {
//   list.textContent = "";
//   tasks.forEach((task) => {
//     list.append(createTaskElement(task));
//   });
// }

// render();

// tasks.push({ title: "Call bank", isDone: false });
// tasks[0].isDone = true;



// const unOrderedList = document.getElementById("list"); 


// const listItem = document.createElement("li");
// listItem.textContent = "Buy milk";


// const listItem2 = document.createElement("li");
// listItem2.textContent = "Call Bank";



