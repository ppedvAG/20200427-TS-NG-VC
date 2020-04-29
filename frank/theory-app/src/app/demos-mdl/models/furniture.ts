

export interface Möbelstück {
  breite: number;
  höhe: number;
  tiefe: number;
}

export interface Tisch extends Möbelstück {
  anzahlBeine: number;

}

export class Sofa implements Möbelstück {
  constructor(
    public breite: number,
    public höhe: number,
    public tiefe: number,
    public farbe: string) {
  }
}

export interface EckSofa extends Sofa {
  anzSchlafPlätze: number;
}

export class UEckSofa extends Sofa implements EckSofa {
  constructor(
    public breite: number,
    public höhe: number,
    public tiefe: number,
    public farbe: string,
    public anzSchlafPlätze: number,
    public anzEcken: number) {
      super(breite, höhe, tiefe, farbe) ;
  }
}
