const cards = document.querySelectorAll('.card')
const startButton = document.getElementById('startButton')
const timerElement = document.getElementById('timer')
const result = document.getElementById('result')
const resetButton = document.getElementById('resetButton')

let flippedCards = [];
let guesedCards = 0;
let isStart = false;
let timerInterval;
let seconds = 0;

resetButton.addEventListener('click', (e) =>{
    flippedCards = [];
    guesedCards = 0;
    isStart = false;
    seconds = 0;
    cards.forEach(card =>{
   card.classList.remove('flipped')
    })
    timerElement.textContent = "Time: 0 seconda";
    result.textContent = "Result";
    shuffleCards;
   
})

startButton.addEventListener('click', (e) =>{
    isStart = true;
     startTimer()
})

function startTimer(){
 timerInterval = setInterval (() => {
  seconds++;
  timerElement.textContent = "Time " + seconds + " seconds"
 },1000) 
 
}

function stopTimer(){
    clearInterval(timerInterval)
    result.textContent = "Game over! You finished in "+ seconds + " seconds"
}

cards.forEach(card => {
    card.addEventListener('click', (e) =>{
        if(isStart == false){
            return
        }
        if(flippedCards.length >= 2){
            return
        }else{
            card.classList.add('flipped')
            flippedCards.push(card)
        }
        if(flippedCards.length == 2){
            checkForMatch()
        }
})
})

function checkForMatch(){
    const [card1,card2] = flippedCards
    const img1 = card1.querySelector('.back-view img').src
    const img2 = card2.querySelector('.back-view img').src
    if(img1 == img2){
        flippedCards = []
        guesedCards++
    }else{
       setTimeout(() =>{
        card1.classList.remove('flipped')
        card2.classList.remove('flipped')
        flippedCards = []
       }, 500 )
    }
    if(guesedCards == 8){
        stopTimer()
    }
}
function suffleImage() {
    
    cards.forEach(card => {

        const num = [...Array(cards.length).keys()]
        const random = Math.floor(Math.random()*cards.length)
        
        card.style.order = num[random];
    })
}

suffleImage()

function shuffleCards() {
    const cardArray = Array.from(cards); 
    for (let i = cardArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardArray[i], cardArray[j]] = [cardArray[j], cardArray[i]]; 
    }}
  