const moves = ["rock", "paper", "scissors"]
let winsOfPlayer = 0;
let winsOfComputer = 0;
let winnerExsists = 0;

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
                    console.log("Rock equals Rock no winner");
                    checkStatus();
                    break;
                case "paper":
                    winsOfComputer++;
                    console.log("Rock get lost against Paper Player lose");
                    checkStatus();
                    break;
                case "scissors":
                    winsOfPlayer++;
                    console.log("Rock breaks Scissors Player Wins");
                    checkStatus();
                    break;
            }
            break;
        
        case "paper":
            switch (cs) {
                case "paper":
                    console.log("Paper equals paper no winner");
                    checkStatus();
                    break;
                case "rock":
                    winsOfPlayer++;
                    console.log("Paper beats Rock Player wins");
                    checkStatus();
                    break;
                case "scissors":
                    winsOfComputer++;
                    console.log("scissors cuts paper Player LOSE");
                    checkStatus();
                    break;
            }
            break;
        
        case "scissors":
            switch(cs){
                case "scissors":
                    console.log("Scissors equal to Scissors no winner");
                    checkStatus();
                    break;
                case "rock":
                    winsOfComputer++;
                    console.log("Rock breaks scissors Player LOSE");
                    checkStatus();
                    break;
                case "paper":
                    winsOfPlayer++;
                    console.log("Scissors cuts paper Player Wins");
                    checkStatus();
                    break;
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
    console.log("###############################");
}

function playerWins(){
    console.log("Player Wins!!!");
    buttonRemover();
}

function computerWins(){
    console.log("Computer Wins!!!");
    buttonRemover();
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


var btnRck = document.getElementById("btnRck");
btnRck.addEventListener("click", function(){
    rock();
});

var btnSci = document.getElementById("btnSci"); 
btnSci.addEventListener("click", function(){
    scissors();
});

var btnPpr = document.getElementById("btnPpr");
btnPpr.addEventListener("click", function(){
    paper();
});

function buttonRemover() {
    btnPpr.remove();
    btnRck.remove();
    btnSci.remove();
}