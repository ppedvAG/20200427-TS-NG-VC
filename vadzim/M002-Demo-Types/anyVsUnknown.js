"use strict";
// beide akzeptieren alles
let myVar1;
myVar1 = "sdfg";
myVar1 = 65;
myVar1 = false;
let myVar2;
myVar2 = "sdfg";
myVar2 = 65;
myVar2 = false;
// any hat überhaupt kein Type-Checking eingebaut, unknown aber schon
myVar1.trim();
new myVar1();
myVar1[7];
// myVar2.trim(); //Fehler
// new myVar2(); //Fehler
// myVar2[7]; //Fehler
// any & unknown rechts von Zuweisungsoperator
let mystring = myVar1;
// mystring = myVar2; // Fehler
