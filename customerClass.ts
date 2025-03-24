class Wallet {
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

class Customer {
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

const customer = new Customer("Priyanshu", "Suhalka", 10.00);
console.log(`${customer.getFullName()} has $${customer.getBalance()} in wallet.`);

const payment = 2.00;
if (customer.makePayment(payment)) {
    console.log(`Payment of $${payment} successful! Remaining balance: $${customer.getBalance()}`);
} else {
    console.log(`Payment failed. Insufficient funds. Balance: $${customer.getBalance()}`);
}

customer.addMoney(5.00);
console.log(`Added $5. New balance: $${customer.getBalance()}`);
if (customer.makePayment(payment)) {
    console.log(`Payment of $${payment} successful! Remaining balance: $${customer.getBalance()}`);
} else {
    console.log(`Payment failed. Insufficient funds.`);
}
