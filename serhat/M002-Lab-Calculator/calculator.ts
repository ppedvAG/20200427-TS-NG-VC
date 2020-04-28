function addition() {
    let input1: number = Number((<HTMLInputElement>document.getElementById("input1")!).value);
    let input2: number = Number((<HTMLInputElement>document.getElementById("input2")!).value);

    let result: number = input1 + input2;

    (<HTMLInputElement>document.getElementById("result")!).value = result.toString();
}

function subtraction() {
    let input1: number = Number((<HTMLInputElement>document.getElementById("input1")!).value);
    let input2: number = Number((<HTMLInputElement>document.getElementById("input2")!).value);

    let result: number = input1 - input2;

    (<HTMLInputElement>document.getElementById("result")!).value = result.toString();
}

function multiplication() {
    let input1: number = Number((<HTMLInputElement>document.getElementById("input1")!).value);
    let input2: number = Number((<HTMLInputElement>document.getElementById("input2")!).value);

    let result: number = input1 * input2;

    (<HTMLInputElement>document.getElementById("result")!).value = result.toString();
}

function division() {
    let input1: number = Number((<HTMLInputElement>document.getElementById("input1")!).value);
    let input2: number = Number((<HTMLInputElement>document.getElementById("input2")!).value);

    if (input2 > 0) {
        let result: Number = input1 / input2;
        (<HTMLInputElement>document.getElementById("result")!).value = result.toString();
    }
    else {
        alert("Division with zero not permittet");
        (<HTMLInputElement>document.getElementById("result")!).value = "";
    }
}