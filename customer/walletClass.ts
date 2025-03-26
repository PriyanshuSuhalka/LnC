export class Wallet {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    getBalance(): number {
        return this.balance;
    }

    addMoney(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        }
    }

    subtractMoney(amount: number): boolean {
        if (this.balance >= amount) {
            this.balance -= amount;
            return true;
        }
        return false; 
    }
}