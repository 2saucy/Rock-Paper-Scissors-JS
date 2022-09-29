const modal = document.querySelector('.modal')
const buttons = document.querySelectorAll('.btn-player');
const resultText = document.querySelector('.result-text')
const pScore = document.querySelector('.p-score');
const cScore = document.querySelector('.c-score');
const modalText = document.querySelector('.modal-text');
const playerChoice = document.querySelector('.player-choice');
const computerChoice = document.querySelector('.computer-choice');

/* global variables */
let playerScore = 0;
let computerScore = 0;

/* get random choice computer side */
function getComputerChoice() {
    let choices = [
        'Rock',
        'Paper',
        'Scissor'
    ]
    let random = Math.floor(Math.random() * choices.length);
    return choices[random]
}

/* returns the result string and sum score*/
function roundResult(playerSelection, computerSelection) {
    displayChoices(playerSelection, computerSelection);
    operation = (playerSelection == 'Rock' && computerSelection == 'Scissor') || (playerSelection == 'Paper' && computerSelection == 'Rock') || (playerSelection == 'Scissor' && computerSelection == 'Paper')

    if (operation) {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}.`
    }
    else if (playerSelection == computerSelection) {
        return `Draw! both chose ${computerSelection}.`
    }
    else {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}.`
    }
}

/* play a round and shows the result */
function playRound(choice) {
    round = roundResult(choice, getComputerChoice())
    resultText.textContent = round;
}

/* set the src based on what the player and the computer chose */
function displayChoices(playerSelection, computerSelection) {
    playerChoice.setAttribute('src', `./images/${playerSelection}.png`);
    computerChoice.setAttribute('src', `./images/${computerSelection}-pc.png`);
}

/* winner msg and unhide the modal */
function modalMessage() {
    if (playerScore > computerScore) {
        modalText.textContent = 'Sheeesh, you are the winner. Congratulations! ';
    }
    else {
        modalText.textContent = 'What a shame, you lose this time. ';
    }
    if (playerScore >= 5 || computerScore >= 5) {
        modal.style.display = "block";
    }
}

/* set both scores */
function displayScore(playerScore, computerScore) {
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
}


buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        playRound(button.attributes[1].value)
        displayScore(playerScore, computerScore);
        if (playerScore == 5 || computerScore == 5) {
            modalMessage();
        }
    });
});