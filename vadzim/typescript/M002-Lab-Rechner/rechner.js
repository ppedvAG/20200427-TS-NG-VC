"use strict";
function berechne(z1, z2, op) {
    let result = NaN;
    switch (op) {
        case '+':
            result = z1 + z2;
            break;
        case '-':
            result = z1 - z2;
            break;
        case '*':
            result = z1 * z2;
            break;
        case '/':
            result = z1 / z2;
            break;
        default:
            console.log('smth went wrong');
            break;
    }
    document.getElementById("resultat").value = String(result);
}
