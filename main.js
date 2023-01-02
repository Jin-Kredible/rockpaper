const playerSelection = "rock";
const computerSelection = getComputerChoice();

const buttons = document.querySelectorAll(".btn");
const replay = document.querySelector(".btn-replay");
let result = document.querySelector("#result");
let compScoreDiv = document.querySelector("#compScore");
let playerScoreDiv = document.querySelector("#playerScore");

let compScore = 0;
let playerScore = 0;

function getComputerChoice() {
  let rps = ["rock", "paper", "scissors"];

  return rps[Math.floor(Math.random() * rps.length)];
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "scissors") {
        playerScore++;
        return `You Win ${playerSelection} beats ${computerSelection}`;
      } else if (computerSelection === "paper") {
        compScore++;
        return `You Lose ${computerSelection} beats ${playerSelection}`;
      } else {
        return "it's a tie";
      }
    case "paper":
      if (computerSelection === "rock") {
        playerScore++;
        return `You Win ${playerSelection} beats ${computerSelection}`;
      } else if (computerSelection === "scissors") {
        compScore++;
        return `You Lose ${computerSelection} beats ${playerSelection}`;
      }
    case "scissors":
      if (computerSelection === "paper") {
        playerScore++;
        return `You Win ${playerSelection} beats ${computerSelection}`;
      } else if (computerSelection === "rock") {
        compScore++;
        return `You Lose ${computerSelection} beats ${playerSelection}`;
      }

    default:
      return "It's tie";
  }
}

console.log(buttons);
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (playerScore < 5 && compScore < 5) {
      const playresult = playRound(button.textContent, getComputerChoice());
      result.textContent = playresult;
      playerScoreDiv.textContent = playerScore;
      compScoreDiv.textContent = compScore;
      if (playerScore === 5) {
        result.textContent = "Player Wins the GAME";
      } else if (compScore === 5) {
        result.textContent = "Computer Wins the GAME";
      }
    }
  });
});

replay.addEventListener("click", () => {
  playerScore = 0;
  compScore = 0;
  compScoreDiv.textContent = "0";
  playerScoreDiv.textContent = "0";
  result.textContent = "";
});

// console.log(playRound(playerSelection, computerSelection));
