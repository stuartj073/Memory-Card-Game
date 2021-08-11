const userScore = 0;
const matchedCards = [];
const cards = Array.from(document.getElementsByClassName('card'));
const timeRemaining = setInterval(timer, 1000)

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

//  function flipCard(){
//     this.classList.add('flipC');
//     let firstClick;
//     let secondClick;
// }

 
 let firstCard;
 let secondCard;
 let hasFlippedCard = false;

 function flipCard(){
    this.classList.add('flipC');
     
     if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        console.log(this.childNodes[1].src);

    } else {
        hasFlippedCard = false;
        secondCard = this;
        console.log(this.childNodes[1].src);
        let gamerScore = document.getElementById('score')

        if(firstCard.childNodes[1].src === secondCard.childNodes[1].src){
            this.removeEventListener('click', flipCount)
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
            console.log("Match!")
            const newScore = parseInt(gamerScore.innerHTML) + 10;
            gamerScore.innerHTML = newScore;

            
        } else {
            setTimeout(()=>{
                firstCard.classList.remove('flipC');
                secondCard.classList.remove('flipC');
                console.log("the en word");
            }, 1000);
        }
        console.log("yeu")
    }
}


cards.forEach(card=>card.addEventListener('click', flipCard))

    
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
