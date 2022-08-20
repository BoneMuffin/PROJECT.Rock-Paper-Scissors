let playerScore = 0
let compScore = 0

// Randomize the computer's choice //
const getComputerChoice = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * arrOfChoices.length)
    return arrOfChoices[randomNumber]
};

// Function to decide the winner //
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {            // if user == computer //
        return 'You got a tie! Go figure!'
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            compScore++ // stands for compScore = compScore + compScore //
            return 'You lose! Rock beats scissors!'
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore++
            return 'You win! Scissors beat paper!'
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            compScore++
            return 'You lose! Paper beats rock!'
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            playerScore++
            return 'You win! Rock beats scissors! Have a cookie.'
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            compScore++
            return 'You lose! Scissors beat paper! Activating trapdoor...'
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore++
            return 'You win! Paper beats rock!'
        }
    }

// print the result //
// Loop for the rounds //
const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose your weapon!', 'Rock, Paper, Scissors').toLowerCase()
        const computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection)
    }

    if (playerScore > compScore) {
        return 'You won the game! GG!'
    } else if (playerScore < compScore) {
        return "You lost the game! The computer is now basking in its own victory."
    } else {
        return 'The game ended in a tie! Existential crisis incoming...'
    }
}

game()