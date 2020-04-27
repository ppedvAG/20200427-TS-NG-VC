function zeigeNumber() {
    let dezimaleZahl: number = 1111;
    document.getElementById('numberP1')!.textContent = String(dezimaleZahl);
    let binäreZahl: number = 0b1111;
    document.getElementById('numberP2')!.textContent = String(binäreZahl);
    let hexadezimaleZahl: number = 0x1111;
    document.getElementById('numberP3')!.textContent = String(hexadezimaleZahl);
    let oktaleZahl: number = 0o1111;
    document.getElementById('numberP4')!.textContent = String(oktaleZahl);
    let kommaZahl: number = 11.11;
    document.getElementById('numberP5')!.textContent = String(kommaZahl);
    document.getElementById('numberP6')!.textContent = 'typeof kommaZahl: ' + typeof kommaZahl;
    let bigNumber: Number = new Number(34);
    document.getElementById('numberP7')!.textContent = 'typeof bigNumber: ' + typeof bigNumber;
    let myBigInt: bigint = 2345n;
    document.getElementById('numberP8')!.textContent = 'myBigInt: ' + myBigInt;
    // let myBigInt2: BigInteger = 2345n; // BigInteger & Uint8Array ??? *todo
}

zeigeNumber();

document.getElementById('ptnz')!.textContent = `4**2: ${4**2}`;

function zeigeString() {
    let doubleQuotedString: string = "bla";
    document.getElementById('stringP1')!.textContent = "doubleQuotedString: " + doubleQuotedString;
    let singleQuotedString: string = "blo";
    document.getElementById('stringP2')!.textContent = "singleQuotedString: " + singleQuotedString;
    let templateString: string = `ble \n
    ${doubleQuotedString}
    `;
    document.getElementById('stringP3')!.textContent = "templateString über textContent: " + templateString;
    document.getElementById('stringP4')!.innerText = "templateString über innerText: " + templateString;
    document.getElementById('stringP5')!.textContent = `typeof templateString: ${typeof templateString}`;
    let bigString: String = new String(345);
    document.getElementById('stringP6')!.textContent = `typeof bigString: ${typeof bigString}`;
    let someString: string = bigString.valueOf();
    document.getElementById('stringP7')!.textContent = `Wrapper-Object zum primitiven Typ - 
    mit WrapperObjectInstance.valueOf()`;
}

zeigeString();


function zeigeSpecials() {
    let myNull: null = null;
    if (myNull === null)
    {
        document.getElementById('specialP1')!.textContent = "null als string: " + myNull;
    }
    let mynullStr: string = "asdf";
    mynullStr = String(null);
    document.getElementById('specialP2')!.textContent = "mynullStr, null to string: " + mynullStr; 
    document.getElementById('specialP3')!.textContent = "typeof myNull: " + typeof myNull;
    document.getElementById('specialP4')!.textContent = "myNull instanceof Object: " + String(myNull instanceof Object);
    
    let myUndefined: undefined = undefined;
    document.getElementById('specialP5')!.textContent = "typeof myUndefined: " + typeof myUndefined;

    let myVoid: void;
    myVoid = undefined;

    document.getElementById('specialP6')!.textContent = "typeof myVoid: " + typeof myVoid + "void ist bei Funktionen nützlich, als Variable aber nicht";

    let myNever: never;
    // myNever = undefined; 
    document.getElementById('specialP6')!.textContent = "typeof myNever: Fehler, never ist bei Funktionen nützlich, die zu ihrem Ende nie gelangen";
   
}

zeigeSpecials();

function error(m: string): never {
    throw new Error(m);
}

function testeNever() {
    return error("Test Fehler");
}

// document.getElementById('specialP7')!.textContent = testeNever() + "never wird nicht gerendert, nur über Intellisense können wir never als Rückgabetyp sehen";

let mySmallObject: object;

let myBigObject: Object;

mySmallObject = new Object(4);
document.getElementById('specialP8')!.textContent = "typeof mySmallObject: " + typeof mySmallObject; // kleines o! 
