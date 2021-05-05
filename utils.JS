export function compareNumbers(userGuess, targetNumber) {
    // console.log(userGuess);
    // console.log(targetNumber);
    if (userGuess < targetNumber) return -1;
    else if (userGuess > targetNumber) return 1;
    //else if (userGuess === targetNumber) return 0; // this returns undefined in the console
    else return 0;

}
// this function takes in 2 values and returns comparative values
