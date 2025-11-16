type Alpanumberic = number | string;
const add = (num1: Alpanumberic, num2: Alpanumberic) => {
    if (typeof num1 === "number" && typeof num2 === "string") {
        return num1 + num2
    } else {
        num1.toString() + num2.toString()
    }

}
// console.log(add(2, 2));
// console.log(add(2, "2"));

type NormalUser = {
    name: string
}
type AdminUser = {
    name: string;
    role: string;
}
const getUserInfo = (user: NormalUser | AdminUser) => {

    // first check with in 
    if ("role" in user) {
        console.log(`${user.name} is ${user.role} user `);
    }
    else {
        console.log(`${user.name}`);
    }
}
getUserInfo({ name: "Infan", role: "admin" })