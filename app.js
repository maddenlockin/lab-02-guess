// import functions and grab DOM elements
import { compareNumbers } from './utils.js';
// initialize state
// set event listeners to update state and DOM
const button = document.getElementById('guess-button');

// below is using only the .value attribute of the element number-input
const userGuessInput = document.getElementById('number-input');
const imgResult = document.getElementById('feedback-img');
const divResult = document.getElementById('feedback-div');
const remainingDisplay = document.getElementById('remaining-guesses');
const correctGuessesDis = document.getElementById('correct-guesses');
const totalTriesDis = document.getElementById('total-tries');
const resetButton = document.getElementById('reset');

let remainingGuesses = 5;
let correctGuesses = 0;
let totalTries = 0;
let targetNumber = Math.ceil(Math.random() * 20);

button.addEventListener('click', () => {
    const userGuess = userGuessInput.value;
    const compareNumbersResult = compareNumbers(userGuess, targetNumber);
    console.log(compareNumbersResult);
    console.log(targetNumber);

    if (compareNumbersResult === -1) {
        divResult.textContent = 'thats too low :(';
    }
    else if (compareNumbersResult === 1) {
        divResult.textContent = 'thats too high :(';
    }
    else if (compareNumbersResult === 0) {
        divResult.textContent = 'YOU GOT IT! :)';
    }

});

// can look in dev tools and see which attribute exists (ex. .value even though not stated in element) enter: document.getElementById('number-input').value and see if it returns the user input value