const moves = ["rock", "paper", "scissors"]
let winsOfPlayer = 0;
let winsOfComputer = 0;

Math.floor(Math.random() * 4);

let playerChoice; let ComputerChoice;

function getComputerChoice() {
    let a = Math.floor(Math.random() * 3);
    return moves[a];
}

//ps for playerSelection cs for computerSelection
function playRound(ps, cs){
    switch (ps){
        case "rock":
            switch (cs) {
                case "rock":
                    checkStatus();
                    return "Rock equals Rock no winner";
                case "paper":
                    winsOfComputer++;
                    checkStatus();
                    return "Rock get lost against Paper Player lose";
                case "scissors":
                    winsOfPlayer++;
                    checkStatus();
                    return "Rock breaks Scissors Player Wins";
            }
            break;
        
        case "paper":
            switch (cs) {
                case "paper":
                    checkStatus();
                    return "Paper equals paper no winner";
                case "rock":
                    winsOfPlayer++;
                    checkStatus();
                    return "Paper beats Rock Player wins";
                case "scissors":
                    winsOfComputer++;
                    checkStatus();
                    return "scissors cuts paper Player LOSE";
            }
            break;
        
        case "scissors":
            switch(cs){
                case "scissors":
                    checkStatus();
                    return "Scissors equal to Scissors no winner";
                case "rock":
                    winsOfComputer++;
                    checkStatus();
                    return "Rock breaks scissors Player LOSE";
                case "paper":
                    winsOfPlayer++;
                    checkStatus();
                    return "Scissors cuts paper Player Wins";
            }
    
        }

}



function checkStatus() {

    if (winsOfComputer === 5 || winsOfPlayer === 5) {
        if(winsOfPlayer > winsOfComputer){
            playerWins();
        }else {
            computerWins();
        }
    }

    console.log("Player: " + winsOfPlayer);
    console.log("Computer: " + winsOfComputer);
}

function playerWins(){
    console.log("Player Wins!!!");
}

function computerWins(){
    console.log("Computer Wins!!!");
}

function rock(){
    let playerChoice = "rock";
    console.log(playRound(playerChoice, getComputerChoice()));
}

function paper(){
    let playerChoice = "paper";
    console.log(playRound(playerChoice, getComputerChoice()));
}

function scissors(){
    let playerChoice = "scissors";
    console.log(playRound(playerChoice, getComputerChoice()));
}

document.getElementById("btnRck").addEventListener("click", function(){
    rock();
});

document.getElementById("btnSci").addEventListener("click", function(){
    scissors();
});

document.getElementById("btnPpr").addEventListener("click", function(){
    paper();
});
