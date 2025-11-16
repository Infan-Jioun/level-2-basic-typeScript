// Access >> Modifiers

class BankAccount {
    public readonly userId: number;
    public userName: string;
    protected userBalance: number

    constructor(userId: number, userName: string, balance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = balance;

    }
    // add balance 
    // private hole class teke modfied korte perbe
    addBalance(balance: number) {
        this.userBalance = this.userBalance + balance
    }

}
// child class
class StudentBankAccount extends BankAccount {
    test(userBalance: number) {
        this.userBalance = userBalance
    }

}

const infanBalance = new BankAccount(23, "infan", 300)
infanBalance.addBalance(500)
console.log(infanBalance);