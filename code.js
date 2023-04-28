function getComputerChoice() {
  let r = Math.floor(Math.random() * 3) + 1;
  let pick = r == 1 ? "rock" : r == 2 ? "paper" : "scissors";
  return pick;
}
function play(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let score = "";
  if (playerSelection == "rock") {
    score =
      computerSelection == "scissors"
        ? "player"
        : computerSelection == "paper"
        ? "computer"
        : "draw";
  } else if (playerSelection == "paper") {
    score =
      computerSelection == "scissors"
        ? "computer"
        : computerSelection == "rock"
        ? "player"
        : "draw";
  } else if (playerSelection == "scissors") {
    score =
      computerSelection == "paper"
        ? "player"
        : computerSelection == "rock"
        ? "computer"
        : "draw";
  } else score = "error";
  return score;
}
for (let i = 0; i < 5; i++) {
  let p = prompt("Enter Pick");
  console.log(play(p, getComputerChoice()));
}
