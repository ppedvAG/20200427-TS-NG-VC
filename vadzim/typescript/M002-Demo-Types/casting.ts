let myStr1: String = new String('dssdfgdf');
document.getElementById('castP1')!.innerText = `
String to string, valueOf():
myStr1: ${myStr1}
typeof myStr1: ${typeof myStr1}
myStr1.valueOf(): ${myStr1.valueOf()}
typeof myStr1.valueOf(): ${typeof myStr1.valueOf()}
---`;

let myNr1: number = 3;
document.getElementById('castP2')!.innerText = `
anything else to string, Option1 String():
myNr1: ${myNr1}
typeof myNr1: ${typeof myNr1}
String(myNr1): ${String(myNr1)}
typeof String(myNr1): ${typeof String(myNr1)}
---`;

let myObj1: object = {k: 'v'}
document.getElementById('castP3')!.innerText = `
anything else to string, Option2 .toString():
myObj1: ${myObj1}
typeof myObj1: ${typeof myObj1}
myObj1.toString(): ${myObj1.toString()}
typeof myObj1.toString(): ${typeof myObj1.toString()}
---`;

let myNr2 = new Number(3);
document.getElementById('castP4')!.innerText = `
Number to number, valueOf():
myNr2: ${myNr2}
typeof myNr2: ${typeof myNr2}
myNr2.valueOf(): ${myNr2.valueOf()}
typeof myNr2.valueOf(): ${typeof myNr2.valueOf()}
---`;

let myNumStr2: string = '4';
document.getElementById('castP5')!.innerText = `
string to number, Option1 + or other arithmetic operator
myStr2: ${myNumStr2}
typeof myStr2: ${typeof myNumStr2}
+myStr2: ${+myNumStr2}
typeof +myStr2: ${typeof +myNumStr2}
`;

let myNumStr3: string = '3.3';
let myNumStr4: string = '0xF4';
document.getElementById('castP6')!.innerText = `
string to number, Option2 parseInt()
myNumStr3: ${myNumStr3}
typeof myNumStr3: ${typeof myNumStr3}
parseInt(myNumStr3): ${parseInt(myNumStr3)}
typeof parseInt(myNumStr3): ${typeof parseInt(myNumStr3)}
myNumStr4: ${myNumStr4}
typeof myNumStr4: ${typeof myNumStr4}
parseInt(myNumStr4, 16): ${parseInt(myNumStr4, 16)}
typeof parseInt(myNumStr4, 16): ${typeof parseInt(myNumStr4, 16)}
`;

document.getElementById('castP7')!.innerText = `
string to number, Option3 parseFloat()
myNumStr3: ${myNumStr3}
typeof myNumStr3: ${typeof myNumStr3}
parseFloat(myNumStr3): ${parseFloat(myNumStr3)}
typeof parseFloat(myNumStr3): ${typeof parseFloat(myNumStr3)}
myNumStr4: ${myNumStr4}
typeof myNumStr4: ${typeof myNumStr4}
parseFloat(myNumStr4): ${parseFloat(myNumStr4)}
typeof parseFloat(myNumStr4): ${typeof parseFloat(myNumStr4)}
`;

document.getElementById('castP8')!.innerText = `
string to number, Option4 Number()
myNumStr3: ${myNumStr3}
typeof myNumStr3: ${typeof myNumStr3}
Number(myNumStr3): ${Number(myNumStr3)}
typeof Number(myNumStr3): ${typeof Number(myNumStr3)}
myNumStr4: ${myNumStr4}
typeof myNumStr4: ${typeof myNumStr4}
Number(myNumStr4): ${Number(myNumStr4)}
typeof Number(myNumStr4): ${typeof Number(myNumStr4)}
`;