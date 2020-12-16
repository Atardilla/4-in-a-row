let playerPoints =0;
let computerPoints=0; 

let varPlayerSelection ='';
let varComputerSelection='';

const buttons = document.querySelectorAll('button');
const playerScores = document.querySelector('#playerScores');
const computerScores = document.querySelector('#computerScores');





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
    varComputerSelection = result;
    return varComputerSelection;
}

//play 1 round of the game ---===---===---===---=== ---===---===---===---===

function playOneRound (playerSelection, computerSelection){
   
   
    
    
    const showPlayerPoints = document.createElement('div');
    const showComputerPoints = document.createElement('div');
    showPlayerPoints.style.cssText = 'width: 3vw; margin: 2px;';
    showComputerPoints.style.cssText = 'width: 3vw; margin: 2px;';
    const message = document.querySelector('.message');

    
    playerSelection.toUpperCase();
    playerSelection.toLowerCase();
    computerSelection.toUpperCase();
    computerSelection.toLowerCase();
    


 


    
        if (playerSelection === computerSelection){
            message.textContent=`It's a draw! ${playerSelection} vs ${computerSelection} are the same`;
            

        } else if (playerSelection == 'rock' && computerSelection == 'scissors' 
        || playerSelection == 'paper' && computerSelection == 'rock' 
        || playerSelection == 'scissors' && computerSelection == 'paper') {
            playerPoints = playerPoints + 1;
            
            if (playerPoints >4){
                message.textContent=`PLAYER WINS THE GAME!`;
                playerPoints = 0;
                computerPoints = 0;
                showPlayerPoints.innerHTML = '<i class="fas fa-check-circle"></i>';
                playerScores.appendChild(showPlayerPoints);
                location.reload();

            } else {
                message.textContent=`Player chooses ${playerSelection}. Computer chooses ${computerSelection}. PLAYER WIN THIS ROUND!`;
            showPlayerPoints.innerHTML = '<i class="fas fa-check-circle"></i>';
            playerScores.appendChild(showPlayerPoints);

            }
           

        } else {
            computerPoints = computerPoints + 1;
             if (computerPoints >4){
                message.textContent=`COMPUTER WINS THE GAME!`;
                playerPoints = 0;
                computerPoints = 0;
                showComputerPoints.innerHTML = '<i class="fas fa-check-circle"></i>';
                computerScores.appendChild(showComputerPoints);
                location.reload();
            } else {
            
            
                message.textContent=`Player chooses ${playerSelection}. Computer chooses ${computerSelection}. COMPUTER WIN THIS ROUND!`;
            
            
            showComputerPoints.innerHTML = '<i class="fas fa-check-circle"></i>';
            computerScores.appendChild(showComputerPoints);

            }

        }
    
   


}

buttons.forEach((button) => {
    button.addEventListener('click', function settPlayerSelection() {
        varPlayerSelection = button.id;       
        console.log(button.id);
        computerPlay();
        playOneRound(varPlayerSelection, varComputerSelection);
    });    
});


