"use strict";
function showNumber() {
    let decimal = 1111;
    document.getElementById('numberP1').textContent = String(decimal);
    let binary = 0b1111;
    document.getElementById('numberP2').textContent = String(binary);
    let octal = 0o1111;
    document.getElementById('numberP3').textContent = String(octal);
    let hexa = 0x1111;
    document.getElementById('numberP4').textContent = String(hexa);
    let double = 11.11;
    document.getElementById('numberP5').textContent = String(double);
    let big = new Number(34);
    document.getElementById('numberP6').textContent = String(big);
    let bigN = 2345n;
    document.getElementById('numberP7').textContent = String(bigN);
    let x = 1111n;
    document.getElementById('numberP8').textContent = typeof x;
}
showNumber();
function showString() {
    let doubleQuotedString = "bla";
    document.getElementById('stringP1').textContent = "Double Quoted:" + doubleQuotedString;
    let singleQuotedString = 'blo';
    document.getElementById('stringP2').textContent = "Single Quoted:" + singleQuotedString;
    let templateString = `blub ${doubleQuotedString}`;
    document.getElementById('stringP3').textContent = "Template Quoted:" + templateString;
}
showString();
