"use strict";
//intro
let item1;
// Kompatibilität von Interface Datentypen
item1 = { id: 1, userId: 1, title: "Fegen", completed: false };
let einObject = { title: "einkaufen" };
//item1 = einObject;   //<- Fehler, fehlen werte von todo
// aber
einObject = item1; //<- funktioniert; Overlapping Types !!!
//regel: rechtes Object muss gleiche oder größere Form haben (Menge, Untermenge)
function zeigeTodo(t) {
    document.getElementById("interP1").textContent = " " + t;
}
//zeigeTodo(einObject); //<- auch wieder fehlende Eigenschaften von todo
zeigeTodo(item1);
function zeigeTitle(t, p) {
    document.getElementById(`interP${p}`).textContent = `Item index ${p} ` + t.title;
}
zeigeTitle(item1, 2);
einObject.title = "Auto putzen";
zeigeTitle(einObject, 3); //<-  geht
let myCard = { owner: "Franky", cardNumber: 123456789, pin: 1234 };
// myCard.cardNumber = 987654321; // Fehler
const myCard1 = { owner: "Franky", cardNumber: 123456789, pin: 1234 };
myCard1.owner = "Max";
// klasse implementiert ein Interface !!!
class Sofa {
    /**
     * ctor
     */
    constructor(breite, höhe, tiefe, farbe) {
        this.breite = breite;
        this.höhe = höhe;
        this.tiefe = tiefe;
        this.farbe = farbe;
    }
}
//oder
class UEckSofa extends Sofa {
    constructor(breite, höhe, tiefe, farbe, anzSchlafPlätze, anzEcken) {
        super(breite, höhe, tiefe, farbe);
        this.breite = breite;
        this.höhe = höhe;
        this.tiefe = tiefe;
        this.farbe = farbe;
        this.anzSchlafPlätze = anzSchlafPlätze;
        this.anzEcken = anzEcken;
    }
}
let me = { FirstName: "Frank", LastName: "Test", Größe: 1.85, Haarfarbe: "blond" };
let you = { FirstName: "Hallo", LastName: "Du-da", Größe: 1.55 };
function WhoIsBigger(t, z) {
    if (t.Größe > z.Größe) {
        return t.FirstName;
    }
    else {
        return z.FirstName;
    }
}
let what = WhoIsBigger(me, you);
