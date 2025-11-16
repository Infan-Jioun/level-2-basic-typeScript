
// parent
class BackAccount {
    userId: number;
    userName: string;
    private bankBalance: number
    constructor(userId: number, userName: string, bankBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.bankBalance = bankBalance;
    }
    // addBalaee(balance: number) {
    //     this.bankBalance = this.bankBalance + balance
    // }
    set addBalance(amount: number) {
        this.bankBalance = this.bankBalance + amount
    }

    get getBalance() {
        return this.bankBalance
    }
}
const infanAccouunt = new BackAccount(3, "iNFAN", 100)
infanAccouunt.addBalance = 60;
console.log(infanAccouunt.getBalance);