enum Pizzagröße {klein, mittel, groß, family};

let g: Pizzagröße = Pizzagröße.mittel;
// let g2: Pizzagröße = null;

enum Besteck { Gabel = 1, Messer = 2, Teelöffel = 4, Suppenlöffel = 7, Brotmesser=10};
let besteck1: Besteck = <Besteck>1;
let besteckAlsString: string = Besteck[4];

// Welche zwei Besteckteile liegen auf dem Tisch, wenn wir eine 3 haben

enum Längegröße {cm = 1.5, m = 2};

// werte mit dem gleichen Index sind auch möglich

// enum kann man dann noch an einer anderen Stelle erweitern. Schau mal in die Datei pizza.ts rein

