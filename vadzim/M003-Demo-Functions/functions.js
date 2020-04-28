"use strict";
// intro 
function addiere1(z1, z2) {
    // let sum = z1 + z2;
    const sum = z1 + z2;
    return sum;
}
// function type
let simple;
let addiere2 = function (x1, x2) { return x1 + x2; };
// Kürzer
let addiere3 = function (x1, x2) { return x1 + x2; };
// optional params
function addiere4(y, p) {
    if (p === undefined) {
        return y + y;
    }
    else {
        return y + p;
    }
}
// optional params with initial value
function berechnePotenz(y, p = 2) {
    return y ** p;
}
// generic function
// function _fctname_<_typeVariable_>(_param_: _typeVariable_): _typeVariable_ {...}
function createArray(el1, el2, el3) {
    return [el1, el2, el3];
}
