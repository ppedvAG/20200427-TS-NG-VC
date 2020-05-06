"use strict";
function addiere1(z1, z2) {
    const sum = z1 + z2;
    return sum;
}
let simple;
let addiere2 = function (x1, x2) { return x1 + x2; };
let addiere3 = function (x1, x2) { return x1 + x2; };
function addiere4(y, p) {
    if (p === undefined) {
        return y + y;
    }
    else {
        return y + p;
    }
}
function berechnePotenz(y, p = 2) {
    return y ** p;
}
function createArray(el1, el2, el3) {
    return [el1, el2, el3];
}
