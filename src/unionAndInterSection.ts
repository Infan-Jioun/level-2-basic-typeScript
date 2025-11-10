
/// union  | use 
// type UserRole = "admin" | "user";
// const getUserRole = (role: UserRole) => {
//     if (role === "admin") {
//         return "Admin"
//     } else if (role === "user") {
//         return "User"
//     } else {
//         return "guest"
//     }
// }
// console.log(getUserRole("admin"));
// intersection &
type Employee = {
    id: string;
    name: string;
    phoneNo: string

}
type Manager = {
    designation: string;
    teamsize: number
}
type EmployeeAndManager = Employee & Manager;
const Manager: EmployeeAndManager = {
    id: "123",
    name: "Infan",
    phoneNo: "34235",
    designation: "manager",
    teamsize: 40
}
console.log(Manager);
