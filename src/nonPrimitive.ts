// Non Primitves 
// array, object, touple

let studentName: string[] = ["infan", "jioun", "rahman"]
studentName.push("jito")
console.log(studentName);

// tuple 
let student: [string, number,] = ["infan", 22]
console.log(student);
// object
let user: {
    readonly name: string, // access modfier
    age: 21, // type literal types
    address: string,
    marriedStatus?: boolean,
} = {
    name: "Infan Jioun Rahman jito",
    age: 21, 
    address: "Panchlish, Chattogram",
    marriedStatus: false
}
user.marriedStatus = true
console.log(user);