// const UserRoles = {
//     Admin: 'Admin',
//     Editor: 'Editor',
//     Viewer :'Viewer',
// } as const;



// const canEdit =(role:keyof typeof UserRoles)=>{
//     if(role===UserRoles.Admin || role===UserRoles.Editor){
//         return true;
    
//     }
//     else return false; 
// }

// used to enum

// type UserRoles = "Admin" |"Editor"|"viewer";
enum UserRoles{
    Admin = "Admin",
    Editor = "Editor",
    Viewer ="Viwer"
}
const canEdit=(role:UserRoles)=>{
    if(role === UserRoles.Admin|| role === UserRoles.Editor){
        return true;
    }
    else return false;
}

const isEdit = canEdit(UserRoles.Admin);
console.log(isEdit);