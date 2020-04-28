"use strict";
// Intro
function add(z1, z2) {
    // let sum = z1 + z2;
    const sum = z1 + z2;
    return sum;
}
// Function type
let simple;
let add2 = function (x1, x2) {
    return x1 + x2;
};
// Kürzer
let add3 = function (x1, x2) { return x1 + x2; };
// Optional parameters
function add4(y, p) {
    if (p === undefined) {
        return y + 2;
    }
    else {
        return y + p;
    }
}
// Optional params with initial value
function power(y, p = 2) {
    return y ** p;
}
// Generic function
function createArray(element1, element2, element3) {
    return [element1, element2, element3];
}
