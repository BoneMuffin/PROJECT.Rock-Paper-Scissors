// text showing 'pick one' in the console //
console.log("Pick one!");

// the user inputs a text //
const userHand = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput == "rock" || userInput == "paper" || userInput == "scissors") {
        return userInput;
    } else {
        console.log ("You should only pick between rock, paper and scissors");
    }
};

//input needs to be stored inside a var //


// randomize the computer's choice //
const getComputerChoice = () => {
    constRandomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
};

// compare results with ELSE and IF statements //
const winnerIs = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) { // if user == computer //
        return "It's a Tie! Go figure.";            // result = tie //
    }

    // log different messages depending on results //
    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return "You Lose! Paper beats Rock! To the dungeon you go.";
        } else {
            return "You Won!";
        }
        if (userChoice === "paper") {
            if (computerChoice === "scissors") {
                return "You Lose! Paper beats Scissors! Activating trapdoor...";
            } else {
                return "You Win! Have a well earned cookie.";
            }
        }
        if (userChoice === "scissors") {
            if (computerChoice === "rock") {
                return "You Lose! Better find a hiding spot!";
            } else {
                return "You Win!"
            }
        }
     }
    };

// back to beginning for new inputs from both players, basically a loop //
function playRound(playerSelection, computerSelection) {

    }
        


    // print the result //
    // ask if they want to play again //
    // if answer is no: //
    // break loop //

        // end //
    // print "thank you for playing" //
    // exit //


// add a score //