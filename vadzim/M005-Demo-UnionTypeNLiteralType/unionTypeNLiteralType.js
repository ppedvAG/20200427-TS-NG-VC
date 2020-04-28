"use strict";
// #######################################################
// intro unions
let datum;
datum = "2020-04-28"; // string
document.getElementById('outpP1').textContent = 'typeof datum: ' + typeof datum; // js string
datum = new Date(); // Date
document.getElementById('outpP2').textContent = 'typeof datum: ' + typeof datum; // js object
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
// document.getElementById('outpP4')!.textContent = "myTransportmittel!.anzahlPassagiere: " + myTransportmittel.fliege();
// document.getElementById('outpP4')!.textContent = "myTransportmittel!.anzahlPassagiere: " + myTransportmittel.fahre(); // TypeError: myTransportmittel.fahre is not a function
let test = { anzahlPassagiere: 3, fliege: () => 'testtest' };
// document.getElementById('outpP5')!.textContent = "myTransportmittel!.anzahlPassagiere: " + myTransportmittel.fliege();
// document.getElementById('outpP5')!.textContent = "" + (test instanceof Boo);
// instanceof kann auf der rechten Seite kein Interface haben
// komplette Kompatibilität mit dem Typ Boot | Flugzeug hat ein Objekt { anzahlPassagiere: ... }
// alle andere Strukturen, die diese Eigenschaft neben anderen beinhalten sind teiweise kompatibel, sie überschneiden sich
// STRING LITERAL TYPE  
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
// on("keydown", () => { // Argument of type '"keydown"' is not assignable to parameter of type 'EventType'
//     document.getElementById('outpP6')!.textContent = "keydown-Event";
//     return '';
// });
