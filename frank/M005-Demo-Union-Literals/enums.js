"use strict";
var Pizzagröße;
(function (Pizzagröße) {
    Pizzagröße[Pizzagröße["klein"] = 0] = "klein";
    Pizzagröße[Pizzagröße["mittel"] = 1] = "mittel";
    Pizzagröße[Pizzagröße["gro\u00DF"] = 2] = "gro\u00DF";
    Pizzagröße[Pizzagröße["family"] = 3] = "family";
})(Pizzagröße || (Pizzagröße = {}));
;
let g = Pizzagröße.mittel;
// let g2:Pizzagröße = undefined;
// let g2:Pizzagröße = null;
var Besteck;
(function (Besteck) {
    Besteck[Besteck["Gabel"] = 1] = "Gabel";
    Besteck[Besteck["Messer"] = 2] = "Messer";
    Besteck[Besteck["Teel\u00F6ffel"] = 4] = "Teel\u00F6ffel";
    Besteck[Besteck["Suppenl\u00F6ffel"] = 7] = "Suppenl\u00F6ffel";
    Besteck[Besteck["Brotmesser"] = 10] = "Brotmesser";
})(Besteck || (Besteck = {}));
;
let besteck1 = 1;
let besteckAsString = Besteck[4];
// welche Besteckteile liegen auf dem Tisch, wenn wir eine 3 haben??
var Längen;
(function (Längen) {
    Längen[Längen["cm"] = 1.5] = "cm";
    Längen[Längen["m"] = 3] = "m";
})(Längen || (Längen = {}));
