function add(num1:number, num2:number):number{
    return(num1+num2)
}

// object => function => method

const poorUser ={
    name: 'sujon',
    balance: 0,
    addBalance(value:number): number{
        const totalBalance = this.balance + value;
        return totalBalance;
    }

}
poorUser.addBalance(200)

// callback funtion

const arr:number[] = [1,2,3];
const sqrArry = arr.map((elem:number): number =>elem*elem);