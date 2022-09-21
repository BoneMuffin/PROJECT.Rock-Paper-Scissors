let playerScore = 0
let compScore = 0
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');


// Randomize the computer's choice STEP 3 //
const getComputerChoice = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * arrOfChoices.length)
    return arrOfChoices[randomNum]
};

// Get user input //
const getUserChoice = (playerSelection) => {
    let getUserChoice = prompt("Choose your weapon!", "Rock, Paper, Scissors");
    if (getUserChoice.toLowerCase() === 'rock') {
        return getUserChoice;
    }
    else if (getUserChoice.toLowerCase() === 'paper') {
        return getUserChoice;
    }
    else if (getUserChoice.toLowerCase() === 'scissors') {
        return getUserChoice;
    }
    else { console.log('Not Valid. Start running.'); }
} 


// STEP 4, single round //
 const playRound = (playerSelection, computerSelection) => {
    console.log(playerSelection, computerSelection);
    if (playerSelection === computerSelection) { // if user == computer //
        return ("You got a tie! Go figure."); 
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++; // stands for compScore = compScore + compScore //
        return ("You lose this round! Rock beats scissors!");
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return ("You win this round! Scissors beat paper!");
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++;
        return ("You lose this round! Paper beats rock!");
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return ("You win this round! Rock beats scissors! Have a cookie.");
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++;
        return ("You lose this round! Scissors beat paper! Activating trapdoor...");
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return ("You win this round! Paper beats rock!");
   }
}

// STEP 6 Loop for the rounds //
const game = () => {
  //  for (let i = 0; i < 5; i++) {
   //     const playerSelection = prompt('Choose your weapon!', 'Rock, Paper, Scissors').toLowerCase();
    //    const computerSelection = getComputerChoice();
     //   console.log(playRound(playerSelection, computerSelection));
    //}

    // print the result //
    if (playerScore > compScore) {
        return 'You won the game! GG!';
    } else if (playerScore < compScore) {
        return 'You lost the game! The computer is now basking in its own victory.';
    } else {
        return 'The game ended in a tie! Existential crisis incoming...';
    }
}

console.log(game());