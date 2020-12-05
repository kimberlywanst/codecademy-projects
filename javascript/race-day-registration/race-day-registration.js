let raceNumber = Math.floor(Math.random() * 1000);

// Check if registered early
const registeredEarly = false;
const age = 30;

// Assign race number
if (age > 18 && isEarly === true) {
  raceNumber += 1000;
}

// Allocate race time
if (age > 18 && isEarly === true) {
  console.log(`Dear Runner ${raceNumber}, your race will begin at 9.30am. See you on the track!`);

} else if (age > 18 && isEarly !== true) {
    console.log(`Dear Runner ${raceNumber}, your race will begin at 11.00am. See you on the track!`);

} else if (age < 18) {
    console.log(`Hey there Runner ${raceNumber}, your race will begin at 12.30pm. See you on the track!`);

} else {
    console.log("See the registration desk");
}