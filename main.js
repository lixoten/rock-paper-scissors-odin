const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";

function getComputerChoice() {
    let randNumber = Math.random() * 3;
    randNumber = Math.ceil(randNumber);

    if (randNumber === 1) {
        return "rock";
    } else if (randNumber === 2) {
        return "paper";
    } else if (randNumber === 3) {
        return "scissor";
    } else  {
        console.log("OOOPPSS11111")
        return `Opps ${randNumber}`
    }
}

function playRound(playerSelection , computerSelection) {

    console.log(`player ${playerSelection} - computer ${computerSelection}`)
    if (playerSelection === ROCK && computerSelection === SCISSOR) {
        playerWins++;
        return "playerWins"; //rock breaks scissors
    }
    if (playerSelection === ROCK && computerSelection === PAPER) {
        computerWins++;
        return "computerWins"; //paper covers rock.
    }

    if (playerSelection === PAPER && computerSelection === ROCK) {
        playerWins++;
        return "playerWins"; //paper covers rock.
    }
    if (playerSelection === PAPER && computerSelection === SCISSOR) {
        computerWins++;
        return "computerWins"; //scissors cuts paper
    }
    if (playerSelection === SCISSOR && computerSelection === PAPER) {
        playerWins++;
        return "playerWins"; //scissors cuts paper
    }
    if (playerSelection === SCISSOR && computerSelection === ROCK) {
        computerWins++;
        return "computerWins"; //rock breaks scissors
    }

    if (playerSelection === computerSelection) {
        return "Tie try again";
    }
}
let playerWins = 0;
let computerWins = 0;

let playerSelection = prompt("Make your move: ");
let computerSelection = getComputerChoice().toLowerCase();
console.log(playRound(playerSelection, computerSelection));

playerSelection = prompt("Make your move: ").toLowerCase();
computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

playerSelection = prompt("Make your move: ").toLowerCase();
computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

playerSelection = prompt("Make your move: ").toLowerCase();
computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

playerSelection = prompt("Make your move: ").toLowerCase();
computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

console.log(`Player won ${playerWins}`);
console.log(`Computer won ${computerWins}`);
if (computerWins > playerWins) {
    console.log(`The Computer WON`);
} else {
    console.log(`The Player WON`);
}