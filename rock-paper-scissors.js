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
    if (userSelection === computerSelection) {            // if user == computer //
        return "It's a Tie! Go figure.";            // result = tie //
    } else if (playerSelection === 'scissors') && computerSelection === 'scissors')


    // 
    if (userSelection === "rock") {
        if (computerSelection === "paper") {
            return "You Lose! Rock beats Paper! To the dungeon you go.";
        } else {
            return "You Won!";
        }
        if (userSelection === "paper") {
            if (computerSelection === "scissors") {
                return "You Lose! Paper beats Scissors! Activating trapdoor...";
            } else {
                return "You Win! Have a cookie.";
            }
        }
        if (userSelection === "scissors") {
            if (computerSelection === "rock") {
                return "You Lose! Better find a hiding spot!";
            } else {
                return "You Win!"
            }
        }
     } //
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