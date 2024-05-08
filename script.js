const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.textContent)
    });
});

let player_score = 0;
let computer_score = 0;

function getComputerChoice() {
    let choice;
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        choice = "Rock";
    } else if (randomNumber === 1) {
        choice = "Paper";
    } else if (randomNumber === 2) {
        choice = "Scissors";
    }
    return choice;
}


function playRound(playerChoice) {
    const computer_choice = document.querySelector(".computer-choice");
    let computerChoice = getComputerChoice();
    computer_choice.textContent = `The computer chose ${computerChoice}.`;

    const round_winner = document.querySelector('.round-winner');
    const scores = document.querySelector('.scores');
    if (playerChoice === 'Rock' && computerChoice === 'Scissors' || playerChoice === 'Paper' && computerChoice === 'Rock' || playerChoice === 'Scissors' && computerChoice === 'Paper') {
        round_winner.textContent = 'The winner of this round is the player!';
        player_score += 1;
    } else if (playerChoice === computerChoice) {
        round_winner.textContent = 'This round ends in a draw!';

    } else {
        round_winner.textContent = 'The winner of this round is the computer!';
        computer_score += 1;
    }
    scores.textContent = `Player score: ${player_score}, Computer score: ${computer_score}.`;

    if (computer_score == 5 ||  player_score == 5) {
        endGame();
    }
}

function endGame() {
    const winner = document.querySelector('.winner');
    if (player_score == 5) {
        winner.textContent = 'THE FINAL WINNER IS THE PLAYER!!!';
    } else if (computer_score == 5) {
        winner.textContent = 'THE FINAL WINNER IS THE COMPUTER!!!';
    } else {
        winner.textContent = 'THE GAME ENDS IN A DRAW';
    }
}