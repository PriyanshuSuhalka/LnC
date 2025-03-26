import { Customer } from "./customerClass";

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
