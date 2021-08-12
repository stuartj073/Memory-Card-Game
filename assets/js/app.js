const userScore = 0;
const cards = Array.from(document.getElementsByClassName('card'));
const timeRemaining = setInterval(timer, 1000)
this.busy = true;
let stars = Array.from(document.getElementsByClassName('far fa-star'));




if(document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ()=>{
        console.log("Hibye")
        setTimeout(startGame(), 5000)
    })
}

function startGame(){
    // timeRemaining = flips.innerHTML;
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
            correctMatch = flips.innerText;
            if(flips.innerHTML > "1"){
                console.log("uh")
        });
        let stars = Array.from(document.getElementsByClassName('far fa-star'));
        
        if(flips.innerHTML > "1"){
            console.log("uh")
            
        }
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
 let lock = false;
 let matchedCards = [];

 function flipCard(){
    if(lock) return;
    this.classList.add('flipC');
    
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        console.log(this.childNodes[1].src);
    }else {
        hasFlippedCard = false;
        secondCard = this;
        console.log(this.childNodes[1].src);
        
        if(firstCard.childNodes[1].src === secondCard.childNodes[1].src){
            correctMatch();
            increaseScore();
            matchedCards.push(firstCard, secondCard);
            
        } else {
            incorrectMatch()
        }
        console.log("yeu")
    }
}

function incorrectMatch(){
    lock = true;
    
    setTimeout(()=>{
    firstCard.classList.remove('flipC');
    secondCard.classList.remove('flipC');
    console.log("iC");
    }, 1000);

    lock = false;
}

function canFlipCard(){
    if(!this.busy && !this.card.includes(correctMatch) && !this.card){
    console.log("wagwan")
    }
}

cards.forEach(card=>card.addEventListener('click', flipCard))

function correctMatch(){
    firstCard.removeEventListener('click', flipCard);
    firstCard.removeEventListener('click', flipCount);
    secondCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCount);
}


function increaseScore(){
    let gamerScore = document.getElementById('score')
    const newScore = parseInt(gamerScore.innerHTML) + 10;
    gamerScore.innerHTML = newScore;
}

function gameOver(){
    clearInterval(timeRemaining);
    console.log("game over");
    let game = document.getElementsByClassName('game-area');
    // game.toggleClass('game-over-overlay');
}

// function victory(){
//     if(matchedCards)
// }

function menuToggle(){
    $("button").addEventListener('click',function(){
        $(".game-rules").toggleClass();
    })
}
