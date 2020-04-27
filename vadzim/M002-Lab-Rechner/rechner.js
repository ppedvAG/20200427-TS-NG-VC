"use strict";
function addiere() {
    let result = Number(document.getElementById("zahl1").value) + Number(document.getElementById("zahl2").value);
    document.getElementById("resultat").value = String(result);
}
function subtrahiere() {
    let result = Number(document.getElementById("zahl1").value) - Number(document.getElementById("zahl2").value);
    document.getElementById("resultat").textContent = String(result);
}
function multipliziere() {
    let result = Number(document.getElementById("zahl1").value) * Number(document.getElementById("zahl2").value);
    document.getElementById("resultat").textContent = String(result);
}
function teile() {
    let result = Number(document.getElementById("zahl1").value) / Number(document.getElementById("zahl2").value);
    document.getElementById("resultat").textContent = String(result);
}
