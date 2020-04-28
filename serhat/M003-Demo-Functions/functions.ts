// Intro

function add(z1: number, z2: number): number {
    // let sum = z1 + z2;
    const sum: number = z1 + z2;
    return sum;
}

// Function type

let simple: () => void;

let add2: (x1: number, x2: number) => number =
    function (x1: number, x2: number): number {
        return x1 + x2
    };

// Kürzer
let add3: (x1: number, x2: number) => number =
    function (x1, x2) { return x1 + x2 };

// Optional parameters

function add4(y: number, p?: number): number { // with ?, p does not have a type 'number' but 'number | undefined'
    if (p === undefined) {
        return y + 2;
    }
    else {
        return y + p;
    }
}

// Optional params with initial value
function power(y: number, p: number = 2): number {
    return y ** p;
}

// Generic function

function createArray<T>(element1: T, element2: T, element3: T) : Array<T> {
    return [element1, element2, element3];
}





