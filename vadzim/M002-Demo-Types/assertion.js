"use strict";
function zeigeAssertion() {
    const value1 = "text text text";
    // const stringForHtml: string = <string>value1
    const stringForHtml = value1;
    document.getElementById('assertP1').textContent = stringForHtml.toUpperCase(); // ausgabe Funktioniert
    const value2 = 3465;
    const string2ForHtml = value2;
    document.getElementById('assertP1').textContent = string2ForHtml.toUpperCase();
}
zeigeAssertion();
