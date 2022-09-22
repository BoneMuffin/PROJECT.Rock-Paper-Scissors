let playerScore = 0
let compScore = 0
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score');

const getComputerChoice = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * arrOfChoices.length)
    return arrOfChoices[randomNum]
};

 const playRound = (playerSelection, computerSelection) => {
    const p = document.createElement('p');
    if (playerSelection === computerSelection) { 
    p.innerText = `It's a tie! You both picked ${playerSelection}! Go figure.`; 
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    compScore++; // stands for compScore = compScore + compScore //
    p.innerText = "You lose this round! Rock beats scissors!";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
     playerScore++;
     p.innerText = "You win this round! Scissors beat paper!";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    compScore++;
    p.innerText= "You lose this round! Paper beats rock!";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
     playerScore++;
     p.innerText = "You win this round! Rock beats scissors! Have a cookie.";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
     compScore++;
    p.innerText = "You lose this round! Scissors beat paper! Activating trapdoor...";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      playerScore++;
      p.innerText = "You win this round! Paper beats rock!";
   }
   outcomeDiv.appendChild(p);
};

const checkWinner = (playerScore, compScore) => {
    const h2 = document.createElement("h2")
    if (playerScore === 5) {
        h2.classList.add('player-won')
        h2.innerText = `You won ${playerScore} to ${compScore}! GG!`
    }
     
    if (compScore === 5) {
        h2.classList.add('computer-won')
        h2.innerText = `You lost ${playerScore} to ${compScore}! The computer is now basking in its own victory.`
    }
    outcomeDiv.append(h2)
};

const updateScores = (playerScore, compScore) => {
    playerScoreSpan.innerText = `Player Score: ${playerScore}`
    computerScoreSpan.innerText = `Computer Score: ${compScore}`
}

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock'
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, compScore);
    checkWinner(playerScore, compScore)
});

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper'
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, compScore);
    checkWinner(playerScore, compScore)
});

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors'
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, compScore);
    checkWinner(playerScore, compScore)
});
