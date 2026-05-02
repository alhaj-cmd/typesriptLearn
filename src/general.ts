// const friends: string[]=['Rakib','Raton','Ruhi'];
type genericArray<value> = Array<value>
const friends : genericArray<string>=['x','y','z']
const roll : number[] = [2, 2]
const rolBoolean : boolean[]=[true, false]


const userList:genericArray<{name: string; age:number}> =[
    {
        name:'sujon',
        age:27,
    },
    {
        name:'ali',
        age:21,
    }
]