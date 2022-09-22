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
    if (playerSelection === computerSelection) { 
      const p = document.createElement('p');
      p.innerText = `It's a tie! You both picked ${playerSelection}! Go figure.`; 
      outcomeDiv.appendChild(p);
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    compScore++; // stands for compScore = compScore + compScore //
    const p = document.createElement('p');
    p.innerText = "You lose this round! Rock beats scissors!";
    outcomeDiv.appendChild(p);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
     playerScore++;
     const p = document.createElement('p');
     p.innerText = "You win this round! Scissors beat paper!";
     outcomeDiv.appendChild(p);
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    compScore++;
     const p = document.createElement('p');
    p.innerText= "You lose this round! Paper beats rock!";
    outcomeDiv.appendChild(p);
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
     playerScore++;
     const p = document.createElement('p');
     p.innerText = "You win this round! Rock beats scissors! Have a cookie.";
     outcomeDiv.appendChild(p);
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++;
        const p = document.createElement('p');
        p.innerText = "You lose this round! Scissors beat paper! Activating trapdoor...";
        outcomeDiv.appendChild(p);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      playerScore++;
      const p = document.createElement('p');
      p.innerText = "You win this round! Paper beats rock!";
      outcomeDiv.appendChild(p);
   }
};

const checkWinner = (playerScore, compScore) => {
    if (playerScore === 5) {
        const h2 = document.createElement("h2")
        h2.classList.add('player-won')
        h2.innerText = `You won ${playerScore} to ${compScore}! GG!`
        outcomeDiv.append(h2)
    }
     
    if (compScore === 5) {
        const h2 = document.createElement("h2")
        h2.classList.add('computer-won')
        h2.innerText = `You lost ${playerScore} to ${compScore}! The computer is now basking in its own victory.`
        outcomeDiv.append(h2)
    }
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
