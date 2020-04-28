

// beide akzeptieren alles

let myVar1 : any;

myVar1 = "Hello World";
myVar1 = 1223;
myVar1 = false;

myVar1.trim();
new myVar1();
myVar1[7];



let myVar2 : unknown;

myVar2 = "Hello World";
myVar2 = 1223;
myVar2 = false;

// any hat kein Type Checking; unknown aber, deswegen nachstehende Fehler
// myVar2.trim();
// new myVar2();
// myVar2[7];


//any und unknow rechts von Zuweisungsoperator
let myString: string = myVar1;
// myString = myVar2;  //-> Fehler