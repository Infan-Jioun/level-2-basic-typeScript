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


// 1️⃣ Array & map()

// arr হলো number type এর array [4, 8, 12]

// .map() হলো array method যা প্রতিটি element নিয়ে callback function apply করে।

// .map() একটি নতুন array return করে, original array change করে না।
// callback funtion
//এটা arrow function, যেটা .map() এর callback হিসেবে ব্যবহার হয়েছে।

//Parameter element হলো .map() method দ্বারা array-এর প্রতিটি item।

//Function body element * element → element এর square calculate করে।
const arr: number[] = [4, 8, 12]
const sqrArray = arr.map((element: number) => element * element)
console.log(sqrArray);