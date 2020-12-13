let playerPoints = 0;
let computerPoints = 0;

//pc randomply chooses between 'rock', 'paper', 'scissors' ---===---===---===---===
function computerPlay (){
    let result = Math.floor((Math.random() * 3) + 1);

    switch (result){
        case 1:
            result = 'rock';
            break;

        case 2:
            result = 'paper';
            break;
        
        case 3:
            result = 'scissors';
            break;
    }

    return result;
}

//play 1 round of the game ---===---===---===---=== ---===---===---===---===

function playOneRound (playerSelection, computerSelection){
    let result = '';
    playerSelection.toUpperCase();
    playerSelection.toLowerCase();
    computerSelection.toUpperCase();
    computerSelection.toLowerCase();
    
    if (playerSelection === computerSelection){
        result = `It's a draw! ${playerSelection} vs ${computerSelection} are the same`;

    } else if (playerSelection == 'rock' && computerSelection == 'scissors' 
    || playerSelection == 'paper' && computerSelection == 'rock' 
    || playerSelection == 'scissors' && computerSelection == 'paper') {
        result = `Player chooses ${playerSelection}. Computer chooses ${computerSelection}. PLAYER WIN THIS ROUND!`;
        playerPoints = playerPoints + 1;
    } else {
        result = `Player chooses ${playerSelection}. Computer chooses ${computerSelection}. COMPUTER WIN THIS ROUND!`;
        computerPoints = computerPoints + 1;
    }
    return result;

}

//play one game of 5 rounds  ---===---===---===---=== ---===---===---===---===
function game (){
    let finalResult='';
    
    //ROUND ONE
    
    playerSelection = prompt('Select your move for this round', 'rock, paper or scissors?')
    
    console.log(playOneRound(playerSelection, computerPlay()) + `Payer points: ${playerPoints}, Computer points: ${computerPoints}`);

    //ROUND TWO
    
    playerSelection = prompt('Select your move for this round', 'rock, paper or scissors?')
   
    console.log(playOneRound(playerSelection, computerPlay()) + `Payer points: ${playerPoints}, Computer points: ${computerPoints}`);

    //ROUND THREE

    playerSelection = prompt('Select your move for this round', 'rock, paper or scissors?')
   
    console.log(playOneRound(playerSelection, computerPlay()) + `Payer points: ${playerPoints}, Computer points: ${computerPoints}`);

    //ROUND FOUR
    
    playerSelection = prompt('Select your move for this round', 'rock, paper or scissors?')

    console.log(playOneRound(playerSelection, computerPlay()) + `Payer points: ${playerPoints}, Computer points: ${computerPoints}`);

    //ROUND FIVE

    playerSelection = prompt('Select your move for this round', 'rock, paper or scissors?')

    console.log(playOneRound(playerSelection, computerPlay()) + `Payer points: ${playerPoints}, Computer points: ${computerPoints}`);

    //Console log the winner of the game
    if (playerPoints > computerPoints){
        finalResult = `Player wins this game with ${playerPoints} points vs computer with ${computerPoints}`;
        console.log(finalResult);
    } else {
        finalResult = `Computer wins this game with ${computerPoints} points vs player with ${playerPoints}`;
        console.log(finalResult);
    }

}

game();
