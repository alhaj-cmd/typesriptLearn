type User ={
    name : string;
    age: number;
}
interface IUser{
    name:string;
    age:number;
}

type Role = {
    role: 'admin'|'user'
}

type UserWithRole = User & Role;

const user1: UserWithRole = {
    name: "md.x",
    age: 100,
    role:'admin'
}
const user2: IUser ={
    name: "mr.y",
    age: 102,
}

