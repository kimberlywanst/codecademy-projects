var input = "a whale of a deal!";

// Whales only speak in vowels
const vowels = ["a", "e", "i", "o", "u"];

// To store vowels from input string
var resultArray = [];

// Iterate number count of characters
for (var i = 0; i < input.length; i++) {
  for (var j = 0; j < vowels.length; j++) {

    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);

      // Whales double their e's and u's
      if (input[i] === "e" || input[i] === "u"){
        resultArray.push(input[i]);
        }
    }
  }
}

console.log(resultArray.join("").toUpperCase());