const character = document.getElementById("character");
const block = document.getElementById("block");
const beginBtn = document.getElementById("beginBtn")
const restartBtn = document.getElementById("restartBtn")

let currentScore = 0;

function jump() {
    if(character.classList != "animate"){
    character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}

function begin() {
    block.classList.add("animate1");
}

 window.addEventListener("keydown",jump);
 beginBtn.addEventListener("click",() => {
    begin();
    updateScoreFunction();
 });

 let gameOver = false;
 var checkLoss = setInterval(function(){
     let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
     let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
     if(blockLeft<20 && blockLeft>0 && characterTop >=130) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("You Lost! You've reached a score of: " + currentScore);
        gameOver = true;
     }

 },10);

let updateScoreFunction = function() {
 setInterval(function() {
    if(!gameOver) {
    currentScore++;
    document.getElementById("Score").innerHTML = "Current Score: " + currentScore;
    }
},1000);
}

restartBtn.addEventListener("click", () => {
        location.reload();
        return false;
})