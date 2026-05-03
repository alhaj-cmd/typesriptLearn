type A = null;
type B = undefined;

type C = A extends number ? true:B extends undefined? true: false; 


type peoples ={
    bike : string;
    car : string;
    ship : string;
}

type checkPeople <T>= T extends keyof peoples ? true: false;

type hasBikes = checkPeople<'bike'>;