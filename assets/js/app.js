const userScore = 0;
const matchedCards = [];
const cards = document.getElementsByClassName('card');
const timeRemaining = setInterval(timer, 1000)
const divs = document.querySelectorAll('div')

function flipUp(){
    let flips = document.getElementById('flips');
    flips.innerText = 0;
    cards.forEach(card=>{
        card.addEventListener('click', ()=>{
            console.log("hi");
            flips.innerText++;
        })
    })
}

if(document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function(){
        console.log("Hi")
        console.log(this);
        startGame();
    })
}

function startGame(){
    timer();
}

function timer(){
    let totalTime = document.getElementById('time');
    totalTime.innerHTML--;
        
    if(totalTime.innerHTML === "0"){
        gameOver();
        totalTime.innerHTMl = totalTime.innerHTML;
    }
}

function shuffleCards(cards){
    // using the Fisher Yates shuffle theory
  
      
      var currentIndex = cards.Array.length,  randomIndex;
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [cards.Array[currentIndex], cards.Array[randomIndex]] = [
          cards.Array[randomIndex], cards.Array[currentIndex]];
      }
    
      return cards.Array;
  }

function toggleRules(){
console.log("hello");
}

$("#game-rules").click(function(){
    ("button").slideToggle("slow");
 })

function startGame(){

}

function flipCard(){
    let click = document.getElementById('front');
    front.addEventListener('click', function(){
        console.log("hi");
    })
}

function checkCards() {
    for(card of cards) {
        card.addEventListener('click', flipCard())
    }
}

function unflipCards() {

}

function correctMatch(cards1, cards2){
    
    if(cards[0]===cards[1]){
        matchedCards.push(card1, card2)
    }

}

function unmatchedCards(){

}



function increaseScore(){
    let score = document.getElementById('score').innerHTML;
    score = [];

    if(correctMatch) {
        score ++;
    }   else {
        unflipCards()
    }
}

function click(){
    let cards = Array.from(document.getElementsByClassName('card'));
    let ticker = document.getElementById('flips');
    cards.forEach(card=>{
        card.addEventListener('click', function(){
            ticker.innerHTML++;
        })
    })
}


function gameOver(){
    clearInterval(timeRemaining);
    console.log("game over");
}

function victory(){
}

function menuToggle(){
    $("button").addEventListener('click',function(){
        $(".game-rules").toggleClass();
    })
}
