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
/*
for (let i = 0; i < 5; i++) {
  let p = prompt("Enter Pick");
  console.log(play(p, getComputerChoice()));
} 
*/

const btns = document.querySelectorAll(".btns > button");
const results = document.querySelector(".results");
const plscr = document.querySelector(".plscr");
const cmpscr = document.querySelector(".cmpscr");
const reset = document.querySelector(".reset");
const winn = document.querySelector(".winner");
let s = [0, 0];
btns.forEach((b) => {
  b.addEventListener("click", function (e) {
    let p = e.target.classList[0];
    let r = play(p, getComputerChoice());
    //updates scores
    if (r === "player") s[0]++;
    else if (r === "computer") s[1]++;

    //prints round winner
    results.textContent = r;

    //prints scores
    plscr.textContent = `Player: ${s[0]}`;
    cmpscr.textContent = `Computer: ${s[1]}`;

    //stops after reaching five
    if (s[0] > 4 || s[1] > 4) {
      btns.forEach((bs) => {
        bs.disabled = true;
      });
      if (s[0] === 5) winn.textContent = "YOU WON!";
      else winn.textContent = "YOU LOST!";
      reset.classList.remove("opac");
    }
  });
  reset.addEventListener("click", function (e) {
    s[0] = 0;
    s[1] = 0;
    btns.forEach((bs) => {
      bs.disabled = false;
    });
    plscr.textContent = `Player: 0`;
    cmpscr.textContent = `Computer: 0`;
    reset.classList.add("opac");
    winn.textContent = "";
    results.textContent = "";
  });
});
