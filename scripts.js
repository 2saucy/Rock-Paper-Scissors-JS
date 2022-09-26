function getComputerChoice(){
    let choices = [
        'rock',
        'paper',
        'scissor'
    ]
    let random = Math.floor(Math.random()*choices.length);
    return choices[random]
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == 'rock' && computerSelection == 'scissor'){
        return `You Win! ${playerSelection} beats ${computerSelection}.`
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock'){
        return `You Win! ${playerSelection} beats ${computerSelection}.`
    }
    else if (playerSelection == 'scissor' && computerSelection == 'paper'){
        return `You Win! ${playerSelection} beats ${computerSelection}.`
    }
    else if(playerSelection == computerSelection){
        return `Draw! both chose ${computerSelection}`
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`
    }
}

function game(){
    let playerSelection, computerSelection, playerScore=0, computerScore=0, round;

    /* Loop 5 rounds */
    for(i=1; i<=5; i++){
        playerSelection = prompt("Rock, paper or scissor?: ");
        computerSelection = getComputerChoice();
        round = playRound(playerSelection.toLowerCase(), computerSelection)
        console.log(round);
        if (round.includes('Win')){
            playerScore += 1
        }
        else if (round.includes('Lose')){
            computerScore += 1
        }    
    }

    /* Winner Report */
    if (playerScore > computerScore){
        console.log('Sheeesh, you are the winner. Congratulations! ')
    } else if (playerScore < computerScore){
        console.log('What a shame, you lose this game. ')
    }else {
        console.log('This is an unexpected draw. Nice try, i guess.')
    }
}

game()