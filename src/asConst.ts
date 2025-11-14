const UserRole = {
    Admin: "admin",
    Editor: "editor",
    Viewer: "viewer"  //literal union পাওয়ার উপায়
} 
const canEditAccess = (role: (typeof UserRole)[keyof typeof UserRole]) => {
    if (role === UserRole.Admin || role === UserRole.Editor) {
        return true
    } else {
        return false
    }
}
const isEditPremisabale = canEditAccess(UserRole.Admin);
console.log(isEditPremisabale);