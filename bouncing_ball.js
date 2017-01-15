var kreis;
var minGeschwindigkeit = 5;
var maxGeschwindigkeit = 15;
var anzahlKollisionen = 0;

function setup() {
    createCanvas(500, 500);
    background(0);
    colorMode(HSB)
    kreis = {
        x: 21,
        y: 21,
        istDurchmesser: 40,
        sollDurchmesser: 40,
        richtung: createVector(1, random(minGeschwindigkeit, maxGeschwindigkeit)),
        farbe: color(255, 100, 100),
        wachstumsrate: 1
    };
}

function draw() {

    fill(kreis.farbe);
    ellipse(kreis.x, kreis.y, kreis.istDurchmesser, kreis.istDurchmesser);
    kollisionsabfrage();
    if (kreis.istDurchmesser < kreis.sollDurchmesser) {
        //wachsen
        kreis.istDurchmesser += kreis.wachstumsrate;
    } else if (kreis.istDurchmesser > kreis.sollDurchmesser) {
        //schrumpfen
        kreis.istDurchmesser -= kreis.wachstumsrate;
    }
    kreis.x += kreis.richtung.x;
    kreis.y += kreis.richtung.y;
    if (anzahlKollisionen >= 50) {
        background(0);
        anzahlKollisionen = 0;
    }
}

function kollisionsabfrage() {
    //OBEN
    if (kreis.y - kreis.istDurchmesser / 2 <= 0) {
        kreis.richtung.y = random(minGeschwindigkeit, maxGeschwindigkeit);
        kollisionsAenderungen();
    }
    //RECHTS
    if (kreis.x + kreis.istDurchmesser / 2 >= width) {
        kreis.richtung.x = random(-minGeschwindigkeit, -maxGeschwindigkeit);
        kollisionsAenderungen();
    }
    //UNTEN
    if (kreis.y + kreis.istDurchmesser / 2 >= height) {
        kreis.richtung.y = random(-minGeschwindigkeit, -maxGeschwindigkeit);
        kollisionsAenderungen();
    }
    //LINKS
    if (kreis.x - kreis.istDurchmesser / 2 <= 0) {
        kreis.richtung.x = random(minGeschwindigkeit, maxGeschwindigkeit);
        kollisionsAenderungen();
    }
}

function kollisionsAenderungen() {
    anzahlKollisionen++;
    kreis.farbe = color(random(0, 255), 100, 100);
    kreis.sollDurchmesser = int(random(10, 90));
}