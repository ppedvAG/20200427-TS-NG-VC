"use strict";
function zeigeAssertion() {
    const value1 = "text text text";
    const stringForHtml = value1;
    document.getElementById('assertP1').textContent = stringForHtml.toUpperCase();
    const value2 = 3465;
    const string2ForHtml = value2;
    document.getElementById('assertP1').textContent = string2ForHtml.toUpperCase();
}
zeigeAssertion();
