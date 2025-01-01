function isArmstrongNumber(N: number): boolean {
    let sumOfPowers = 0;
    let numDigits = 0;
    let temp = N;

    while (temp > 0) {
        numDigits++;
        temp = Math.floor(temp / 10);
    }

    temp = N;
    while (temp > 0) {
        const digit = temp % 10;
        sumOfPowers += Math.pow(digit, numDigits);
        temp = Math.floor(temp / 10);
    }

    return sumOfPowers === N;
}

function main(): void {
    const userInput = prompt("Please Enter the Number to Check for Armstrong: ");
    if (userInput !== null) {
        const number = Number(userInput);

        if (isArmstrongNumber(number)) {
            console.log(`${number} is an Armstrong Number.`);
        } else {
            console.log(`${number} is Not an Armstrong Number.`);
        }
    }
}

main();
