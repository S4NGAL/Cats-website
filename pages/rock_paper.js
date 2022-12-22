const moves = ["rock", "paper", "scissors"]

Math.floor(Math.random() * 4);


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
                    return "Rock equals Rock no winner";
                case "paper":
                    return "Rock get lost against Paper Player lose";
                case "scissors":
                    return "Rock breaks Scissors Player Wins";
            }
            break;
        
        case "paper":
            switch (cs) {
                case "paper":
                    return "Paper equals paper no winner";
                case "rock":
                    return "Paper beats Rock Player wins";
                case "scissors":
                    return "scissors cuts paper Player LOSE";
            }
            break;
        
        case "scissors":
            switch(cs){
                case "scissors":
                    return "Scissors equal to Scissors no winner";
                case "rock":
                    return "Rock breaks scissors Player LOSE";
                case "paper":
                    return "Scissors cuts paper Player Wins";
            }

    }
}

console.log(playRound(getComputerChoice(), getComputerChoice()));