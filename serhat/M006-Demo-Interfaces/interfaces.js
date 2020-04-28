"use strict";
let todo1;
let einObject = { title: "einkaufen" };
function zeigeTodo(t) {
    document.getElementById('input1').textContent = "" + t;
}
todo1 = { id: 1, userId: 1, title: "post abholen", completed: false };
zeigeTodo(todo1);
function zeigeTitle(t, p) {
    document.getElementById(`input${p}`).textContent = "" + t.title;
}
zeigeTitle(todo1, 1);
zeigeTitle(einObject, 2);
let myCard = { owner: "Max", cardNumber: 1234567, CVN: 765 };
const myCard2 = { owner: "Max", cardNumber: 1234567, CVN: 765 };
myCard2.owner = "Vadzim";
class Couch {
    constructor(width, height, depth) {
        this.width = width;
        this.height = height;
        this.depth = depth;
    }
}
class Test {
    constructor(width, height, depth, anzahlBeine) {
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.anzahlBeine = anzahlBeine;
    }
}
let myLocation = { x: 6, y: 77 };
function move(k, x, y, z = 0) {
    let coord = k;
    coord.x = k.x + x;
    coord.y = k.y + y;
    coord.z = k.z + z;
    return coord;
}
let newCoord = move(myLocation, 3, 4, 5);
console.log('myLocation :>> ', myLocation.x + " " + myLocation.y + " " + myLocation.z);
console.log('newCoord :>> ', newCoord.x + " " + newCoord.y + " " + newCoord.z);
document.getElementById('input4').textContent = myLocation.x + " " + myLocation.y + " " + myLocation.z;
document.getElementById('input5').textContent = newCoord.x + " " + newCoord.y + " " + newCoord.z;
