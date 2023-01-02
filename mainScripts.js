const buttonContainer = document.querySelector("#button_container");
const gameButton = document.getElementById("rps_button");
gameButton.addEventListener("click", function(){
    openGamePage();
});

function openGamePage() {
    window.open("./pages/rock_paper.html","_self");
}

