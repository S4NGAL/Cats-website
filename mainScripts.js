const rpsButtonContainer = document.querySelector("#rps_button_container");
const rpsButton = document.getElementById("rps_button");
rpsButton.addEventListener("click", function(){
    openRpsPage();
});

function openRpsPage() {
    window.open("./pages/rock_paper.html","_self");
}


const sketchButton = document.getElementById("sketch_button");

sketchButton.addEventListener("click", function(){
    window.open("https://s4ngal.github.io/Etch-a-Sketch/");
});