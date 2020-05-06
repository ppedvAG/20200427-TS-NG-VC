"use strict";
let todo1;
let einObjekt = { title: "einkaufen" };
todo1 = { id: 1, userId: 1, title: "post abholen", completed: false };
einObjekt = todo1;
function zeigeTodo(t) {
    document.getElementById('interfP1').textContent = "t.id: " + t.id;
}
zeigeTodo(todo1);
function zeigeTitle(t, p) {
    document.getElementById(`interfP${p}`).textContent = "t.title: " + t.title;
}
zeigeTitle(todo1, 2);
einObjekt.title = "fahrrad repariehren";
zeigeTitle(einObjekt, 3);
let myCard = { besitzer: "Max", cardNumber: 1234567, CVN: 765 };
const myCard2 = { besitzer: "Max", cardNumber: 1234567, CVN: 765 };
myCard2.besitzer = "Vadzim";
class Sofa {
    constructor(breite, höhe, tiefe, farbe) {
        this.breite = breite;
        this.höhe = höhe;
        this.tiefe = tiefe;
        this.farbe = farbe;
    }
}
class U_FormSofa extends Sofa {
    constructor(breite, höhe, tiefe, farbe, anzahlSchlafplätze, innereRaum) {
        super(breite, höhe, tiefe, farbe);
        this.breite = breite;
        this.höhe = höhe;
        this.tiefe = tiefe;
        this.farbe = farbe;
        this.anzahlSchlafplätze = anzahlSchlafplätze;
        this.innereRaum = innereRaum;
    }
}
let myLocation = { x: 23, y: 5 };
function bewegeZu(k, x, y, z) {
    let neueKoord = k;
    neueKoord.x = k.x + x;
    neueKoord.y = k.y + y;
    neueKoord.z = k.z + z;
    return neueKoord;
}
let myLocation2 = { x: 43, y: 78, z: 435 };
document.getElementById('interfP4').textContent = "bewegeZu(myLocation, 23, 22, 43).z: " + bewegeZu(myLocation, 23, 22, 43).z;
document.getElementById('interfP5').textContent = "bewegeZu(myLocation2, 23, 22, 45).z: " + bewegeZu(myLocation2, 23, 22, 45).z;
