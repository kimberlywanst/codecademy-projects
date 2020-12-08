let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

secretMessage.pop();

secretMessage.push("to", "Program");

console.log(secretMessage.indexOf("easily"));
secretMessage[7] = "right";

secretMessage.shift();

secretMessage.unshift("Programming");

console.log(secretMessage.indexOf("get"));
secretMessage.splice(6, 5, "know");

console.log(secretMessage.join(" "));

// Programming is not about what you know it is about what you can figure out. -2015, Chris Pine, Learn to Program
