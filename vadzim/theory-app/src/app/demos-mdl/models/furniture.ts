export interface Möbelstück {
    breite: number;
    höhe: number;
    tiefe: number;
}

export class Sofa implements Möbelstück {   
    constructor(
        public breite: number, 
        public höhe: number, 
        public tiefe: number, 
        public farbe: string) {
    }
}

export interface Tisch extends Möbelstück {
    anzahlBeine: number;
}

export interface EckSofa extends Sofa {
    anzahlSchlafplätze: number;
}

export class U_FormSofa extends Sofa implements EckSofa {
    constructor(public breite: number, 
        public höhe: number, 
        public tiefe: number, 
        public farbe: string, 
        public anzahlSchlafplätze: number, 
        public innereRaum: number) {
        super(breite, höhe, tiefe, farbe);
    }
}