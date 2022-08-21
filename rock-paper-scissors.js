let playerScore = 0
let compScore = 0

// Get user input //
const getUserChoice = (playerSelection) => {

    if (userInput.toLowerCase() === 'rock'){
     return userInput;
     }
    else if (userInput.toLowerCase() === 'paper'){
       return userInput;
     }
     else if (userInput.toLowerCase() === 'scissors'){
       return userInput;
     }
     else {console.log('Not Valid. Start running.')}
     };

// Randomize the computer's choice //
const getComputerChoice = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * arrOfChoices.length)
    return arrOfChoices[randomNum]
};

 function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) { // if user == computer //
        return console.log('You got a tie! Go figure!');
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++; // stands for compScore = compScore + compScore //
        return console.log('You lose! Rock beats scissors!');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return console.log('You win! Scissors beat paper!');
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++;
        return console.log('You lose! Paper beats rock!');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return console.log('You win! Rock beats scissors! Have a cookie.');
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++;
        return console.log('You lose! Scissors beat paper! Activating trapdoor...');
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return console.log('You win! Paper beats rock!');
    }
}


// Loop for the rounds //
const game = () => {
    for (count = 0; count <= 5; count++) {
        const playerSelection = prompt('Choose your weapon!', 'Rock, Paper, Scissors')
        const computerSelection = getComputerChoice();
    }
     // print the result //
     if (playerScore > compScore) {
        return console.log('You won the game! GG!')
    } else if (playerScore < compScore) {
        return console.log("You lost the game! The computer is now basking in its own victory.")
    } else {
        return console.log('The game ended in a tie! Existential crisis incoming...')
    }
}
game()
