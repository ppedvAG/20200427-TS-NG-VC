"use strict";
let geburtstag;
let customerId = 4;
geburtstag = [customerId, new Date(Date.now())];
document.getElementById('tuplesP1').textContent = "Kunde " + geburtstag[0] + " wurde geboren am " + geburtstag[1].toLocaleDateString();
let myTuple = [5, 'ds', false];
