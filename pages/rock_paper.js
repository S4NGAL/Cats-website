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
                    return "Rock equals Rock no winner"
                case "paper":
                    return "Rock get lost against Paper"
                case "scissors":
                    return "Rock breaks Scissors"
            }
            break;

    }
}

