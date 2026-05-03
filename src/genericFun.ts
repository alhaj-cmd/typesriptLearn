// const arrString = (value: string)=>[value];
// const arrNum = (value: number)=>[value];
// const arrObj = (value: {id:number; name:string})=>{
//     return [value];
// }

const arrStringGene = <t>(value: t) => {
    return [value]

}

const arrString = arrStringGene('Apple')
const arrNum = arrStringGene(222);
const arrObj = arrStringGene({
    id: 12,
    name: "korim"
})

const withGeneric = (param: string, param1: number) => {
    [param,
        param1
    ]
}

const addStudent = <T>(studentInfo: T) => {
    return {
        course: "next level",
        ...studentInfo,
    }
}

const student = {
    id: 22,
    name: "sujon",
    haspen: true
};

const result = addStudent(student);
console.log(result);