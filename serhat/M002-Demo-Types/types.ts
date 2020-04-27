function showNumber() {
    let decimal: number = 1111;
    document.getElementById('numberP1')!.textContent = String(decimal);
    let binary: number = 0b1111;
    document.getElementById('numberP2')!.textContent = String(binary);
    let octal: number = 0o1111;
    document.getElementById('numberP3')!.textContent = String(octal);
    let hexa: number = 0x1111;
    document.getElementById('numberP4')!.textContent = String(hexa);
    let double: number = 11.11;
    document.getElementById('numberP5')!.textContent = String(double);

    let big: Number = new Number(34);
    document.getElementById('numberP6')!.textContent = String(big);
    let bigN: bigint = 2345n;
    document.getElementById('numberP7')!.textContent = String(bigN);
    let x: bigint = 1111n;
    document.getElementById('numberP8')!.textContent = typeof x;
}

showNumber();

function showString() {
    let doubleQuotedString: string = "bla";
    document.getElementById('stringP1')!.textContent = "Double Quoted:" + doubleQuotedString;
    let singleQuotedString: string = 'blo';
    document.getElementById('stringP2')!.textContent = "Single Quoted:" + singleQuotedString;
    let templateString: string = `blub ${doubleQuotedString}`;
    document.getElementById('stringP3')!.textContent = "Template Quoted:" + templateString;
}

showString();
