//intro

//interface ist quasi ein datentyp

interface todo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

let item1: todo;

// Kompatibilität von Interface Datentypen
item1 = { id: 1, userId: 1, title: "Fegen", completed: false };
let einObject = { title: "einkaufen" };

//item1 = einObject;   //<- Fehler, fehlen werte von todo
// aber

einObject = item1;  //<- funktioniert; Overlapping Types !!!

//regel: rechtes Object muss gleiche oder größere Form haben (Menge, Untermenge)


function zeigeTodo(t: todo) {
    document.getElementById("interP1")!.textContent = " " + t;
}

//zeigeTodo(einObject); //<- auch wieder fehlende Eigenschaften von todo

zeigeTodo(item1);

function zeigeTitle(t: {title: string}, p: number ) {
    document.getElementById(`interP${p}`)!.textContent = `Item index ${p} ` + t.title;
}

zeigeTitle(item1, 2);
einObject.title = "Auto putzen";
zeigeTitle(einObject, 3); //<-  geht

// readOnly

interface CreditCard {
    owner: string;
    readonly cardNumber: number;
    readonly pin: number;
}

let myCard: CreditCard = {owner: "Franky", cardNumber: 123456789, pin: 1234};
// myCard.cardNumber = 987654321; // Fehler

const myCard1: CreditCard = {owner: "Franky", cardNumber: 123456789, pin: 1234};
myCard1.owner = "Max";
// myCard1 = myCard;    //=> Fehler weil const


// Interfaces erweiteren; extend
interface Möbelstück {
    breite: number;
    höhe: number;
    tiefe: number;
}

// interface zu interface externs/ erweiterung !!!
interface Tisch extends Möbelstück {
    anzahlBeine: number;

}


// klasse implementiert ein Interface !!!
class Sofa implements Möbelstück {
    
    /**
     * ctor
     */
    constructor(public breite: number,public höhe: number,public tiefe: number, public farbe: string) {
                
    }
}

interface EckSofa extends Sofa {
    anzSchlafPlätze: Number;
}

//oder
class UEckSofa extends Sofa implements EckSofa {
    
    constructor(public breite: number,public höhe: number,public tiefe: number, public farbe: string, public anzSchlafPlätze: Number, public anzEcken: Number ) {
        super(breite, höhe, tiefe, farbe) ;
                
    }
}

// optionale Parameter
interface Person {
    FirstName : string;
    LastName : string;
    Größe: Number;
    Haarfarbe?:string;
}

let me  : Person = {FirstName: "Frank", LastName: "Test", Größe: 1.85, Haarfarbe: "blond"};
let you : Person = {FirstName: "Hallo", LastName: "Du-da", Größe: 1.55};

function WhoIsBigger (t: Person, z: Person) :string {
    
    if (t.Größe > z.Größe) {
        return t.FirstName;
    } else {
        return z.FirstName;
    }
}

let what = WhoIsBigger(me, you);



