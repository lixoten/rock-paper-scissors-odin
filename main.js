
const container = document.querySelector('#container');

const ROUNDS_TO_PLAY = 5;
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const possibleMoveArray = [ROCK, PAPER, SCISSORS];

let scoreBoardIsUp = false;
let currentRound = 0;
let playerWins = 0;
let computerWins = 0;
let tieCount = 0;

startGame();

function startGame() {
    scoreBoardIsUp = false;
    currentRound = 0;
    playerWins = 0;
    computerWins = 0;
    tieCount = 0;
    scoreBoard();
    gameButtons();
}

function getComputerChoice() {
    let randNumber = Math.random() * 3;
    randNumber = Math.ceil(randNumber);

    return possibleMoveArray[randNumber - 1];
}

function gameButtons () {
    const containerBtn = document.createElement("div");
    containerBtn.setAttribute('class', 'container-btns');
    container.appendChild(containerBtn);

    const rockBtn = document.createElement("button");
    rockBtn.id = "rock";
    rockBtn.textContent = "Rock";
    rockBtn.addEventListener('click', () =>{
        playRound("rock");
    });

    const paperBtn = document.createElement("button");
    paperBtn.id = "paper";
    paperBtn.textContent = "Paper";
    paperBtn.addEventListener('click', () =>{
        playRound("paper");
    });

    const scissorsBtn = document.createElement("button");
    scissorsBtn.id = "scissors";
    scissorsBtn.textContent = "Scissors";
    scissorsBtn.addEventListener('click', () =>{
        playRound("scissors");
    });

    containerBtn.appendChild(rockBtn);
    containerBtn.appendChild(paperBtn);
    containerBtn.appendChild(scissorsBtn);
}

function scoreBoard() {
    container.textContent = "";
    const h1Board = document.createElement("h1");
    h1Board.setAttribute("class", "scxxxore-board");
    h1Board.textContent = "Game: Rock-Paper-Scissors";

    const scoreBoard = document.createElement("div");
    scoreBoard.setAttribute("class", "score-board");

    const playerScoreBox = document.createElement("div");
    playerScoreBox.setAttribute("class", "score-box");

    const playerScoreTitle = document.createElement("div");
    playerScoreTitle.setAttribute("class", "score-title");
    playerScoreTitle.textContent = "Player";

    const playerScoreValue = document.createElement("div");
    playerScoreValue.setAttribute("class", "score-value");
    playerScoreValue.textContent = "0";

    const vsLabel = document.createElement("div");
    vsLabel.setAttribute("class", "vs-box");
    vsLabel.textContent = "VS";

    const computerScoreBox = document.createElement("div");
    computerScoreBox.setAttribute("class", "score-box");

    const computerScoreTitle = document.createElement("div");
    computerScoreTitle.setAttribute("class", "score-title");
    computerScoreTitle.textContent = "Computer";

    const computerScoreValue = document.createElement("div");
    computerScoreValue.setAttribute("class", "score-value");
    computerScoreValue.textContent = "0";

    container.appendChild(h1Board);
    container.appendChild(scoreBoard);

    scoreBoard.append(playerScoreBox);
    playerScoreBox.appendChild(playerScoreTitle);
    playerScoreBox.appendChild(playerScoreValue);

    scoreBoard.appendChild(vsLabel);

    scoreBoard.append(computerScoreBox);
    computerScoreBox.appendChild(computerScoreTitle);
    computerScoreBox.appendChild(computerScoreValue);
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    if (!scoreBoardIsUp) {
        scoreBoardIsUp = true;
        const noticeArea = document.createElement("div");
        noticeArea.setAttribute('class', "notice-area");
        container.appendChild(noticeArea);
    }

    const noticeArea = document.querySelector(".notice-area");

    currentRound++;

    const explanation = explainWin(playerSelection, computerSelection);
    let msg = "";

    if (playerSelection === computerSelection) {
        tieCount++;
        currentRound--;
        msg = `--- Tie try again`;
    } else if ((playerSelection === ROCK && computerSelection === SCISSORS) ||
        (playerSelection === PAPER && computerSelection === ROCK) ||
        (playerSelection === SCISSORS && computerSelection === PAPER)) {
        const scoreValues  = document.querySelectorAll(".score-value");
        const playerScoreValue = scoreValues[0];
        playerScoreValue.textContent = ++playerWins;

        msg = `Player Wins: ${explanation}\n`;
    } else {
        const scoreValues  = document.querySelectorAll(".score-value");
        const computerScoreValue = scoreValues[1];
        computerScoreValue.textContent = ++computerWins;

        msg = `Computer Wins: ${explanation}\n`;
    }
    const p4 = document.createElement("p");
    p4.textContent = msg;
    noticeArea.append(p4);

    if (currentRound === ROUNDS_TO_PLAY){
        gameResults();
    }
}

