"use strict";
var PizzaGröße;
(function (PizzaGröße) {
    PizzaGröße[PizzaGröße["klein"] = 1] = "klein";
    PizzaGröße[PizzaGröße["mittel"] = 2] = "mittel";
    PizzaGröße[PizzaGröße["gro\u00DF"] = 3] = "gro\u00DF";
    PizzaGröße[PizzaGröße["family"] = 4] = "family";
})(PizzaGröße || (PizzaGröße = {}));
function bestelle(input) {
    let pizzaGröße = "";
    // Add new property in enum
    let PizzaGröße;
    (function (PizzaGröße) {
        PizzaGröße[PizzaGröße["super"] = 5] = "super";
    })(PizzaGröße || (PizzaGröße = {}));
    switch (input) {
        case 1:
            // PizzaGröße[1] selects text
            // PizzaGröße.klein selects value
            pizzaGröße = PizzaGröße[1];
            break;
        case 2:
            pizzaGröße = PizzaGröße[2];
            break;
        case 3:
            pizzaGröße = PizzaGröße[3];
            break;
        case 4:
            pizzaGröße = PizzaGröße[4];
            break;
        default:
            pizzaGröße = "Select an option, idiot!";
    }
    console.log('pizzaGröße :>> ', pizzaGröße);
    document.getElementById("output").textContent = pizzaGröße;
}
