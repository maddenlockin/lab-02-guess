export function compareNumbers(userGuess, targetNumber) {
    // console.log(userGuess);
    // console.log(targetNumber);
    if (userGuess < targetNumber) return -1;
    else if (userGuess > targetNumber) return 1;
    else return 0;

}