const cards = Array.from(document.getElementsByClassName('card'));
const gamerScore = document.getElementById('score');
const stars = document.getElementById('star-rating');
const totalTime = document.getElementById('time');
const gameOverlays = Array.from(document.getElementsByClassName('overlays'));
const startTime = totalTime.innerHTML;
const saveKeyScore = "highscore";

const highScore = document.getElementById('top-score');
let firstCard;
let secondCard;
let hasFlippedCard = false;
let lock = false;
let matchedCards = 0;
let countFlippedCards = 0;

// game sounds
const gameMusic = new Audio("./sounds/superMarioBros.mp3");
const flipSound = new Audio("./sounds/flip.mp3");
const gameOverMusic = new Audio("./sounds/gameOver.mp3");
const victoryMusic = new Audio("./sounds/victory.mp3");

 

if(document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ()=>{
        console.log("Hibye")
        startGame();
    })
}

function countDown(){
    let nums = [3, 2, 1];
    
    for(let i=0; i<nums.length; i++){
        console.log(nums);
    }
}
 
function startGame(){
    // set to default parameters for game start
    countDown();
    // unFlipCards();

    // default settings
    
    shuffleCards();
    
    // save the user's high score to local storage
    // for every increase they get
    let scoreStr = highScore.innerHTML = localStorage.getItem(saveKeyScore);
    if(scoreStr == null) {
        highScore.innerHTML = 0;
    }   else {
        highScore.innerHTML = parseInt(scoreStr);
    }

    totalTime.innerHTML = startTime;
    gamerScore.innerHTML = 0;
    flips.innerHTML = 0;
    
    // allow the user a few seconds before
    // game start
    setTimeout(()=>{
        timeRemaining = setInterval(timer, 1000)
        cards.forEach((card, index)=>{
            card.key = index;
            card.addEventListener('click', flipCard)
        })
    }, 2000)
}

function unFlipCards() {
    // to reset the game
    cards.forEach(card=>{
        if(card.classList.contains("flipC")){
            card.classList.remove("flipC");
        }
    });
}

// function resetGame(){
//     let matchedCards = 0;
//     let countFlippedCards = 0;
// }
 
function timer(){
    // interval in startGame calls this function
    // every second
    let totalTime = document.getElementById('time');
    totalTime.innerHTML--;
    let star = document.getElementById("shtar")

    if(totalTime.innerHTML === "0"){
    gameOver();
    unFlipCards();
    totalTime.innerHTMl = totalTime.innerHTML;
    }else if(totalTime.innerHTML ==="45"){
        stars.classList.remove('star-rating');
        removeStar();
    }
}

function flipCount(){
    // if lock is true then the user
    // should not be allowed to flip 
    if (lock) return;
    let cards = Array.from(document.getElementsByClassName('card'));
        for(let i=0;i<cards.length;i++){
        cards[i].addEventListener('click', ()=>{
            flips.innerText++;
            correctMatch = flips.innerText;
            
        // star rating to reflect users performance
        let stars = Array.from(document.getElementsByClassName('far fa-star'));

        if(flips.innerHTML > "1"){
            console.log("uh")
            
        }
        });
    }
}
 
function shuffleCards(){
    // assigning a random number to each card
    // and then sorting the cards in order
    // of this random number
    for(let i=0;i<cards.length;i++){
        randN = Math.round(Math.random()*(15));
        console.log("number is",randN)
        cards[i].style.order = randN;
    }
}
 


let flippedCard = false;

function flipCard(){
    // "flip" cards by adding the flipC
    // class to each card that is 'clicked'
    
    // cannot double click on card
    if(firstCard?.key === this.key) return;
    if(lock) return;
    flips.innerText++;
    this.classList.add('flipC');
    flipSound.play();
    gameMusic.play();
    
    if(!flippedCard){
        // first card
        flippedCard = true;
        firstCard = this;
        firstCard.removeEventListener('click', flipCount);
        
    }else {
        // second card
        flippedCard = false;
        secondCard = this;
        flipSound.play();
        lock = true;
        
        // check if cards match
        if(firstCard.childNodes[1].src === secondCard.childNodes[1].src){
            // correctMatch();
            lock = false;
            increaseScore();
            matchedCards++;
            
            // match all pairs to win
            if (matchedCards == 8){
                console.log("game won");
                victory();
            }
        
        } else {
            incorrectMatch();
            firstCard.addEventListener('click', flipCard);
            secondCard.addEventListener('click', flipCard);
        }
    }
}

// done.addEventListener('click', flipCard, flipCount);

function correctMatch() {
    // events if cards match
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    firstCard = null;
}
 
function incorrectMatch(){
    // events if cards mismatch
    lock = true;
    setTimeout(()=>{
    firstCard.classList.remove('flipC');
    secondCard.classList.remove('flipC');
    firstCard = null;

    lock = false;
    }, 1000);
    // firstCard.addEventListener('click', flipCard);
    // secondCard.addEventListener('click', flipCard);
}
 
function increaseScore(){
    // increase a users score by targeting the 
    // necessary HTML elements
    let gamerScore = document.getElementById('score')
    const newScore = parseInt(gamerScore.innerHTML) + 10;
    gamerScore.innerHTML = newScore;

    // updating the users high score
    if(gamerScore.innerHTML > highScore.innerHTML){
        highScore.innerHTML = gamerScore.innerHTML;
        localStorage.setItem(saveKeyScore, highScore.innerHTML);
    }
    
}

function gameOver(){
    // must clear interval to clear/stop
    // the timer interval
    clearInterval(timeRemaining);
    gameMusic.pause();
    gameOverMusic.play();
    // game over overlay display
    let timeUp = document.getElementById('game-over');
    setTimeout(()=>{
        timeUp.classList.add('visible');
        console.log("game over")   
    }, 2000);

    //  checkHighScore(account.score);

}

 
function victory(){
    let gameFinish = document.getElementById('victory');
    
    gameMusic.pause();
    victoryMusic.play();
    
    // victory overlay display
    gameFinish.classList.add('visible');
    clearInterval(timeRemaining);
    unFlipCards();
    console.log("Victory");
}

function restart(){
    let gameOverlay = document.getElementById('game-over');
    let victoryOverlay = document.getElementById('victory');
    
    // click to restart game
    
    // to allow end music to play out
    setTimeout(()=>{
    gameOverlay.classList.remove('visible');
    victoryOverlay.classList.remove('visible');
    startGame();
    }, 7000);
    
    
}

// event listener to remove each overlay as they appear
gameOverlays.forEach(overlay=>overlay.addEventListener('click', restart));

function menuToggle(){
    $("button").addEventListener('click',function(){
        $(".game-rules").toggleClass();
    })
}

