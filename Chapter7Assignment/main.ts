import { ATM, IAccount } from "./atm";

const userAccount: IAccount = {
    pin: 1234,
    balance: 10000,
    dailyLimit: 5000,
    attemptsLeft: 3,
    isCardBlocked: false
};

const atm = new ATM(20000);

atm.withdrawCash(userAccount, 3000, 1234);
atm.withdrawCash(userAccount, 3000, 1234);
atm.withdrawCash(userAccount, 1000, 1111);
atm.withdrawCash(userAccount, 1000, 1111);
atm.withdrawCash(userAccount, 1000, 1111);
atm.withdrawCash(userAccount, 500, 1234);