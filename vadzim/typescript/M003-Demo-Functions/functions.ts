// intro 

function addiere1(z1: number, z2: number): number {
    // let sum = z1 + z2;
    const sum: number = z1 + z2;
    return sum;
}

// function type

let simple: () => void;

let addiere2: (x1: number, x2: number) => number = function (x1: number, x2: number): number { return x1 + x2 };

// Kürzer
let addiere3: (x1: number, x2: number) => number = function (x1, x2) { return x1 + x2 };


// optional params

function addiere4(y: number, p?: number): number { // durch ? hat p nicht type 'number', sondern type 'number | undefined'
    if (p === undefined) {
        return y + y;
    } else {
        return y + p;
    }
}

// optional params with initial value

function berechnePotenz(y: number, p:number = 2): number {
    return y ** p;
}

// generic function

// function _fctname_<_typeVariable_>(_param_: _typeVariable_): _typeVariable_ {...}
function createArray<T>(el1: T, el2: T, el3: T): Array<T> {
    return [el1, el2, el3];
}