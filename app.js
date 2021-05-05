// import functions and grab DOM elements
import { compareNumbers } from './utils.js';
// initialize state
// set event listeners to update state and DOM
const button = document.getElementById('guess-button');

// below is using only the .value attribute of the element number-input
const userGuessInput = document.getElementById('number-input');
//const imgResult = document.getElementById('feedback-img');
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
        remainingGuesses--;
        remainingDisplay.textContent = `${remainingGuesses} remaining guesses`;
        totalTries++;
        totalTriesDis.textContent = totalTries;
    }
    else if (compareNumbersResult === 1) {
        divResult.textContent = 'thats too high :(';
        remainingGuesses--;
        remainingDisplay.textContent = `${remainingGuesses} remaining guesses`;
        totalTries++;
        totalTriesDis.textContent = totalTries;
    }
    else if (compareNumbersResult === 0) {
        divResult.textContent = 'YOU GOT IT! :)';
        correctGuesses++;
        correctGuessesDis.textContent = correctGuesses;
        totalTries++;
        totalTriesDis.textContent = totalTries;
        userGuessInput.classList.toggle('hide');
        button.classList.toggle('hide');
    }
    if (remainingGuesses === 0) {
        divResult.textContent = 'no more tries :( play again?';
        userGuessInput.classList.toggle('hide');
        button.classList.toggle('hide');
    }
    resetButton.addEventListener('click', () => {
        // set all divs to empty strings
        divResult.textContent = '';
        remainingDisplay.textContent = '';
        userGuessInput.value = ''; 
        targetNumber = Math.ceil(Math.random() * 20);

    });
});

// can look in dev tools and see which attribute exists (ex. .value even though not stated in element) enter: document.getElementById('number-input').value and see if it returns the user input value