function explainWin(playerSelection, computerSelection) {
    if ((playerSelection === ROCK && computerSelection === SCISSORS) ||
        (playerSelection === SCISSORS && computerSelection === ROCK)) {
        return "Rock breaks Scissors";
    }
    if ((playerSelection === ROCK && computerSelection === PAPER) ||
        (playerSelection === PAPER && computerSelection === ROCK)) {
        return "Paper covers Rock.";
    }
    if ((playerSelection === PAPER && computerSelection === SCISSORS) ||
        (playerSelection === SCISSORS && computerSelection === PAPER)) {
        return "Scissors cuts Paper";
    }
}

function gameResults() {
    const btns1 = document.querySelector('#rock');
    const btns2 = document.querySelector('#paper');
    const btns3 = document.querySelector('#scissors');
    btns1.setAttribute("disabled", "disabled");
    btns2.setAttribute("disabled", "disabled");
    btns3.setAttribute("disabled", "disabled");
    btns1.setAttribute('class', "button-disabled");
    btns2.setAttribute('class', "button-disabled");
    btns3.setAttribute('class', "button-disabled");

    const gameResultContainer = document.createElement('div');
    gameResultContainer.setAttribute('class', "game-results");
    container.appendChild(gameResultContainer);

    const img = document.createElement("img");
    img.setAttribute('alt', 'player icon image');
    if (computerWins > playerWins) {
        img.src = "https://img.icons8.com/?size=80&id=GBu1KXnCZZ8j&format=png";
    } else {
        img.src = "https://img.icons8.com/?size=80&id=1fIAQM3MFEV1&format=png";
    }
    gameResultContainer.append(img);

    const results = document.createElement("h1");
    results.textContent =  computerWins > playerWins ? `Winner: Computer` : `Winner: Player`;
    gameResultContainer.append(results);

    const score1 = document.createElement("p");
    score1.textContent = `Player won ${playerWins} rounds`;
    const score2 = document.createElement("p");
    score2.textContent = `Computer won ${computerWins}  rounds`;
    gameResultContainer.appendChild(score1);
    gameResultContainer.appendChild(score2);

    // if (tieCount > 0) {
    //     const tie = document.createElement("p");
    //     tie.textContent = `There were ${tieCount} ties`;
    //     gameResultContainer.appendChild(tie)
    // }

    const playAgain = document.createElement("button");
    playAgain.textContent =  "Play again";
    playAgain.addEventListener('click', () => {
        startGame();
    });
    gameResultContainer.append(playAgain);

    const scoreBoxes = document.querySelectorAll('.score-box');
    if (computerWins > playerWins) {
        container.classList.add("robot-cursor");
        scoreBoxes[1].style = "background-color: #00ff00;";
        scoreBoxes[0].style = "background-color: #ff6347;";
    } else {
        container.classList.add("player-cursor");
        scoreBoxes[0].style = "background-color: #00ff00;";
        scoreBoxes[1].style = "background-color: #ff6347;";
    }
}