// const leada = document.getElementById('lboard');

// function displayLboard() {
//     leada.addEventListener('click', ()=>{
//         leada.classList.add('visible');
//         console.log("heyar")
//     })
// }

let input = document.getElementById('score');

function contribute(){
    input.addEventListener('click', function(){
        input.classList.add('visible');
    });
}