// intro

let datum : string | Date;
datum = "2020-04-28";  // string
document.getElementById('paraP1')!.textContent = "typeof Datum  " + typeof datum;

datum = new Date();    // as Date
document.getElementById('paraP2')!.textContent = "typeof Datum  " + typeof datum;

interface Boot {
    AnzPassagiere: number;
    fahre(): any;
}

interface Flugzeug {
    AnzPassagiere: number;
    fliege():void;
}


function driving():any {
    console.log("hello world");
    return
};

let transportmittel3: Boot | Flugzeug;
transportmittel3 = {AnzPassagiere : 35, fliege: driving   };
/* transportmittel = {AnzPassagiere : 35, fliege:() =>{
    console.log("ist ja komisch, ne");
    return;  
    }
} */

document.getElementById('paraP3')!.textContent = "Ans Pass  " +  typeof transportmittel3;
document.getElementById('paraP4')!.textContent = "Ans Pass  " +  transportmittel3.AnzPassagiere;

transportmittel3.fliege();



// string literal type

let strLitType: "cm";
strLitType = "cm";

// strLitType = null;           //not assignable
// strLitType = undefined;      //not assignable


type EventType = "click" | "mouseover";

//einfach
function on(ev: EventType) :string  {

    return `folgendes Event wurde abgefangen ${ev}`;
}


document.getElementById('paraP5')!.textContent = on("click");
document.getElementById('paraP6')!.textContent = on("mouseover");

//kompliziert
function off(ev:EventType, callback: () => any ) {
    document.getElementById('paraP7')!.textContent = `folegdens Event wurde ausgelöst: ${ev}`;
    callback();
}

let varF = () : any => {
    console.log('test :>> ');
}

off("mouseover",varF);