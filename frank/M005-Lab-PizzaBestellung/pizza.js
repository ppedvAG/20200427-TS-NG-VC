"use strict";
var pizzaSize;
(function (pizzaSize) {
    pizzaSize[pizzaSize["klein"] = 1] = "klein";
    pizzaSize[pizzaSize["mittel"] = 2] = "mittel";
    pizzaSize[pizzaSize["gro\u00DF"] = 3] = "gro\u00DF";
    pizzaSize[pizzaSize["family"] = 4] = "family";
})(pizzaSize || (pizzaSize = {}));
function bestellen() {
    let myChoice = document.getElementById("selBox").value;
    console.log('myChoice :>> ', myChoice);
    let checkInput = Number(myChoice);
    if (isNaN(checkInput)) {
        console.log('Fehlerhafte Eingabe');
        return;
    }
    let size = pizzaSize[Number(myChoice)];
    document.getElementById("choice").textContent = size;
    document.getElementById("myout").style["display"] = "block";
    document.getElementById("choice").style["fontWeight"] = "bold";
    document.getElementById("choice").style["color"] = "red";
    document.getElementById("selBox").value = "";
}
