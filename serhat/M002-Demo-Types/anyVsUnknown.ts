let myVar1: any;

myVar1 = "sdfg";
myVar1 = 65;
myVar1 = false;

let myVar2: unknown;

myVar2 = "sdfg";
myVar2 = 65;
myVar2 = false;

// Ok - Any -> any has no type checking
myVar1.trim();
new myVar1();
myVar1[7];

// Error - Unknown -> unknown has type checking
/* myVar2.trim();
new myVar2();
myVar2[7]; */

let myString: string = myVar1;
// myString = myVar2; -> Does not work. Unknown can only be assigned to unknown.
