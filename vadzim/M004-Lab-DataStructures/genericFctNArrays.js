"use strict";
// 3 inputs, type: text
// wenn Zahlen, dann Array<number>
// wenn Strings, dann Array<string>
// sonst Array<any>
// viel Erfolg!
function packItToArray(inp1, inp2, inp3) {
    let inputs = [inp1, inp2, inp3];
    for (let index = 0; index < inputs.length; index++) {
        console.log('inputs[index] :>> ', inputs[index]);
        console.log('Number(inputs[index]) :>> ', Number(inputs[index]));
        // debugger;
        if (isNaN(Number(inputs[index]))) {
            let regex = /[0-9]/;
            if (regex.exec(inputs[index]) == null) {
                // inputs[index] = "string"; // um im Browser nachzuschauen                
                inputs[index] = inputs[index]; // um ein Array mit eingeschränkten Datentypen
            }
            else {
                // inputs[index] = "any";
                inputs[index] = inputs[index];
            }
            console.log('regex.exec(inputs[index]) :>> ', regex.exec(inputs[index]));
        }
        else {
            // inputs[index] = "number";
            inputs[index] = inputs[index];
        }
    }
    console.log('inputs :>> ', inputs);
    return inputs;
    // *todo wie kriegt man in JS noch den Unterschied zwischen string & number im Array
}
