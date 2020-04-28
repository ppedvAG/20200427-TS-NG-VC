// 3 inputs, type: text

// If number then Array<number>
// If string then Array<string>
// else Array<any>


function createArray2<T>() {
    let input1:unknown = (<HTMLInputElement>document.getElementById("inp1")!).value;
    let input2:unknown = (<HTMLInputElement>document.getElementById("inp2")!).value;
    let input3:unknown = (<HTMLInputElement>document.getElementById("inp3")!).value;
    let result = "";

    const n1 = input1 as number;
    const n2 = input2 as number;
    const n3 = input3 as number;

    const string2ForHtml1: string = input1 as string;
    const string2ForHtml2: string = input2 as string;
    const string2ForHtml3: string = input3 as string;

    // Are the inputs only numbers?
    if (isNaN(n1) == false && isNaN(n2) == false && isNaN(n3) == false) {
        let arr: Array<Number> = [n1, n2, n3];
        result = "NUMBERS: " + arr[0] + " " + arr[1] + " " + arr[2];
    }
    // Are the inputs only strings?
    else if (isNaN(n1) && isNaN(n2) && isNaN(n3)) {
        let arr: Array<string> = [string2ForHtml1, string2ForHtml2, string2ForHtml3];
        result = "STRING LENGTHS: " + arr[0].length + " " + arr[1].length + " " + arr[2].length;
    }
    // Mixed
    else {
        let arr: Array<any> = [input1, input2, input3];
        // arr[0] = arr[0] as string;
        result = "ANY: " + arr[0] + " " + arr[1] + " " + arr[2];
    }

    (<HTMLInputElement>document.getElementById("result")!).value = result;
    console.log('input', result);
}
