let arr = ["Rock", "Paper", "Scissors"];

let buttons = document.querySelectorAll('button');
buttons = Array.from(buttons);
// console.log(buttons)

// Creating Event Listeners
let playerChoice;
let computerSelection;
let player_wins = 0;
let computer_wins = 0;

// Result Divs
let resultDiv = document.getElementById('result');
counter = document.createElement('p');
counter.innerText = `Player ${player_wins} : ${computer_wins} Computer`;
resultDiv.appendChild(counter);
let roundWinner = document.createElement('p');
roundWinner.innerText = "Play your first round! Best of five. Don't get slapped!";
resultDiv.appendChild(roundWinner);
let winner;
let loser;

buttons.forEach ((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.innerText;
        computerSelection = getComputerChoice();
        //console.log(playerChoice);
        //console.log(computerSelection);
        playRound(playerChoice, computerSelection);
        console.log(player_wins, computer_wins);

        if (player_wins >= 5 || computer_wins >= 5) {
            announceWinner();
            resultDiv.removeChild(roundWinner);
        }
        else {
            
            resultDiv.appendChild(roundWinner);
        }

    })});


// Get computers random selection.
function getComputerChoice () {
    let choice = Math.floor(Math.random()*3);
    return arr[choice];
}

// playRound function.
function playRound() {

    // If player wins.
    if ((playerChoice === "Rock" && computerSelection === "Scissors") || (playerChoice === "Paper" && computerSelection === "Rock") || (playerChoice === "Scissors" && computerSelection === "Paper")) {
        player_wins++;
        if (playerChoice === "Rock") roundWinner.innerText = "Congratulations! Your bad jokes broke those scissors in half!";
        else if (playerChoice === "Paper") roundWinner.innerText = "You chose paper and slapped the shit out of Rock to prove it. Well done!"
        else roundWinner.innerText = "You entangled paper with your scissors. Awesome!"
        counter.innerText = `Player ${player_wins} : ${computer_wins} Computer`;
        
    }

    else if ((computerSelection === "Rock" && playerChoice === "Scissors") || (computerSelection === "Paper" && playerChoice === "Rock") || (computerSelection === "Scissors" && playerChoice === "Paper")) {
        computer_wins++;
        if (computerSelection === "Rock") roundWinner.innerText = "Computer's bad jokes have made you cry. Computer wins this round.";
        else if (computerSelection === "Paper") roundWinner.innerText = "Unlucky! The computer's paper slapped the words right out of your mouth!"
        else roundWinner.innerText = "The computer's scissors have entangled you. Good luck getting out of this one!"
        counter.innerText = `Player ${player_wins} : ${computer_wins} Computer`;
        counter.innerText = `Player ${player_wins} : ${computer_wins} Computer`;
        
    }

    else 
    roundWinner.innerText = "Draw!";
    };

// announceWinner
function announceWinner() {
    resultDiv.removeChild(counter);
    winner = document.createElement('h2');

    if (player_wins === 5) {
        winner.innerText = `Congratulations! You have beaten the computer ${player_wins} - ${computer_wins} and saved the Earth!`;
    }
    else {
        winner.innerText = `You suck! The computer kicked your ass ${computer_wins} - ${player_wins} and the world has been destroyed. Your mum would be so disappointed...but you just got her killed so it doesn\'t matter anyway!`;
    }

    resultDiv.appendChild(winner);


}
