let arr = ['Rock', 'Paper', 'Scissors'];

// Get user input and format the string so that only the first letter is capitalised.
let playerChoice = prompt("Please choose rock, paper or scissors: ");
let firstLetter = playerChoice.charAt(0).toUpperCase();
playerChoice = playerChoice.slice(1).toLowerCase();
playerChoice = firstLetter + playerChoice;
console.log(`Player choice = ${playerChoice}`);

// Get computer's choice.
let computerSelection = getComputerChoice();
console.log(`Computer Choice: ${computerSelection}`);
console.log(playSingleRound(playerChoice, computerSelection));

// Computer will generate a random number between 0 and 2 and then returned it corresponding value in the array.
function getComputerChoice () {
    let choice = Math.floor(Math.random()*3);
    return arr[choice];
}

// Simulate a single round.
function playSingleRound (playerChoice, computerSelection) {
    

    // For player to win.
    if ((playerChoice === "Rock" && computerSelection === "Scissors") || (playerChoice === "Paper" && computerSelection === "Rock") || (playerChoice === "Scissors" && computerSelection === "Paper")) {
        return `You win. ${playerChoice} beats ${computerSelection}.`

    } 
    // For computer to win.
    else if ((computerSelection === "Rock" && playerChoice === "Scissors") || (computerSelection === "Paper" && playerChoice === "Rock") || (playerChoice === "Scissors" && computerSelection === "Paper")) {
        return `You lose. ${computerSelection} beats ${playerChoice}.`;
    } 
    
    // For computer and player to draw.
    else {
        return `You draw. ${computerSelection} can't beat ${playerChoice}.`;
    }

}