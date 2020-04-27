

function calcValues(kindof : string):void {

    let para1:number;
    let para2:number;
    let result : number = 0;

    para1 = Number((<HTMLInputElement>document.getElementById("Parameter1"))!.value);
    para2 = Number((<HTMLInputElement>document.getElementById("Parameter2"))!.value);
    
    if (para1 === 0 || para2 === 0)
    {
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

    (<HTMLInputElement>document.getElementById("Result"))!.value = String(result);

}