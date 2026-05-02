interface Developer<t> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: number
    };
    smartwatch: t;
}

const poordev: Developer<{
    rate:string;
    watch:boolean;
}> = {
    name: 'jalak',
    salary: 29,
    device: {
        brand: 'Hp',
        model: 20
    },
    smartwatch:{
        rate:'hp20',
        watch:true,
    }
}