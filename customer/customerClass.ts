import { Wallet } from "./walletClass";

export class Customer {
    private firstName: string;
    private lastName: string;
    private wallet: Wallet;

    constructor(firstName: string, lastName: string, initialBalance: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.wallet = new Wallet(initialBalance);
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getBalance(): number {
        return this.wallet.getBalance();
    }

    addMoney(amount: number): void {
        this.wallet.addMoney(amount);
    }

    makePayment(amount: number): boolean {
        return this.wallet.subtractMoney(amount);
    }
}

