interface IUserInteraction {
    promptUser(message: string): string | null;
    showMessage(message: string): void;
}

class ConsoleInteraction implements IUserInteraction {
    promptUser(message: string): string | null {
        return prompt(message);
    }
    
    showMessage(message: string): void {
        alert(message);
    }
}

function isValidNumber(input: string): boolean {
    const number = Number(input);
    return !isNaN(number) && number >= 1 && number <= 100;
}

class NumberGuessingGame {
    private targetNumber: number;
    private attempts: number;
    private userInteraction: IUserInteraction;

    constructor(userInteraction: IUserInteraction) {
        this.targetNumber = this.generateRandomNumber();
        this.attempts = 0;
        this.userInteraction = userInteraction;
    }

    private generateRandomNumber(): number {
        return Math.floor(Math.random() * 100) + 1;
    }

    public start(): void {
        let guessedCorrectly = false;
        let guess: string | null = this.userInteraction.promptUser("Guess a number between 1 and 100:");

        while (!guessedCorrectly) {
            if (!guess || !isValidNumber(guess)) {
                guess = this.userInteraction.promptUser("Invalid input! Please enter a number between 1 and 100:");
                continue;
            }

            this.attempts++;
            const guessedNumber = Number(guess);

            if (guessedNumber < this.targetNumber) {
                guess = this.userInteraction.promptUser("Too low. Guess again:");
            } else if (guessedNumber > this.targetNumber) {
                guess = this.userInteraction.promptUser("Too high. Guess again:");
            } else {
                this.userInteraction.showMessage(`You guessed it in ${this.attempts} attempts!`);
                guessedCorrectly = true;
            }
        }
    }
}

const userInteraction = new ConsoleInteraction();
const game = new NumberGuessingGame(userInteraction);
game.start();
