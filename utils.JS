export function compareNumbers(userGuess, targetNumber) {
    if (userGuess < targetNumber) return -1;
    else if (userGuess > targetNumber) return 1;
    else return 0;

}
// this function takes in 2 values and returns comparative values
// making github take the commit, yay