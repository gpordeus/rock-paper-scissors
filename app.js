let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const index = Math.floor(Math.random()*3);
    return choices[index];
}

function getFullWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function getWinAction(letter) {
    if (letter === "r") return " beats ";
    if (letter === "p") return " covers ";
    return " cut ";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = getFullWord(userChoice) + getWinAction(userChoice) + getFullWord(computerChoice) + ". You win!";
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow');}, 300);
}
function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = getFullWord(computerChoice) + getWinAction(computerChoice) + getFullWord(userChoice) + ". You lose!";
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow');}, 300);
}
function draw(userChoice, computerChoice) {
    result_div.innerHTML = getFullWord(computerChoice) + " and " + getFullWord(userChoice) + ". It's a draw!";
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('gray-glow');}, 300);
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

rock_div.addEventListener('click', function () {
    game("r");
});

paper_div.addEventListener('click', function () {
    game("p");
});

scissors_div.addEventListener('click', function () {
    game("s");
});