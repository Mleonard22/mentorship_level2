// Session 07 — what you build in class, and the exercise.

console.log("make.js running");
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



// Session 07 — the line-ordering puzzle.

// console.log("parsons.js running");


//  <h1>My Tasks</h1>
//   <ul id="task-list"></ul>

const tasks = [
  { title: "Buy milk", isDone: false },
  { title: "Call bank", isDone: true },
];

// Create one <li> for a task



function createTaskElement({ title, isDone }) {
  const item = document.createElement("li");

  item.textContent = isDone ? `✓ ${title}` : title;

  return item;
}

// A   function render() {
// B   list.textContent = "";
// C   tasks.forEach((task) => {
// D   list.append(createTaskElement(task));
// E   });
// F   }
// X   list.append(createTaskElement);

// DOM Challenge — My Song List 🎵

// The goal

// Turn an array of JavaScript objects into a dynamic webpage that displays a list of songs, highlights favourite songs, and shows a summary.

// Your HTML should not contain any hardcoded songs. JavaScript should generate them using the data provided.

// 1.  HTML — Build the structure
// 2. CSS — Style your favourites
// 3. JavaScript — Bring your page to life

//Starter Data

const songs = [
  { title: "Blue", plays: 12, isFavourite: true },
  { title: "Rush", plays: 40, isFavourite: false },
  { title: "Home", plays: 3, isFavourite: false },
];

// const summary = document.getElementById("summary");
// const songContainer = document.getElementById("song-list");

function getSummary(songs) {
  totalSongs = songs.length;
  totalFavorites = songs.filter((song) => song.isFavourite).length;
  return `${totalFavorites} favourites of ${totalSongs}`;
}

// function createSongElement(song) {
//     const songElement = document.createElement("li");
//     songElement.innerText = `${song.title} - ${song.plays} plays`;
//     if(song.isFavourite) {
//         songElement.classList.add("favourite");
//     }

//     return songElement;
// }

function appendSongElement(song, container) {
  container.append(song, container);
}

// function renderSongs(songs, summary, container) {
//     summary.innerText = getSummary(songs);
//     songs.forEach((song) => appendSongElement(song, container));
// }

// renderSongs(songs, summary, songContainer);

const summary = document.getElementById("summary");
const songContainer = document.getElementById("song-list");

function createSongElement({ title, plays, isFavourite }) {
  const songElement = document.createElement("li");
  songElement.textContent = `${title} - ${plays} plays`;

  if (isFavourite) {
    songElement.classList.add("favourite");
  }

  return songElement;
}

function renderSongs() {
  songContainer.textContent = "";

  if (songs.length === 0) {
    summary.textContent = "Nothing here yet";
    return;
  }

  songs.forEach((song) => {
    songContainer.append(createSongElement(song));
  });

  const favourites = songs.filter((song) => song.isFavourite).length;

  summary.textContent = `${favourites} favourites of  ${songs.length}`;
}

renderSongs();
