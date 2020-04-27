"use strict";
function calcValues(kindof) {
    let para1;
    let para2;
    let result = 0;
    para1 = Number(document.getElementById("Parameter1").value);
    para2 = Number(document.getElementById("Parameter2").value);
    if (para1 === 0 || para2 === 0) {
        console.log("Abbruch");
        return;
    }
    switch (kindof) {
        case "mul":
            result = para1 * para2;
            break;
        case "div":
            result = para1 / para2;
            break;
        case 'add':
            result = para1 + para2;
            break;
        case "minus":
            result = para1 - para2;
            break;
        default:
            break;
    }
    document.getElementById("Result").value = String(result);
}
