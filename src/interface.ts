
// Interface ব্যবহার করা হয় object বা class-এর “structure” define করার জন্য, যাতে কোডটা predictable, readable আর type - safe হয়।
// interface use hoi only object type: array, object, function
interface User {
    name: string;
    email: string;
    phone: number;
    date: number;
}
// extends আগের টাইপের সব property নিয়ে নতুন কিছু যোগ করা (inherit)
interface UserInfoWithRole extends User {
    role: "admin" | "user";
    address: string;
    education: string;
    familyName: string;

}

const userDetails: UserInfoWithRole = {
    name: "infan",
    familyName: "Munshi",
    email: "infan@infan.com",
    phone: 13545456,
    address: "Cox'sbazar, Bangladesh",
    date: new Date().getDate(),
    role: "admin",
    education: "Premier University Chittagong"
}
console.log(userDetails);


// function 
// interface Add {
//     (num1: number, num2: number): number;
// }

// const add: Add = (num1, num2) => num1 + num2
// console.log(add(2, 3));

interface Icart {
    (price: number, quantity: number): number
}
const cartTotal: Icart = (price, quantity) => {
    return price * quantity
}

console.log(cartTotal(10, 10));

