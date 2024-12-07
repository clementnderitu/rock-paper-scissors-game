// Function to get the computer's choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice;

    if (randomNumber === 1) {
        computerChoice = "rock";
    } else if (randomNumber === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

// Function to get the player's choicea
function getPlayerChoice() {
    let playerChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();

    // Validate the input
    while (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        playerChoice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }

    return playerChoice;
}

// Function to determine the winner of a single round
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "tie";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "player";
    } else {
        return "computer";
    }
}

// Main function to play the game
function playGame() {
    let playerWins = 0;
    let computerWins = 0;
    const rounds = 5;

    for (let round = 1; round <= rounds; round++) {
        console.log(`Round ${round} starts!`);

        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();

        console.log(`Player chose: ${playerChoice}`);
        console.log(`Computer chose: ${computerChoice}`);

        const roundWinner = playRound(playerChoice, computerChoice);

        if (roundWinner === "player") {
            playerWins++;
            console.log("Player wins this round!");
        } else if (roundWinner === "computer") {
            computerWins++;
            console.log("Computer wins this round!");
        } else {
            console.log("This round is a tie!");
        }

        console.log(`Current score - Player: ${playerWins}, Computer: ${computerWins}`);
    }

    if (playerWins > computerWins) {
        console.log(`Player wins the game with ${playerWins} rounds!`);
    } else if (computerWins > playerWins) {
        console.log(`Computer wins the game with ${computerWins} rounds!`);
    } else {
        console.log("The game is a tie!");
    }
}

// Start the game
playGame();
