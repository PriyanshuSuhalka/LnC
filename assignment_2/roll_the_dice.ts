function generateRandomNumber(min: number, max: number): number {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

const maxValueOfDice = 6;
let shouldTheDiceBeRolled = true;

function main(): void {
    while (shouldTheDiceBeRolled) {
        const userReply = prompt("Ready to roll? Enter Q to Quit");
        if (userReply?.toLowerCase() === 'q') {
            shouldTheDiceBeRolled = false;
        } else {
            const rolledNumber = generateRandomNumber(1, maxValueOfDice);
            console.log(`You have rolled a ${rolledNumber}`);
        }
    }
}

main();