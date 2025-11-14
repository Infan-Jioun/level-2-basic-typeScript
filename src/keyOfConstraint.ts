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
const user = {
    id: 222,
    name: "infan",
    address: {
        city: "chattogram"
    }
}
const myId = user["id"]
const name = user["name"]
const address = user["address"]
console.log({ myId, name, address });