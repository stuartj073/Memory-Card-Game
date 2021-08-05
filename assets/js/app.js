if(document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function(){
        console.log("Hi")
    })
}

function consoleTest(){
    let score = document.getElementById("score");

    score.addEventListener('click', function(){
        console.log("bye");
    })
}

const cards = document.querySelector(".card");

function hi(){
    let scores = document.getElementById('score');

    score.addEventListener('click', function(){
        alert("uh")
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

function unflipCards() {

}

function matchedCards(cards1, cards2){
    var matchedCards = [];

    if(cards[0]===cards[1]){
        matchedCards.push(card1, card2)
    }

}

function unmatchedCards()

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

function timer(){
    setInterval(function(){
        let timer = document.getElementById('time').innerText;
        this.timer--;
        timer = this.timer.innerText;

        if(timer===0){
            gameOver();
        }
    },1000)
}

function victory()

function gameOver(){
    
}

function menuToggle(){
    $("button").addEventListener('click',function(){
        $(".game-rules").toggleClass();
    })
}



