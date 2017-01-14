var kreis = {
  x: 0,
  y: 0,
  durchmesser: 10,
  r: 0,
  g: 255,
  b: 0,
  h: 0,
  s: 0
};
var positionen = [];
var pos = 0;

function setup() {
  createCanvas(600, 400);
  background(0, 0, 0);
  colorMode(HSB);

  for (var row = 0; row <= height; row += 10) {
    for (var col = 0; col <= width; col += 10) {
      positionen.push(createVector(col, row));
    }
  }
}

function draw() {

  if (pos < positionen.length) {
    kreis.x = positionen[pos].x;
    kreis.y = positionen[pos].y;
    kreis.h = map(kreis.x, 0, width, 0, 255);
    kreis.s = map(kreis.y, 0, height, 0, 255);

    fill(kreis.h, kreis.s, 100);
    noStroke();
    ellipse(kreis.x, kreis.y, kreis.durchmesser, kreis.durchmesser);

  }
  pos = pos + 1;
}