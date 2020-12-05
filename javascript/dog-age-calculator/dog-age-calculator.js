// Set my age as a human
const myAge = 20;

// First two years of dog's life count as 10.5 dog years each
let earlyYears = 2;
earlyYears *= 10.5;

// Remaining years after accounting first two dog years
let laterYears = myAge - 2;

// Each remaining year equates to 4 dog years
laterYears *= 4;

console.log(`First two dog years = ${earlyYears}`);
console.log(`Remaining dog years = ${laterYears}`);

// My human age in dog years
let myAgeInDogYears = earlyYears + laterYears;

// Set my name to lowercase
const myName = "Anna".toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);