const cards = Array.from(document.getElementsByClassName('card'));
const gamerScore = document.getElementById('score');
// const stars = Array.from(document.getElementsByClassName('far fa-star'));
const stars = document.getElementById('star-rating');
const totalTime = document.getElementById('time');
const gameOverlays = Array.from(document.getElementsByClassName('overlays'));
const startTime = totalTime.innerHTML;
 
let firstCard;
let secondCard;
let hasFlippedCard = false;
let lock = false;
let matchedCards = 1;
let countFlippedCards = 0;
 

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
    totalTime.innerHTML = startTime;
    gamerScore.innerHTML = 0;
    flips.innerHTML = 0;
    shuffleCards();

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
    if(!flippedCard){
        // first card
        flippedCard = true;
        firstCard = this;
        firstCard.removeEventListener('click', flipCount);
        
    }else {
        // second card
        flippedCard = false;
        secondCard = this;
        lock = true;
        
        // check if cards match
        if(firstCard.childNodes[1].src === secondCard.childNodes[1].src){
            // correctMatch();
            lock = false;
            increaseScore();
            ++this.matchedCards;
            console.log("This Matched cards is " + this.matchedCards);
            
            // how the game is won
            if (matchedCards === 8){
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
}
 

function gameOver(){
    // must clear interval to clear/stop
    // the timer interval
    clearInterval(timeRemaining);
    
    
    // game over overlay display
    let timeUp = document.getElementById('game-over');
    setTimeout(()=>{
        timeUp.classList.add('visible');
        console.log("game over")   
    }, 2000);
}
 
function victory(){
    let gameFinish = document.getElementById('victory');
    // victory overlay display
    
    gameFinish.classList.add('visible');
    clearInterval(timeRemaining);
    unFlipCards();
    console.log("Victory");
    alert(`Well done, you got ${gamerScore.innerHTML} points`)
}

function restart(){
    let gameOverlay = document.getElementById('game-over');
    let victoryOverlay = document.getElementById('victory');
    // click to restart game
    gameOverlay.classList.remove('visible');
    victoryOverlay.classList.remove('visible');
    
    startGame();
}

// event listener to remove each overlay as they appear
gameOverlays.forEach(overlay=>overlay.addEventListener('click', restart));

function menuToggle(){
    $("button").addEventListener('click',function(){
        $(".game-rules").toggleClass();
    })
}
