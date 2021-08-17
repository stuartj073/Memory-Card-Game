const userScore = 0;
const cards = Array.from(document.getElementsByClassName('card'));
const timeRemaining = setInterval(timer, 1000)
this.busy = true;
let stars = Array.from(document.getElementsByClassName('far fa-star'));
const gameOverlays = Array.from(document.getElementsByClassName('overlays'));
 
let firstCard;
let secondCard;
let hasFlippedCard = false;
let lock = false;
let matchedCards = 0;
let countFlippedCards = 0;
 
cards.forEach(card=>card.addEventListener('click', flipCard))



if(document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ()=>{
        console.log("Hibye")
        setTimeout(startGame(), 500000)
    })
}
 
function startGame(){
    // timeRemaining = flips.innerHTML;
    timer();
    flipCount();
    resetGame();
    shuffleCards();
}

function resetGame(){
    let matchedCards = 0;
    let countFlippedCards = 0;
}
 
function timer(){
    let totalTime = document.getElementById('time');
    totalTime.innerHTML--;
    
    if(totalTime.innerHTML === "0"){
    gameOver();
    totalTime.innerHTMl = totalTime.innerHTML;
    }
}
 
function flipCount(){
    if (lock) return;
    let cards = Array.from(document.getElementsByClassName('card'));
        for(let i=0;i<cards.length;i++){
        cards[i].addEventListener('click', ()=>{
            flips.innerText++;
            correctMatch = flips.innerText;
            
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
 
function toggleRules(){
console.log("hello");
}
 
$("#game-rules").click(function(){
    ("button").slideToggle("slow");
 })
 
//  function flipCard(){
//     this.classList.add('flipC');
//     let firstClick;
//     let secondClick;
// }

let done = [];

let flippedCard = false;

function flipCard(){
    // to flip cards
    console.log("FlipCard  ", lock);
    if(lock) return;

    // countFlippedCards++;
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
        // countFlippedCards++;
        lock = true;
        // check if cards match
        
        if(firstCard.childNodes[1].src === secondCard.childNodes[1].src){
            // correctMatch();
            lock = false;
            done.push(firstCard.childNodes[1].src);
            done.push(secondCard.childNodes[1].src);
            increaseScore();
            matchedCards++;
            
            if (matchedCards == 8){
                victory()
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
    // actions taken if cards match
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    console.log("match")
}
 
function incorrectMatch(){
    lock = true;
    setTimeout(()=>{
    firstCard.classList.remove('flipC');
    secondCard.classList.remove('flipC');
    console.log("iC");
    lock = false;
    }, 1000);
    // firstCard.addEventListener('click', flipCard);
    // secondCard.addEventListener('click', flipCard);
}
 
function increaseScore(){
    let gamerScore = document.getElementById('score')
    const newScore = parseInt(gamerScore.innerHTML) + 10;
    gamerScore.innerHTML = newScore;
}
 

function gameOver(){
    clearInterval(timeRemaining);
    let timeUp = document.getElementById('game-over');
    setTimeout(()=>{
        timeUp.classList.add('visible');
        console.log("game over")   
    }, 2000)

}
 
function victory(){
    let gameFinish = document.getElementById('victory');
    gameFinish.classList.add('visible');
    clearInterval(timeRemaining)
    console.log("Victory");
}

function restart(){
    let gameOverlay = document.getElementById('game-over');
    let gameOverlay = document.getElementById('game-over');

    gameOverlay.classList.remove('visible');
    victoryOverlay.classList.remove('visible');
    
    startGame();
}

gameOverlays.forEach(overlay=>overlay.addEventListener('click', restart));

function menuToggle(){
    $("button").addEventListener('click',function(){
        $(".game-rules").toggleClass();
    })
}
