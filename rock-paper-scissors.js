// text showing 'pick one' in the console //
console.log("Hello World!");

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
// if user == computer //
       // result = tie //

const winnerIs = (userChoice, computerChoice) => {
    
}
    // compare results with ELSE and IF statements //
    function playRound(playerSelection, computerSelection) {

    }
        
// log different messages depending on results //

// back to beginning for new inputs from both players //

    // print the result //
    // ask if they want to play again //
    // if answer is no: //
    // break loop //

        // end //
    // print "thank you for playing" //
    // exit //


// add a score //

