// Player Selection in console //
let notice = prompt("Rock, Paper or Scissors?");

// The user inputs a text, stored inside a var //
const userSelection = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput == "rock" || userInput == "paper" || userInput == "scissors") {
        return userInput;
    } else {
        console.log ("You can only pick between rock, paper and scissors");
    }
};

let playerScore = 0
let computerScore = 0

// Randomize the computer's choice //
const getComputerChoice = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    constRandomNumber = Math.floor(Math.random() * 3);
  
    const computerSelection = arrOfChoices[constRandomNumber]
    return computerSelection
};

// Function to play round AND decide winner //
const winnerIs = (userSelection, computerSelection) => {
    if (userSelection === 'rock' && computerSelection === 'rock') {            // if user == computer //
            return "It's a tie! Go figure!";            // result = tie //
        } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
            return "It's a tie! Both picked scissors!"
        } else if (playerSelection === 'paper' && computerSelection === 'paper') {
            return "It's a tie! You both picked paper!"
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            return "You lose! Rock beats scissors!"
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            return "You win! Scissors beat paper!"
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            return "You lose! Paper beats rock!"
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            return "You win! Rock beats scissors! Have a cookie."
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            return "You lose! Scissors beat paper! Activating trapdoor..."
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            return "You win! Paper beats rock!"
        }
    };
    
    // print the result //
const playerSelection = 'rock';
const computerSelection = getComputerChoice();

const game = () => {
    for (let i = 0; i < 5; i++) {
    console.log(winnerIs(playerSelection, computerSelection));
    }
}

game();