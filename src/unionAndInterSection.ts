
/// union  | use 
type UserRole = "admin" | "user";
const getUserRole = (role: UserRole) => {
    if (role === "admin") {
        return "Admin"
    } else if (role === "user") {
        return "User"
    } else {
        return "guest"
    }
}
console.log(getUserRole("admin"));