let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = function() {
    return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = function(target, guess) {
    return Math.abs(target - guess);
}

const compareGuesses = function(humanGuess, computerGuess, targetNumber) {
    const humanDifference = getAbsoluteDistance(targetNumber, humanGuess);
    const computerDifference = getAbsoluteDistance(targetNumber, computerGuess);
    return humanDifference <= computerDifference
}

const updateScore = function(winner) {
    if (winner === "human") {
      humanScore++;

    } else if (winner === "computer") {
      computerScore++;
    }
}

const advanceRound = function() {
    currentRoundNumber++;
}