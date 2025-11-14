type RichPeopleVehicle = {
    car: string; // key value
    bike: string;
    cng: string
}

type MyVehicle1 = "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPeopleVehicle;
const myVehicle: MyVehicle1 = "bike"
console.log(myVehicle);
// constraint
type User = {
    id: number;
    name: string;
    address: {
        city: string
    }
}
const user: User = {
    id: 222,
    name: "infan",
    address: {
        city: "chattogram"
    }
}
// const myId = user["id"]
//  const name = user["name"]
//  const address = user["address"]
// console.log({ myId, name, address });
// constraint with function 
// use generics 
const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
    return obj[key]
}
// const result1 = getPropertyFromObj(user, "name")
// console.log(result1);

const product = {
    brand: "Hp",
}
const student = {
    id: 123,
    class: "four"
}

const result2 = getPropertyFromObj(product, "brand")
console.log(result2);