// intro

// eine Array-ähnliche Datenstruktur

// Mit Tupel kann man definieren, an welcher Stelle, welcher Datentyp vorkommt

// let geburtstag: [number, number];
let geburtstag: [number, Date];

let customerId: number = 4;

// geburtstag = [customerId, Date.now()]
geburtstag = [customerId, new Date(Date.now())]

document.getElementById('tuplesP1')!.textContent = "Kunde " + geburtstag[0] + " wurde geboren am " + geburtstag[1].toLocaleDateString();

// mehr als 2 Elemente

let myTuple: [number, string, boolean] = [5, 'ds', false];