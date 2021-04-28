window.addEventListener('load', init)
let time = 5;
let score =0;

let isPlaying;


const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'her',
    'long',
    'hair',
    'library',
    'sight',
    'afternoon',
    'regret',
    'economics',
    'anjii',
    'toronto',
    'throne',
    'norway',
    'paris',
    'ashes',
    'england',
    'french'
];
//intialize function
function init() {
    showWord(words);
    wordInput.addEventListener('input', afterMatch);
    setInterval(countDown, 1000);

    setInterval(statusCheck, 50);

}

function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];

}
function countDown() {
    if (time > 0) {
        time--;
    }
    else if (time === 0) {
        isPlaying = false;
    }

    timeDisplay.innerHTML = time;

}
function statusCheck() {
    if (!isPlaying && time == 0){
        message.innerHTML = 'Game Over!';
    score = 0;}
}
function afterMatch() {
    if (matching()) {
        isPlaying = true;
        time = 6;
        showWord(words);
        wordInput.value = ''
        score++;
    
    }

scoreDisplay.innerHTML=score;
}

function matching() {
    if (wordInput.value == currentWord.innerHTML) {
        message.innerHTML = 'Excellent';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}


















