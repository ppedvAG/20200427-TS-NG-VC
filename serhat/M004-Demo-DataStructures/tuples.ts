// Intro

// Mit Tupel kann man definieren an welcher Stelle welcher Datentyp vorkommt.

let birthday:  [number, Date];

let customerId: number = 4;

birthday = [customerId, new Date(Date.now())]

document.getElementById('tuplesP1')!.textContent = birthday[0] + " wurde geboren am " + birthday[1].toLocaleDateString();

