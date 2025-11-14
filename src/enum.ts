enum UserRole {
    Admin = "admin",
    Editor = "editor",
    Viewer = "viewer"
}
const canEditAccess = (role: UserRole) => {
    if (role === UserRole.Admin || role === UserRole.Editor) {
        return true
    } else return false;
}
const isEditPremisabale = canEditAccess(UserRole.Admin)
console.log(isEditPremisabale);