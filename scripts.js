const modal = document.querySelector('.modal')
const buttons = document.querySelectorAll('.btn-player');
const resultText = document.querySelector('.result-text')
const pScore = document.querySelector('.p-score');
const cScore = document.querySelector('.c-score');
const modalText = document.querySelector('.modal-text');
const playerChoice = document.querySelector('.player-choice');
const computerChoice = document.querySelector('.computer-choice');
let playerScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let choices = [
        'Rock',
        'Paper',
        'Scissor'
    ]
    let random = Math.floor(Math.random()*choices.length);
    return choices[random]
}

function playRound(playerSelection, computerSelection){

    playerChoice.setAttribute('src', `./images/${playerSelection}.png`);
    computerChoice.setAttribute('src', `./images/${computerSelection}-pc.png`);

    if (playerSelection == 'Rock' && computerSelection == 'Scissor'){
        playerScore ++;
        return `You Win! ${playerSelection} beats ${computerSelection}.`
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Rock'){
        playerScore ++;
        return `You Win! ${playerSelection} beats ${computerSelection}.`
    }
    else if (playerSelection == 'Scissor' && computerSelection == 'Paper'){
        playerScore ++;
        return `You Win! ${playerSelection} beats ${computerSelection}.`
    }
    else if(playerSelection == computerSelection){
        return `Draw! both chose ${computerSelection}.`
    }
    else {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}.`
    }
}

function winnerReport(){
    if (playerScore > computerScore){
        modalText.textContent = 'Sheeesh, you are the winner. Congratulations! ';
    }
    else{
        modalText.textContent = 'What a shame, you lose this game. ';
    }
    if(playerScore >= 5 || computerScore >= 5){
        modal.style.display = "block";
    }
}

function game(choice){
    round = playRound(choice, getComputerChoice())
    resultText.textContent = round;
}

buttons.forEach((button) => {
    button.addEventListener('click', function (e){
        game(button.attributes[1].value)
        pScore.textContent = playerScore;
        cScore.textContent = computerScore;
        if (playerScore == 5 || computerScore == 5){
            winnerReport();
        }
});
});