// #######################################################
// intro unions

let datum: string | Date;
datum = "2020-04-28"; // string
document.getElementById('outpP1')!.textContent = 'typeof datum: ' + typeof datum; // js string
datum = new Date(); // Date
document.getElementById('outpP2')!.textContent = 'typeof datum: ' + typeof datum; // js object

// #######################################################
// unions & interfaces 

interface Boot {
    anzahlPassagiere: number;
    fahre(): string;
}

interface Flugzeug {
    anzahlPassagiere: number;
    fliege(): string;
}

function erstelleTransportmittel(p: number) {    
    // let transportmittel: Boot | Flugzeug = {anzahlPassagiere: 34, fliege: function fliege () {return 0});
    let transportmittel: Boot | Flugzeug;
    if (p <= 10 ) {
        transportmittel = {} as Boot;
        transportmittel.anzahlPassagiere = p;
        transportmittel.fahre = () => `Ich transportiere max 10 Passagiere, im Moment sind es {p}.`;
        return transportmittel;
    } else if (p <= 100) {
        transportmittel = {} as Flugzeug;
        transportmittel.anzahlPassagiere = p;
        transportmittel.fliege = () => `Ich transportiere max 100 Passagiere, im Moment sind es {p}.`;
        return transportmittel;
    }        
}

let myTransportmittel = erstelleTransportmittel(30)!;

document.getElementById('outpP3')!.textContent = "myTransportmittel!.anzahlPassagiere: " + myTransportmittel.anzahlPassagiere;
// document.getElementById('outpP4')!.textContent = "myTransportmittel!.anzahlPassagiere: " + myTransportmittel.fliege();
// document.getElementById('outpP4')!.textContent = "myTransportmittel!.anzahlPassagiere: " + myTransportmittel.fahre(); // TypeError: myTransportmittel.fahre is not a function

let test: Boot | Flugzeug = {anzahlPassagiere: 3, fliege: () => 'testtest'};
// document.getElementById('outpP5')!.textContent = "myTransportmittel!.anzahlPassagiere: " + myTransportmittel.fliege();
// document.getElementById('outpP5')!.textContent = "" + (test instanceof Boo);
// instanceof kann auf der rechten Seite kein Interface haben

// komplette Kompatibilität mit dem Typ Boot | Flugzeug hat ein Objekt { anzahlPassagiere: ... }
// alle andere Strukturen, die diese Eigenschaft neben anderen beinhalten sind teiweise kompatibel, sie überschneiden sich


// STRING LITERAL TYPE  

let strLitType: "cm";
strLitType = "cm";
// let strLitType2: "cm" = null; // not assignable
// let strLitType2: "cm" = undefined; // not assignable

type EventType = "click" | "mouseover";

function on(ev: EventType, callback: () => any) {
    document.getElementById('outpP6')!.textContent = `folgendes Event wurde abgefangen ${ev}`;   
    callback();
}

let fVar: () => any = () => {
    console.log('platzhalter ');
};
on("click", fVar);

// on("keydown", () => { // Argument of type '"keydown"' is not assignable to parameter of type 'EventType'
//     document.getElementById('outpP6')!.textContent = "keydown-Event";
//     return '';
// });




