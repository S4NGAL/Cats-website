///////////////////////// TANIMLAMALAR  BAŞLANGIÇ /////////////////////////////////////////////////////
const moves = ["rock", "paper", "scissors"]
let winsOfPlayer = 0;
let winsOfComputer = 0;
let winnerExsists = 0;
let playerChoice; let ComputerChoice;

///////////////////////// TANIMLAMALAR BİTİŞ /////////////////////////////////////////////////////




///////////////////////////// FONKSİYONLAR  BAŞLANGIÇ //////////////////////////////////////////////////

// A function that makes random choices for computer
function getComputerChoice() {
    let a = Math.floor(Math.random() * 3);
    return moves[a];
}

//ps for playerSelection cs for computerSelection 
//This function plays the game wen buttons hit
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
            break;
    
        }

}


// Compare and write the stats of computer and player
function checkStatus() {

    if (winsOfComputer === 5 || winsOfPlayer === 5) {
        if(winsOfPlayer > winsOfComputer){
            playerWins();
        }else {
            computerWins();
        }
    } else{
    console.log("Player: " + winsOfPlayer);
    console.log("Computer: " + winsOfComputer);
    console.log("###############################");
    statusText.textContent = "PLAYER: " + winsOfPlayer + " COMPUTER: " + winsOfComputer; 
        }
}

function playerWins(){
    console.log("Player Wins!!!");
    statusText.textContent = "PLAYER WİNS";
    buttonRemover();
}

function computerWins(){
    console.log("Computer Wins!!!");
    statusText.textContent = "COMPUTER WİNS";
    buttonRemover();
}

function rock(){
    let playerChoice = "rock";
    playRound(playerChoice, getComputerChoice());
}

function paper(){
    let playerChoice = "paper";
    playRound(playerChoice, getComputerChoice());
}

function scissors(){
    let playerChoice = "scissors";
    playRound(playerChoice, getComputerChoice());
}

function buttonRemover() {
    btnPpr.remove();
    btnRck.remove();
    btnSci.remove();
}



///////////////////////// FONKSİYONLAR BİTİŞ /////////////////////////////////////////////////////




///////////////////////////////// DOM TREE MANİPÜLASYONLARI  BAŞLANGIÇ ////////////////////////////////

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


const temp = document.querySelector("#temp");
const statusText = document.createElement("div");
statusText.setAttribute("style", "color:blue;");
temp.appendChild(statusText);
temp.setAttribute("style", "border: 4px solid red; margin: 10px;");

///////////////////////////////// DOM TREE MANİPÜLASYONLARI  BİTİŞ ////////////////////////////////
