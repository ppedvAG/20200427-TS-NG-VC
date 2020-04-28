

enum Pizzagröße {klein, mittel, groß, family };

let g : Pizzagröße = Pizzagröße.mittel;
// let g2:Pizzagröße = undefined;
// let g2:Pizzagröße = null;

enum Besteck { Gabel = 1, Messer = 2, Teelöffel = 4, Suppenlöffel = 7, Brotmesser = 10 };

let besteck1 : Besteck = <Besteck>1;
let besteckAsString: string = Besteck[4];
// welche Besteckteile liegen auf dem Tisch, wenn wir eine 3 haben??

enum Längen {cm = 1.5, m=3}


