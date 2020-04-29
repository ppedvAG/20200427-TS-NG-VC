"use strict";
function erstelleTransportmittel(p) {
    // let transportmittel: Boot | Flugzeug = {anzahlPassagiere: 34, fliege: function fliege () {return 0});
    let transportmittel;
    if (p <= 10) {
        transportmittel = {};
        transportmittel.anzahlPassagiere = p;
        transportmittel.fahre = () => `Ich transportiere max 10 Passagiere, im Moment sind es {p}.`;
        return transportmittel;
    }
    else if (p <= 100) {
        transportmittel = {};
        transportmittel.anzahlPassagiere = p;
        transportmittel.fliege = () => `Ich transportiere max 100 Passagiere, im Moment sind es {p}.`;
        return transportmittel;
    }
}
let myTransportmittel = erstelleTransportmittel(30);
document.getElementById('outpP3').textContent = "myTransportmittel!.anzahlPassagiere: " + myTransportmittel.anzahlPassagiere;
// document.getElementById('outpP4')!.textContent = "myTransportmittel!.anzahlPassagiere: " + myTransportmittel!.fliege();
//document.getElementById('outpP4')!.textContent = "myTransportmittel!.anzahlPassagiere: " + myTransportmittel!.fahre();
let test36 = { anzahlPassagiere: 3, fliege: () => 'testtest' };
//document.getElementById('outpP5')!.textContent = "myTransportmittel!.anzahlPassagiere: " + myTransportmittel!.fliege();
