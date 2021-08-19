if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    console.log("yerp")
  } else {
    // Sorry! No Web Storage support..
  }



function setScore(){
let highS = localStorage.getItem(gamerScore.innerHTML);

document.getElementById('score').value = highS;

}

function populateStorage (){
    localStorage.setItem('topScore', document.getElementById('top-score').value);
}


// const numOfHighScores = 5;
// const highScores = 'highScores'

// const highScoreString = localStorage.getItem(highScores);
// const highScore = JSON.parse(highScoreString) ?? [];

// const lowestScore = highScore[numOfHighScores - 1]?.score ?? 0;
// const name = prompt("New high score! Enter name:")
// const newScore = {score, name };

// function checkHighScore(score){
//     const highScore = JSON.parse(highScoreString) ?? [];
//     const lowestScore = highScore[numOfHighScores - 1]?.score ?? 0;

//     if(score > lowestScore) {
//         saveHighScore(score, highScores);
//         showHighScores();
//     }
// }

// function saveHighScore(score, highScore){
//     const name = prompt('You got a highscore! Enter name:');
//     const newScore = { score, name };
    
//     // 1. Add to list
//     highScores.push(newScore);
  
//     // 2. Sort the list
//     highScores.sort((a, b) => b.score - a.score);
    
//     // 3. Select new list
//     highScores.splice(numOfHighScores);
    
//     // 4. Save to local storage
//     localStorage.setItem(highScores, JSON.stringify(highScores));
// }


// function showHighScores() {
//     const highScores = JSON.parse(localStorage.getItem(highScore)) ?? [];
//     const highScoreList = document.getElementById(highScore);
    
//     highScoreList.innerHTML = highScores
//       .map((score) => `<li>${score.score} - ${score.name}`)
//       .join('');
//   }