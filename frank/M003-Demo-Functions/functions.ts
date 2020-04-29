
//intro
function addiere1(z1: number, z2: number): number {

    // var sum = z1 + z2;   nicht zu empfehlen, Scope direkt window

    // let sum = z1 + z2;
    const sum: number = z1 + z2;
    return sum;
}


//function type
let simplpe: () => void;

let addiere2: (x1: number, x2: number) => number =
    function (x1: number, x2: number): number { return x1 + x2 };

//kürzer
let addiere3: (x1: number, x2: number) => number =
    function (x1, x2) { return x1 + x2 };

//optional params
// ? -> kann auch undefined sein => type => 'number | undefined'
function addiere4(y: number, p?: number ): number {
    
    if (p === undefined) {
        return y + y;
    } else {
        return y + p;
    }

}

// default - value
function berechnePotenz(y: number, p:number = 2 ): number {    
    return y ** p;    
}


// generic function
//_fctname_ <_typeVariable_>(_param_:_typeVariable_): _typeVariable_ {...]}
function createArray2<T>(el1:T, el2:T, el3:T) : Array<T> {

    return [el1, el2, el3];
}


let test:number[] = <number[]>createArray2(1, 2, 3);

