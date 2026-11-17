const weather = {
  city: "Lisbon",
  days: [
    { date: "Mon", condition: "Sunny" },
    { date: "Tue", condition: "Cloudy" },
  ],
};


// //A
// const days = weather.days;


// //B
// const tuesday = days[1];

// //C
// console.log(tuesday.condition);


// modify task:


// function changeDay(day) {
//     let existingDay = day.days[0];
//     //console.log(existingDay)

//     existingDay.date = "Fri"

//     return existingDay
// } 

// let changedDate = changeDay(weather)

// console.log(changedDate)



const players = [
  {
    name: "Francisco Lindor",
    homeRuns: 31,
    isStarting: true,
    qualities: { favFood: "Pizza", height: "7 ft", favColor: "Black"}
  },
  {
    name: "Juan Soto",
    homeRuns: 43,
    'is Starting': false,
    positions: ["Left field", "Right field", ["up", "down"]],
  },
  {
    name: "Carson Benge",
    homeRuns: 21,
    isStarting: true,
    positions: ["Right field", "Left field", "Center field"],
  },
];

function getLineupStatus(player) {
  // return 20
 player.homeRuns = 21;
}

// getLineupStatus(players[0]);
// console.log(players[0].homeRuns)

console.log(players[1]["is Starting"])

// console.log(getLineupStatus(players[0]))
// console.log(players[0].homeRuns)

// function describePlayer(player) {
//   return `${player.name} plays ${player.positions} and has ${player.homeRuns} home runs.`;
// }


