"use strict";
//intro
function addiere1(z1, z2) {
    // var sum = z1 + z2;   nicht zu empfehlen, Scope direkt window
    // let sum = z1 + z2;
    const sum = z1 + z2;
    return sum;
}
//function type
let simplpe;
let addiere2 = function (x1, x2) { return x1 + x2; };
//kürzer
let addiere3 = function (x1, x2) { return x1 + x2; };
//optional params
// ? -> kann auch undefined sein => type => 'number | undefined'
function addiere4(y, p) {
    if (p === undefined) {
        return y + y;
    }
    else {
        return y + p;
    }
}
// default - value
function berechnePotenz(y, p = 2) {
    return y ** p;
}
// generic function
//_fctname_ <_typeVariable_>(_param_:_typeVariable_): _typeVariable_ {...]}
function createArray2(el1, el2, el3) {
    return [el1, el2, el3];
}
let test = createArray2(1, 2, 3);
