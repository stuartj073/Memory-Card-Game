const userScore = 0;
const flips = 0;
// const timeLeft = 100;
const card = document.getElementsByClassName('card');

if(document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function(){
        console.log("Hi")
        console.log(this);
        timer();
    })
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
    card.addEventListener('click', function(){
        console.log("hi");
    })
}

function flipCard(){

}

function checkCards() {
    for(card of cards) {
        card.addEventListener('click', flipCard())
    }
}

function unflipCards() {

}

function matchedCards(cards1, cards2){
    var matchedCards = [];

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

function increaseFlip(){

}

function timer(){
    setInterval(function(){
        let totalTime = document.getElementById('time');
        let timeLeft = totalTime.innerText--;
        
        if(timeLeft.innerText === "0"){
            this.gameOver()
        }
    }, 1000)

}

function gameOver(){
    clearInterval(timer);
    console.log("game over");
}

function victory(){

}

function menuToggle(){
    $("button").addEventListener('click',function(){
        $(".game-rules").toggleClass();
    })
}



