const weather = {
  city: "Lisbon",
  days: [
    { date: "Mon", condition: "Sunny" },
    { date: "Tue", condition: "Cloudy" },
  ],
};


//A
const days = weather.days;


//B
const tuesday = days[1];

//C
console.log(tuesday.condition);


// modify task:

function changeDay(day) {
    let existingDay = day.days[0].date;
    console.log(existingDay)

    existingDay.date = "Fri"
    
    return existingDay
} 

console.log(changeDay(weather))
