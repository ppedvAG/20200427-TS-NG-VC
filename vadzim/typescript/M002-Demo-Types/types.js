"use strict";
function zeigeNumber() {
    let dezimaleZahl = 1111;
    document.getElementById('numberP1').textContent = String(dezimaleZahl);
    let binäreZahl = 0b1111;
    document.getElementById('numberP2').textContent = String(binäreZahl);
    let hexadezimaleZahl = 0x1111;
    document.getElementById('numberP3').textContent = String(hexadezimaleZahl);
    let oktaleZahl = 0o1111;
    document.getElementById('numberP4').textContent = String(oktaleZahl);
    let kommaZahl = 11.11;
    document.getElementById('numberP5').textContent = String(kommaZahl);
    document.getElementById('numberP6').textContent = 'typeof kommaZahl: ' + typeof kommaZahl;
    let bigNumber = new Number(34);
    document.getElementById('numberP7').textContent = 'typeof bigNumber: ' + typeof bigNumber;
    let myBigInt = 2345n;
    let myBigInt2 = 2345n;
    document.getElementById('numberP8').textContent = 'myBigInt: ' + myBigInt + ', myBigInt2: ' + myBigInt2;
    let myNr = NaN;
    let myNr2 = Infinity;
}
zeigeNumber();
document.getElementById('ptnz').textContent = `4**2: ${4 ** 2}`;
function zeigeString() {
    let doubleQuotedString = "bla";
    document.getElementById('stringP1').textContent = "doubleQuotedString: " + doubleQuotedString;
    let singleQuotedString = "blo";
    document.getElementById('stringP2').textContent = "singleQuotedString: " + singleQuotedString;
    let templateString = `ble \n
    ${doubleQuotedString}
    `;
    document.getElementById('stringP3').textContent = "templateString über textContent: " + templateString;
    document.getElementById('stringP4').innerText = "templateString über innerText: " + templateString;
    document.getElementById('stringP5').textContent = `typeof templateString: ${typeof templateString}`;
    let bigString = new String(345);
    document.getElementById('stringP6').textContent = `typeof bigString: ${typeof bigString}`;
    let someString = bigString.valueOf();
    document.getElementById('stringP7').textContent = `Wrapper-Object zum primitiven Typ - 
    mit WrapperObjectInstance.valueOf()`;
}
zeigeString();
function zeigeSpecials() {
    let myNull = null;
    if (myNull === null) {
        document.getElementById('specialP1').textContent = "null als string: " + myNull;
    }
    let mynullStr = "asdf";
    mynullStr = String(null);
    document.getElementById('specialP2').textContent = "mynullStr, null to string: " + mynullStr;
    document.getElementById('specialP3').textContent = "typeof myNull: " + typeof myNull;
    let myUndefined = undefined;
    document.getElementById('specialP5').textContent = "typeof myUndefined: " + typeof myUndefined;
    let myVoid;
    myVoid = undefined;
    document.getElementById('specialP6').textContent = "typeof myVoid: " + typeof myVoid + "void ist bei Funktionen nützlich, als Variable aber nicht";
    let myNever;
    document.getElementById('specialP6').textContent = "typeof myNever: Fehler, never ist bei Funktionen nützlich, die zu ihrem Ende nie gelangen";
}
zeigeSpecials();
function error(m) {
    throw new Error(m);
}
function testeNever() {
    return error("Test Fehler");
}
let mySmallObject;
let myBigObject;
mySmallObject = new Object(4);
document.getElementById('specialP8').textContent = "typeof mySmallObject: " + typeof mySmallObject;
