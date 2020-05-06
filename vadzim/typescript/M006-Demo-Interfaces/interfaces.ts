// intro
// Interface ist ein Datentyp

interface Todo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

let todo1: Todo;

// Kompatibilität von Interface-Datentypen

let einObjekt = { title: "einkaufen" };

// todo1 = einObjekt;
todo1 = { id: 1, userId: 1, title: "post abholen", completed: false };

einObjekt = todo1;
// ruft keine Fehler auf, obwohl diese zwei Objekte verschiedenes Shape haben
// Regel ist, das rechte Objekt muss gleiche oder größere Form haben

function zeigeTodo(t: Todo) {
    document.getElementById('interfP1')!.textContent = "t.id: " + t.id;
}



// zeigeTodo(einObjekt); // Fehler
zeigeTodo(todo1);

function zeigeTitle(t: { title: string }, p: number) {
    document.getElementById(`interfP${p}`)!.textContent = "t.title: " + t.title;
}

zeigeTitle(todo1, 2); // 
einObjekt.title = "fahrrad repariehren";
zeigeTitle(einObjekt, 3);
// hat funktioniert, weil hier ein Objekt mit der gleichen oder größeren Form übergeben wurde.


// readonly

interface CreditCard {
    besitzer: string;
    readonly cardNumber: number;
    readonly CVN: number;
}

let myCard: CreditCard = { besitzer: "Max", cardNumber: 1234567, CVN: 765 }

// myCard.cardNumber = 4; // Fehler

const myCard2: CreditCard = { besitzer: "Max", cardNumber: 1234567, CVN: 765 }

myCard2.besitzer = "Vadzim";

// myCard2 = myCard; // Fehler, weil const


// extend

interface Möbelstück {
    breite: number;
    höhe: number;
    tiefe: number;
}

// class _className_ implements _interfaceName_
class Sofa implements Möbelstück {
    /**
     *ctor
     */
    constructor(public breite: number, public höhe: number, public tiefe: number, public farbe: string) {

    }

}

// inteface _interfaceName_ extends _interfaceName_
interface Tisch extends Möbelstück {
    anzahlBeine: number;
}

interface EckSofa extends Sofa {
    anzahlSchlafplätze: number;
}

class U_FormSofa extends Sofa implements EckSofa {
    constructor(public breite: number, 
        public höhe: number, 
        public tiefe: number, 
        public farbe: string, 
        public anzahlSchlafplätze: number, 
        public innereRaum: number) {
        super(breite, höhe, tiefe, farbe);
    }
}



// optional props

interface Koordinate {
    x: number;
    y: number;
    z?: number;
}

let myLocation: Koordinate = {x: 23, y: 5};

function bewegeZu(k: Koordinate, x: number, y: number, z?: number): Koordinate {
    let neueKoord: Koordinate = k;
    neueKoord.x = k.x + x;
    neueKoord.y = k.y + y;
    neueKoord.z = k.z! + z!; // NaN *todo 
    return neueKoord;
} 

let myLocation2: Koordinate = {x: 43, y: 78, z: 435};

document.getElementById('interfP4')!.textContent = "bewegeZu(myLocation, 23, 22, 43).z: " + bewegeZu(myLocation, 23, 22, 43).z;
document.getElementById('interfP5')!.textContent = "bewegeZu(myLocation2, 23, 22, 45).z: " + bewegeZu(myLocation2, 23, 22, 45).z;