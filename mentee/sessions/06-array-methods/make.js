// Session 06 — what you build in class, and the exercise.

console.log("make.js running");


// const users = [
//   { name: "Ana", age: 22, role: "admin", isActive: true },
//   { name: "Luis", age: 15, role: "user", isActive: false },
//   { name: "Sam", age: 31, role: "user", isActive: true },
// ];

// const names = users.map((user) => user.name); // ["Ana","Luis","Sam"]


// const adultCount = users.filter((user) => user.age >= 18).length; // 2

// // const admin = users.find((user) => user.role === "admin"); // the Ana object

// // const activeCount = users.filter((user) => user.isActive).length; // 2

// console.log(adultCount)

// .map
// .filter
// .find
// .length




const players = [
  {
    name: "Francisco Lindor",
    homeRuns: 31,
    isStarting: true,
    positions: ["Shortstop"],
  },
  {
    name: "Juan Soto",
    homeRuns: 43,
    isStarting: false,
    positions: ["Left field", "Right field"],
  },
  {
    name: "Carson Benge",
    homeRuns: 21,
    isStarting: true,
    positions: ["Right field", "Left field", "Center field"],
  },
];

function itemDescription(players) {
  const description = [];

  for (const player of players) {
    const { name, homeRuns } = player;

    description.push(`Player name: ${name} - Home Runs: ${homeRuns}`);
  }
  return description;
}

console.log(itemDescription(players));

function matchCount(player) {
  let count = 0;
  for (let i = 0; i < player.length; i++) {
    if (player[i].isStarting) {
      count += 1;
    }
  }
  return count;
}

console.log(matchCount(players));

function homeRunTotal(players) {
  let total = 0;
  for (let i = 0; i < players.length; i++) {
    total += players[i].homeRuns;
  }
  return total;
}

const totalHomeRuns = players.forEach((player) => {
  const total = 0;
  const { homeRuns } = player;

})


function findPlayer(players) {
  for (const player of players) {
    if (player.name === "Juan Soto") {
      return player;
    }
  }

  return null;
}


console.log(findPlayer(players));

function listOfPlayers(player) {
  for (let i = 0; i < player.length; i++) {
    return `#${i + 1}: ${player[i].name} - Home Runs: ${player[i].homeRuns}`;
  }
}


// > 1. Your **count** → `filter(...).length`
// > 2. Your **filter** loop → `filter`
// > 3. Your **find** loop → `find`, **with a check for not-found**
// > 4. Your **transform** loop → `map`
// > 5. **Keep your sum as a `for...of` loop.** Write a comment saying why you didn't convert it
// > 6. One **chain**: `filter` then `map`, in one statement


// more than 40 home runs task 1+2; 

// const homeRuns = players.filter((player) => player.homeRuns > 40).length



// // task 3 

// const findPlayer = players.find((player) => player.name === "Carson Benge")

// // player names task 4

// const names = players.map((player) => player.name);

// // task 5

// const totalHomeRuns = players.forEach((player) => {
//   const total = 0;
//   const { homeRuns } = player
// })

// // find number of players that are starting task 6:

// const starters = players.filter((player) => player.isStarting === true ).map((player) => player.name);


const findPlayer = players.find((player) =>
  player.name === "Carson Beng" || "Not Found" 
);


console.log(findPlayer)