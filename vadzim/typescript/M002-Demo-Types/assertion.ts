function zeigeAssertion(): void {
    const value1: unknown = "text text text";
    // const stringForHtml: string = <string>value1
    const stringForHtml: string = value1 as string;   

    document.getElementById('assertP1')!.textContent = stringForHtml.toUpperCase(); // ausgabe Funktioniert

    const value2: unknown = 3465;    
    const string2ForHtml: string = value2 as string;
    document.getElementById('assertP1')!.textContent = string2ForHtml.toUpperCase();
}

zeigeAssertion();