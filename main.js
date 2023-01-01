function getComputerChoice() {
  let rps = ["rock", "paper", "scissors"];

  return rps[Math.floor(Math.random() * rps.length)];
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "scissors") {
        return `You Win ${playerSelection} beats ${computerSelection}`;
      } else if (computerSelection === "paper") {
        return `You Lose ${computerSelection} beats ${playerSelection}`;
      } else {
        return "it's a tie";
      }
    case "paper":
      if (computerSelection === "rock") {
        return `You Win ${playerSelection} beats ${computerSelection}`;
      } else if (computerSelection === "scissors") {
        return `You Lose ${computerSelection} beats ${playerSelection}`;
      }
    case "scissors":
      if (computerSelection === "paper") {
        return `You Win ${playerSelection} beats ${computerSelection}`;
      } else if (computerSelection === "rock") {
        return `You Lose ${computerSelection} beats ${playerSelection}`;
      }

    default:
      return "It's tie";
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
