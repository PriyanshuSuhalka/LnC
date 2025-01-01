function isValidGuess(input: string | null): boolean {
    const number = Number(input);
    if (!isNaN(number) && number >= 1 && number <= 100) {
        return true;
    } else {
        return false;
    }
}

function main(): void {
    const targetNumber = Math.floor(Math.random() * 100) + 1;
    let guessedCorrectly = false;
    let numberOfGuesses = 0;

    while (!guessedCorrectly) {
    const userInput = prompt("Guess the number between 1 and 100:");
        if (!isValidGuess(userInput)) {
            console.log("I wont count this one Please enter a number between 1 to 100");
            continue;
        }

        numberOfGuesses++;
        const guess = Number(userInput);

        if (guess < targetNumber) {
            console.log("Too low. Guess again");
        } else if (guess > targetNumber) {
            console.log("Too high. Guess again");
        } else {
            console.log(`You guessed it in ${numberOfGuesses} guesses!`);
            guessedCorrectly = true;
        }
    }
}

main();
