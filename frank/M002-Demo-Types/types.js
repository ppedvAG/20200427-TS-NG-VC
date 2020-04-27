"use strict";
function showNumber() {
    let dezimaleZahl = 1111;
    document.getElementById("numberP1").textContent = String(dezimaleZahl);
    let binaerZahl = 0b1110;
    document.getElementById('numberP2').textContent = String(binaerZahl);
    let hexaZahl = 0xAB123;
    document.getElementById('numberP3').textContent = String(hexaZahl);
    let octaZahl = 0o1111;
    document.getElementById('numberP4').textContent = String(octaZahl);
    let commaZahl = 11.11;
    document.getElementById('numberP5').textContent = String(commaZahl);
    document.getElementById('numberP6').textContent = "typeof: " + typeof (commaZahl);
    let bigNumber = new Number(36);
    document.getElementById('numberP7').textContent = 'typeof: ' + typeof (bigNumber);
    document.getElementById('numberP8').textContent = String(bigNumber.valueOf());
    let myBigInt = 2345n;
    document.getElementById('numberP9').textContent = 'myBigInt ' + myBigInt;
}
function showStrings() {
    let doublequotedString = "lorem upsum";
    document.getElementById('stringP01').textContent = doublequotedString;
    let singlequotedString = 'lorem upsum trallala';
    document.getElementById('stringP02').textContent = singlequotedString;
    let templateString = `blub
    ${doublequotedString}
    hello world
    42
    `;
    document.getElementById('stringP03').textContent = "as textContent: " + templateString;
    document.getElementById('stringP04').innerText = "as innerText: " + templateString;
    document.getElementById('stringP05').textContent = `typeof templateString:  ${typeof templateString}`;
    let bigString = new String("HelloWorld");
    document.getElementById('stringP06').textContent = `typeof bigString:  ${typeof bigString}`;
    let somestring = bigString.valueOf();
    document.getElementById('stringP07').textContent = `typeof somestring:  ${typeof somestring}`;
}
showNumber();
showStrings();
