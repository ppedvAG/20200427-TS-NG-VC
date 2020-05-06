"use strict";
let datum;
datum = "2020-04-28";
document.getElementById('outpP1').textContent = 'typeof datum: ' + typeof datum;
datum = new Date();
document.getElementById('outpP2').textContent = 'typeof datum: ' + typeof datum;
function erstelleTransportmittel(p) {
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
let test = { anzahlPassagiere: 3, fliege: () => 'testtest' };
let strLitType;
strLitType = "cm";
function on(ev, callback) {
    document.getElementById('outpP6').textContent = `folgendes Event wurde abgefangen ${ev}`;
    callback();
}
let fVar = () => {
    console.log('platzhalter ');
};
on("click", fVar);
