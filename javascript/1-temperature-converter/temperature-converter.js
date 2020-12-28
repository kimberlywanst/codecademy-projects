// Set today's forecast temperature in Kelvin as constant variable
const kelvin = 293;
console.log(`Temperature in Kelvin: ${kelvin}K`);

// Converts Kelvin to Celsius
const celsius = kelvin - 273;
console.log(`Temperature in Celsius: ${celsius}'C`);

// Converts Celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// Round down
fahrenheit = Math.floor(fahrenheit);
console.log(`Temperature in Fahrenheit: ${fahrenheit}'F`);

// Converts Celsius to Newton
let newton = Math.floor(celsius * (33/100));
console.log(`Temperature in Newton: ${newton}N`);