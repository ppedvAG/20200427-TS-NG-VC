"use strict";
// intro
// eine Array-ähnliche Datenstruktur
// Mit Tupel kann man definieren, an welcher Stelle, welcher Datentyp vorkommt
// let geburtstag: [number, number];
let geburtstag;
let customerId = 4;
// geburtstag = [customerId, Date.now()]
geburtstag = [customerId, new Date(Date.now())];
document.getElementById('tuplesP1').textContent = "Kunde " + geburtstag[0] + " wurde geboren am " + geburtstag[1].toLocaleDateString();
// mehr als 2 Elemente
let myTuple = [5, 'ds', false];
