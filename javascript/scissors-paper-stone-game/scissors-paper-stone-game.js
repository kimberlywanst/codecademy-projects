const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();

    if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
      return userInput;

    } else {
      console.log("Invalid item. Please choose one of the following: \n \n 'rock', 'scissors', 'papeper'");
    }
  };

  const getComputerChoice = function() {
    randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
      case 0:
        return "rock";
        break;

      case 1:
        return "paper";
        break;

      case 2:
        return "scissors";
        break;

      default:
        return "error";
        break;
    }
  }

  const determineWinner = function(userChoice, computerChoice) {
     if (userChoice === "bomb") {
      return "Secret bomb activated! You won the game!";
    }

    if (userChoice === computerChoice) {
      return "The game is a tie!";
    }

    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "Oh no, the computer won the game!";

      } else {
        return "Yay! You won the game!";
      }
    }

    if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "Oh no, the computer won the game!";

      } else {
        return "Yay! You won the game!";
      }
    }

    if (userChoice === "scissors") {
      if(computerChoice === "rock") {
        return "Oh no, the computer won the game!";

      } else {
        return "Yay! You won the game!";
      }
    }
  }

  const playGame = function() {
    const userChoice = getUserChoice("paper");
    const computerChoice = getComputerChoice();
    console.log(`You chose ${userChoice}.\n`);
    console.log(`Computer chose ${computerChoice}.\n`);
    console.log(determineWinner(userChoice, computerChoice));
  }

  playGame();