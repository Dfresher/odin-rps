function getPlayerChoice() {
    keepGoing = true;
    while (keepGoing) {
        let playerPrompt = prompt("Rock, Paper or Scissors?");
        if (typeof(playerPrompt) === "string" || playerPrompt instanceof String) {
            let playerChoice = playerPrompt.toLowerCase();
            if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
                keepGoing = false;
            } else {
                alert('Please enter "Rock", "Paper" or "Scissors".');
            }
        } else {
            alert('Please enter "Rock", "Paper" or "Scissors".');
        }
    }
    return playerChoice;
}

function getComputerChoice() {
    let choice;
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        choice = "rock";
    } else if (randomNumber === 1) {
        choice = "paper";
    } else if (randomNumber === 2) {
        choice = "scissors";
    }
    return choice;
}

function playRound(playerChoice, computerChoice) {
    
}


const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice();

console.log(playRound(playerChoice, computerChoice));