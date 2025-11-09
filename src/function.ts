// funtion
// arrow funtion , normal funtion
// normal funtion
function addNormal(num1: number, num2: number): number {
    return num1 + num2
}
// console.log(addNormal(2, 2));
// const addArrow = (num1: number, num2: number): number => num1 + num2
// console.log(addArrow(4, 4));

// 1️⃣ this কী?

// this হলো current object reference।

// Method-এর context অনুযায়ী, এটা যেই object-এর ভিতরে method আছে সেটা points করে।
// TODO object => function => method

const poorUser = {
    name: "infan",
    balance: 50,
    addBalance(value: number): number {
        const totalBalance = this.balance + value
        return totalBalance;
    }
}
console.log(poorUser.addBalance(5000));