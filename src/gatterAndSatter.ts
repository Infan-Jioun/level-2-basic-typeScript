
// parent
class BackAccount {
    userId: number;
    userName: string;
    bankBalance: number
    constructor(userId: number, userName: string, bankBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.bankBalance = bankBalance;
    }
    addBalacne(balance: number) {
        this.bankBalance = this.bankBalance + balance
    }
}
// child  
class Student extends BackAccount { }
const student1 = new Student(32, "infan", 300)
student1.addBalacne(30)
console.log(student1);