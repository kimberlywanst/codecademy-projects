var userName = "Jane";

userName !== "" ? console.log(`Eight Ball: Hello, ${userName}. \n`) : console.log("Eight Ball: Hello!");

const userQuestion = "what is your lucky number?";

console.log(`Eight Ball: Would you like to know ${userQuestion} \n`);

const randomNumber = Math.floor(Math.random() * 8);
var eightBall = "";

// Using switch statement

switch(number) {
  case 0:
    eightBall = 'Cannot predict now';
    break;

  case 1:
    eightBall = 'It is certain';
    break;

  case 2:
    eightBall = 'My sources say no';
    break;

  case 3:
    eightBall = 'It is certain';
    break;

  case 4:
    eightBall = 'Reply hazy try again';
    break;

  case 5:
    eightBall = 'Do not count on it';
    break;

  case 6:
    eightBall = 'Outlook not so good';
    break;

  case 7:
    eightBall = 'Signs point to yes';
    break;
}

console.log(`Eight Ball: Your lucky number is ${randomNumber} -- ${eightBall}. \n`);


// Using if/ else statement

if (randomNumber === 0) {
  eightBall = 'Cannot predict now';
} else if (randomNumber === 1) {
    eightBall = 'It is certain';
} else if (randomNumber === 2) {
    eightBall = 'My sources say no';
} else if (randomNumber === 3) {
    eightBall = 'It is certain';
} else if (randomNumber === 4) {
    eightBall = 'Reply hazy try again';
} else if (randomNumber === 5) {
    eightBall = 'Do not count on it';
} else if (randomNumber === 6) {
    eightBall = 'Outlook not so good';
} else {
    eightBall = 'Signs point to yes';
}

console.log(`Eight Ball: Your lucky number is ${randomNumber} -- ${eightBall}. \n`);