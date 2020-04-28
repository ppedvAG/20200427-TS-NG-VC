interface Todo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

let todo1: Todo;

let einObject = { title: "einkaufen" };

function zeigeTodo(t: Todo) {
    document.getElementById('input1')!.textContent = "" + t;
}

todo1 = { id: 1, userId: 1, title: "post abholen", completed: false };

zeigeTodo(todo1);

function zeigeTitle(t: { title: string }, p: number) {
    document.getElementById(`input${p}`)!.textContent = "" + t.title;
}

zeigeTitle(todo1, 1);
zeigeTitle(einObject, 2);

// Readonly
interface CreditCard {
    owner: string;
    readonly cardNumber: number;
    readonly CVN: number;
}

let myCard: CreditCard = { owner: "Max", cardNumber: 1234567, CVN: 765 }
const myCard2: CreditCard = { owner: "Max", cardNumber: 1234567, CVN: 765 }

myCard2.owner = "Vadzim";

interface Furniture {
    width: number;
    height: number;
    depth: number;
}

interface Table extends Furniture {
    anzahlBeine: number;
}

class Couch implements Furniture {
    constructor(public width: 10, public height: 22, public depth: 33) {

    }
}

class Test implements Table {
    constructor(public width: 10, public height: 22, public depth: 33, public anzahlBeine: 7) {

    }
}

interface Koordinate {
    x: number;
    y: number;
    z?: number;
}

let myLocation: Koordinate = { x: 6, y: 77 }

function move(k:Koordinate, x:number, y:number, z = 0) : Koordinate {
    let coord: Koordinate = k;
    coord.x = k.x + x;
    coord.y = k.y + y;
    coord.z = k.z! + z!;

    return coord;
}

let newCoord: Koordinate = move(myLocation, 3, 4, 5);

console.log('myLocation :>> ', myLocation.x + " " + myLocation.y + " " + myLocation.z);
console.log('newCoord :>> ', newCoord.x + " " + newCoord.y + " " + newCoord.z);

document.getElementById('input4')!.textContent = myLocation.x + " " + myLocation.y + " " + myLocation.z;
document.getElementById('input5')!.textContent = newCoord.x + " " + newCoord.y + " " + newCoord.z;

