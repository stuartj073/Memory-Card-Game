const userScore = 0;
const matchedCards = [];
const cards = Array.from(document.getElementsByClassName('card'));
const timeRemaining = setInterval(timer, 1000)
const front = Array.from(document.getElementsByClassName('front'));
const back = Array.from(document.getElementsByClassName('back'));
let card1;
let card2;
this.busy = true;





if(document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ()=>{
        console.log("Hibye")
        startGame();
    })
}

function startGame(){
    pairedCards = [];
    timer();
    flipCount();
    shuffleCards();
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
    let cards = Array.from(document.getElementsByClassName('card'));
    for(let i=0;i<cards.length;i++){
        cards[i].addEventListener('click', ()=>{
            flips.innerText++;
        })
    }
}

// function shuffleCards(){
//     // using the Fisher Yates shuffle theory
//     console.log("j")
//     for(let i = cards.length - 1; i<0; i--){
//         let randN = Math.floor(Math.random()*(i+1));
//         cards[randN].style.order = i;
//         cards[i].style.order = randN;
//     }
// }

function shuffleCards(){
    for(let i=0;i<cards.length;i++){
        randN = Math.floor(Math.random()*(i+1));
        cards[i].style.order = randN;
    }
}

function toggleRules(){
console.log("hello");
}

$("#game-rules").click(function(){
    ("button").slideToggle("slow");
 })

function flipCard(){
    this.classList.add('flipC')
    var card1, card2;
    let hasFlippedCard = false;
    console.log("huzzah")
}

    
    // if(!hasFlippedCard){
    //     hasFlippedCard = true;
    //     let card1 = this;
        
    // }   else {
    //     hasFlippedCard = false;
    //     let card2 = this;
    // }
    //     if(card1.dataset.framework === card2.dataset.framework){
    //         card1.removeEventListener('click', flipCard)
    //         card2.removeEventListener('click', flipCard)
    //     }   else {
    //         setTimeout(function(){
    //         card1.classList.remove('flip')
    //         card2.classList.remove('flip');
    //         }, 1000);
    //     }

        

    

// function canFlipCard(card){
//     if(!this.busy && this.card.includes)
// }

cards.forEach(card=>card.addEventListener('click', flipCard))

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

// function click(){
//     let cards = Array.from(document.getElementsByClassName('card'));
//     let ticker = document.getElementById('flips');
//     cards.forEach(card=>{
//         card.addEventListener('click', function(){
//             ticker.innerHTML++;
//         })
//     })
// }


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
