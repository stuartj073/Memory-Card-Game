if(document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function(){

    })
}

function shuffleCards(cards){
    // using the Fisher Yates shuffle theory
  
      
      var currentIndex = array.length,  randomIndex;
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
    
      return cards.Array;
  }

function toggleRules(){
console.log("hello");
}

$("#game-rules").click(function(){
    ("button").slideToggle("slow");
 })

function startGame()

function flipCard(){
    let cards = document.getElementsByClassName('card');
    
    for(let i = 0; i< cards.length; i++){
        cards[i].addEventListener('click', function(){
            cards.toggle.classList.remove('card-front').clasList.add('card-back')
        })
    }
}

let cards = document.getElementsByClassName('card')

function checkCards() {
    for(card of cards) {
        card.addEventListener('click', flipCard())
    }
}

function correctMatch() {
    if(card1 === card 2) {
        increaseScore()
    }   else {
        unflipCards()
    }
}

function unflipCards() {

}

function matchedCards(){
    
}

function unmatchedCards

function increaseScore(){
    let score = document.getElementById('score').innerHTML;
    score = [];

    if(correctMatch) {
        score ++;
    }   else {
        unflipCards()
    }
}

function increaseFlip()

function timer()

function victory()

function gameOver()



