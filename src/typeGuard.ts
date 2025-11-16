type Alpanumberic = number | string;
const add = (num1: Alpanumberic, num2: Alpanumberic) => {
    if (typeof num1 === "number" && typeof num2 === "string") {
        return num1 + num2
    } else {
        num1.toString() + num2.toString()
    }

}
console.log(add(2, 2));
console.log(add(2, "2"));