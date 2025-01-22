function isArmstrongNumber(number) {
    var sumOfPowers = 0;
    var numofDigits = 0;
    var temp = number;
    while (temp > 0) {
        numofDigits++;
        temp = Math.floor(temp / 10);
    }
    temp = number;
    while (temp > 0) {
        var digit = temp % 10;
        sumOfPowers += Math.pow(digit, numofDigits);
        temp = Math.floor(temp / 10);
    }
    return sumOfPowers === number;
}
function main() {
    var userInput = prompt("Please Enter the Number to Check for Armstrong: ");
    if (userInput !== null) {
        var number = Number(userInput);
        if (isArmstrongNumber(number)) {
            console.log("".concat(number, " is an Armstrong Number."));
        }
        else {
            console.log("".concat(number, " is Not an Armstrong Number."));
        }
    }
}
main();
