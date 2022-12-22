const moves = ["rock", "paper", "scissors"]

Math.floor(Math.random() * 4);


function getComputerChoice() {
    let a = Math.floor(Math.random() * 3);
    return moves[a];
}

