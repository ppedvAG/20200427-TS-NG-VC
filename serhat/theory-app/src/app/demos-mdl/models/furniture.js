"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sofa {
    constructor(breite, höhe, tiefe, farbe) {
        this.breite = breite;
        this.höhe = höhe;
        this.tiefe = tiefe;
        this.farbe = farbe;
    }
}
exports.Sofa = Sofa;
class UFormSofa extends Sofa {
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
exports.UFormSofa = UFormSofa;
