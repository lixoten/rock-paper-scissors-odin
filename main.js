const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const possibleMoveArray = [ROCK, PAPER, SCISSORS];

function getComputerChoice() {

    let randNumber = Math.random() * 3;
    randNumber = Math.ceil(randNumber);

    return possibleMoveArray[randNumber - 1]
}

function playRound(playerSelection , computerSelection, currentRound) {

    console.log(`**** Round ${currentRound} ****`)
    console.log(`--- Move by the player:  ${playerSelection}`)
    console.log(`--- Move by the computer:  ${computerSelection}`)

    if (!possibleMoveArray.includes(playerSelection)) {
        return `Invalid Move : ${playerSelection}`;
    }


    if (playerSelection === computerSelection) {
        tieCount++;
        return "Tie try again";
    }

    const explanation = explainWin(playerSelection, computerSelection);

    if ((playerSelection === ROCK && computerSelection === SCISSORS) ||
        (playerSelection === PAPER && computerSelection === ROCK) ||
        (playerSelection === SCISSORS && computerSelection === PAPER)) {
        playerWins++;
        return `Player Wins: ${explanation}\n`;
    } else {
        computerWins++;
        return `Computer Wins: ${explanation}\n`;
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

function getUserPrompt() {
    let userPrompt = prompt("Enter your move: ").toLowerCase();

    if ((userPrompt === ROCK) ||
        (userPrompt === PAPER) ||
        (userPrompt === SCISSORS)){
        return userPrompt;
    }

    // Since I am lazy
    if (userPrompt === 'r') {
        return userPrompt = ROCK;
    } else if (userPrompt === 'p') {
        return userPrompt = PAPER;
    } else if (userPrompt === 's') {
        return userPrompt = SCISSORS;
    } else {
        return userPrompt;
    }
}

const roundsToPlay = 5;

let playerWins = 0;
let computerWins = 0;
let tieCount = 0;

for (let currentRound = 1; currentRound <= roundsToPlay; currentRound++) {
    // let playerSelection = prompt("Enter your move: ")
    let playerSelection = getUserPrompt();
    if (!possibleMoveArray.includes(playerSelection)) {
        alert (`Invalid Move : ${playerSelection} Try again`);
        --currentRound
        continue;
    }

    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection, currentRound));
}


if (computerWins > playerWins) {
    console.log(`The Computer WON`);
} else {
    console.log(`The Player WON`);
}
console.log(`Player won ${playerWins} rounds`);
console.log(`Computer won ${computerWins}  rounds`);
if (tieCount > 0) {
    console.log(`There were ${tieCount} ties`);
}