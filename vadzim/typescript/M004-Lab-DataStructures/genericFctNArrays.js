"use strict";
function packItToArray(inp1, inp2, inp3) {
    let inputs = [inp1, inp2, inp3];
    for (let index = 0; index < inputs.length; index++) {
        console.log('inputs[index] :>> ', inputs[index]);
        console.log('Number(inputs[index]) :>> ', Number(inputs[index]));
        if (isNaN(Number(inputs[index]))) {
            let regex = /[0-9]/;
            if (regex.exec(inputs[index]) == null) {
                inputs[index] = inputs[index];
            }
            else {
                inputs[index] = inputs[index];
            }
            console.log('regex.exec(inputs[index]) :>> ', regex.exec(inputs[index]));
        }
        else {
            inputs[index] = inputs[index];
        }
    }
    console.log('inputs :>> ', inputs);
    return inputs;
}
