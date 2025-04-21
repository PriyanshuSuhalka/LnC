export enum TransactionStatus {
    SUCCESS,
    FAILURE
}

export interface IAccount {
    pin: number;
    balance: number;
    dailyLimit: number;
    attemptsLeft: number;
    isCardBlocked: boolean;
}

class ATMError extends Error {}
class InsufficientFundsError extends ATMError {}
class ServerConnectionError extends ATMError {}
class InvalidPinError extends ATMError {}
class DailyLimitExceededError extends ATMError {}

function simulateServerConnection(): void {
    const isConnected = Math.random() > 0.1;
    if (!isConnected) {
        throw new ServerConnectionError("Unable to connect with the server. Please try again later.");
    }
}

export class ATM {
    private atmCash: number;

    constructor(initialCash: number) {
        this.atmCash = initialCash;
    }

    private validatePin(account: IAccount, inputPin: number): void {
        if (account.isCardBlocked) throw new InvalidPinError("Card is blocked due to too many invalid PIN attempts.");
        if (inputPin !== account.pin) {
            account.attemptsLeft--;
            if (account.attemptsLeft <= 0) {
                account.isCardBlocked = true;
                throw new InvalidPinError("Card blocked after 3 invalid attempts.");
            }
            throw new InvalidPinError(`Invalid PIN. ${account.attemptsLeft} attempts left.`);
        }
    }

    private checkDailyLimit(account: IAccount, amount: number): void {
        if (amount > account.dailyLimit) {
            throw new DailyLimitExceededError("Daily withdrawal limit exceeded.");
        }
    }

    private checkATMFunds(amount: number): void {
        if (amount > this.atmCash) {
            throw new InsufficientFundsError("ATM does not have enough cash.");
        }
    }

    private checkAccountBalance(account: IAccount, amount: number): void {
        if (amount > account.balance) {
            throw new InsufficientFundsError("Insufficient funds in your account.");
        }
    }

    public withdrawCash(account: IAccount, amount: number, inputPin: number): TransactionStatus {
        try {
            simulateServerConnection();

            this.validatePin(account, inputPin);
            this.checkDailyLimit(account, amount);
            this.checkATMFunds(amount);
            this.checkAccountBalance(account, amount);

            account.balance -= amount;
            account.dailyLimit -= amount;
            this.atmCash -= amount;

            console.log(`Withdrawal successful. Dispensed: ₹${amount}`);
            return TransactionStatus.SUCCESS;

        } catch (error) {
            if (error instanceof ATMError) {
                console.error(`Transaction failed: ${error.message}`);
            } else {
                console.error("Unexpected error occurred.");
            }
            return TransactionStatus.FAILURE;
        }
    }
}