function toggleRules(){
console.log("hello");
}

alert("what up");

if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", startGame())
}   else {
    startGame()
}

function startGame() {
    let timer = document.getElementById("score");
    timer = --;
}



