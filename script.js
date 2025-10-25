// Simple Rock Paper Scissors Game

const choices = ["rock", "paper", "scissors"];
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const tieScore = document.getElementById("tie-score");
const resultText = document.getElementById("round-result");
const lastPlay = document.getElementById("last-play");
const resetBtn = document.getElementById("reset-btn");

let scores = { player: 0, computer: 0, tie: 0 };

function randomChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice) {
  const computerChoice = randomChoice();
  let result = "";

  if (playerChoice === computerChoice) {
    result = "tie";
    scores.tie++;
    resultText.textContent = "It's a tie 💕";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "win";
    scores.player++;
    resultText.textContent = "You win this round! 🌸";
  } else {
    result = "lose";
    scores.computer++;
    resultText.textContent = "Computer wins this round 💔";
  }

  playerScore.textContent = scores.player;
  computerScore.textContent = scores.computer;
  tieScore.textContent = scores.tie;

  lastPlay.textContent = `You: ${playerChoice} • Computer: ${computerChoice}`;
}

document.querySelectorAll(".choice").forEach(btn => {
  btn.addEventListener("click", () => playRound(btn.dataset.choice));
});

resetBtn.addEventListener("click", () => {
  scores = { player: 0, computer: 0, tie: 0 };
  playerScore.textContent = 0;
  computerScore.textContent = 0;
  tieScore.textContent = 0;
  resultText.textContent = "Make your move 💫";
  lastPlay.textContent = "";
});
