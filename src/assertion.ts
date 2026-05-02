let anything: any;

// anything = 222;
// anything as number

const kgtogram = (input: string|number)=> {

    if(typeof input ==="number"){
        return input * 1000;
    }
    else if(typeof input === 'string') {
        const [value] = input.split(" ")
        return `converted output is: ${Number(value)*1000}`
    }
}


const result1 = kgtogram(2);
console.log(result1);
const result2 = kgtogram('2 kg')
console.log(result2)
