"use strict";
function addition() {
    let input1 = Number(document.getElementById("input1").value);
    let input2 = Number(document.getElementById("input2").value);
    let result = input1 + input2;
    document.getElementById("result").value = result.toString();
}
function subtraction() {
    let input1 = Number(document.getElementById("input1").value);
    let input2 = Number(document.getElementById("input2").value);
    let result = input1 - input2;
    document.getElementById("result").value = result.toString();
}
function multiplication() {
    let input1 = Number(document.getElementById("input1").value);
    let input2 = Number(document.getElementById("input2").value);
    let result = input1 * input2;
    document.getElementById("result").value = result.toString();
}
function division() {
    let input1 = Number(document.getElementById("input1").value);
    let input2 = Number(document.getElementById("input2").value);
    if (input2 > 0) {
        let result = input1 / input2;
        document.getElementById("result").value = result.toString();
    }
    else {
        alert("Division with zero not permittet");
        document.getElementById("result").value = "";
    }
}
