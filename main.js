let arr = ['Rock', 'Paper', 'Scissors'];
let gameType;

// Decide if the player wants a single or 5-round game.
do {
    gameType = prompt("Please enter single or multiple for the type of game you wish to play.");
    gameType = gameType.toLowerCase();
    console.log(gameType);
}
while (gameType !== "single" && gameType!=="multiple")

if (gameType === "single") {
    // Get user input and format the string so that only the first letter is capitalised.
    let playerChoice;
    let firstLetter;
    do {
        playerChoice = prompt("Please choose rock, paper or scissors: ");
        firstLetter = playerChoice.charAt(0).toUpperCase();
        playerChoice = playerChoice.slice(1).toLowerCase();
        playerChoice = firstLetter + playerChoice;
    }
    while (playerChoice !== "Rock" && playerChoice!=="Paper" && playerChoice!=="Scissors")
    
    console.log(`Player choice = ${playerChoice}`);

    // Get computer's choice.
    let computerSelection = getComputerChoice();
    console.log(`Computer Choice: ${computerSelection}`);
    console.log(playSingleRound(playerChoice, computerSelection));
} else {
    console.log(game());
}



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

// Simulate multiple rounds.
function game() {
    let computer = 0;
    let player = 0;
    let playerChoice;
    let computerSelection;
    let firstLetter;
    let winner;

    for (let i = 0; i < 5; i++) {

        do {
            playerChoice = prompt("Please choose rock, paper or scissors: ");
            firstLetter = playerChoice.charAt(0).toUpperCase();
            playerChoice = playerChoice.slice(1).toLowerCase();
            playerChoice = firstLetter + playerChoice;
        }
        while (playerChoice !== "Rock" && playerChoice!=="Paper" && playerChoice!=="Scissors")

        computerSelection = getComputerChoice()

        winner = playSingleRound(playerChoice, computerSelection);
        winner = winner.charAt(4);
        if (winner === "w") player++; else if (winner === "l") computer++;
    }

    if (computer > player) {
        return `You lose. Computer wins ${computer} - ${player}.`;
    } else if (player > computer) {
        return `You win. Player wins ${player} - ${computer}.`;
    } else {
        return `You draw ${computer} - ${player}.`;
    }
}