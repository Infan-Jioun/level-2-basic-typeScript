// two types destuctureing
//1. Object destuctureing
//2. Array destuctureing

// TODO: Object destuctureing
// interface userInfo {
//     name: string,
//     email: string,
//     phone: number
// }
const user = {
    name: "infan jioun rahman",
    email: "infanjiounrahman20606@gmail.com",
    phone: 1610240096,
    Deatils: {
        address: "pnachlish, Chattogram",
        university: "Premier University Chattogram",
        blood: "AB+"
    }

}
const { name: fullName, Deatils: { address } } = user;
console.log("Name", fullName, "Address:", address);

// name alias name  use fullName 

//TODO : Array destuctureing
const device = ["Mobile", "Laptop", "Tablet"]
const [M , L , T] = device;
console.log(L);