// Intro

let date: string | Date;
date = "2020-04-28";
document.getElementById('outpP1')!.textContent = typeof date;
date = new Date();
document.getElementById('outpP2')!.textContent = typeof date;

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
 
let myTransportmittel = erstelleTransportmittel(30);
 
document.getElementById('outpP3')!.textContent = "myTransportmittel!.anzahlPassagiere: " + myTransportmittel!.anzahlPassagiere;
// document.getElementById('outpP4')!.textContent = "myTransportmittel!.anzahlPassagiere: " + myTransportmittel!.fliege();

console.log(' (<Boot>myTransportmittel)!.fahre() :>> ',  (<Boot>myTransportmittel)!.fahre());
document.getElementById('outpP4')!.textContent = "myTransportmittel!.anzahlPassagiere: " + (<Boot>myTransportmittel)!.fahre();
 
let test: Boot | Flugzeug = {anzahlPassagiere: 3, fliege: () => 'testtest'};
document.getElementById('outpP5')!.textContent = "myTransportmittel!.anzahlPassagiere: " + (<Flugzeug>myTransportmittel)!.fliege();


// STRING LITERAL TYPE

let strLitType: "cm";
strLitType: "cm";

type EventType = "click" | "mouseover";

function on(ev: EventType, callback: () => string) {
    callback = () => `folgendes Event wurde abgefangen ${ev}`;
}

// document.getElementById('outpP6')!.textContent = on("click");

