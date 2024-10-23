let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1

// Write your code below:

function generateTarget(){
  return Math.floor(Math.random() * 10)
};

function compareGuesses(humanGuess, computerGuess, targetGuess){
  const humanDifference = Math.abs(targetGuess - humanGuess);
  const computerDifference = Math.abs(targetGuess - computerGuess);
  if (humanDifference > computerDifference) {
    return true
  } else{
    return false
  }
  };

const updateScore = whoWin => {
  if (whoWin === "human"){
    humanScore ++;
  } else if (whoWin === "computer"){
    computerScore ++;
  }
};

const advanceRound = () => {
  currentRoundNumber ++;
};