

enum pizzaSize {klein = 1, mittel, groß, family}


function bestellen() {

    let myChoice = (<HTMLInputElement>document.getElementById("selBox"))!.value;
    console.log('myChoice :>> ', myChoice);

    let checkInput:number = Number(myChoice);
    if (isNaN(checkInput)) {
        console.log('Fehlerhafte Eingabe' );
        return;
    }

    let size:string = pizzaSize[Number(myChoice)];


    document.getElementById("choice")!.textContent = size;
    document.getElementById("myout")!.style["display"] = "block";
    document.getElementById("choice")!.style["fontWeight"] = "bold";
    document.getElementById("choice")!.style["color"] = "red";
    
    (<HTMLInputElement>document.getElementById("selBox"))!.value = "";

}
