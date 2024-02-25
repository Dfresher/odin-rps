function getPlayerChoice() {
    keepGoing = true;
    let playerChoice
    while (keepGoing) {
        let playerPrompt = prompt("Rock, Paper or Scissors?");
        if (typeof(playerPrompt) === "string" || playerPrompt instanceof String) {
            playerChoice = playerPrompt.toLowerCase();
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
    let result;
    if (playerChoice === 'rock' && computerChoice === 'scissors' || playerChoice === 'paper' && computerChoice === 'rock' ||playerChoice === 'scissors' && computerChoice === 'paper') {
        result = 'The winner of this round is the player!'
    } else if (playerChoice === computerChoice) {
        result = 'This round ends in a draw!'
    } else {
        result = 'The winner of this round is the computer!'
    }
    return result;
}

for (let i = 0; i < 5; i++) {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    console.log(playRound(playerChoice, computerChoice));
}
