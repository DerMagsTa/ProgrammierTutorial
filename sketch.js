var mausGedrückt = false;
var kreis {
  x: mouseX,
  y: mouseY,
  durchmesser: 100,
  farbe: RGB(0,255,0)
};

function setup() {
  createCanvas(600, 400);
  background(250, 250, 100);
}

function draw() {

  if (mausGedrückt === true) {
    //Kreis
    fill(kreis.farbe);
    noStroke();
    ellipse(kreis.x, kreis.y, kreis.durchmesser, kreis.durchmesser);
  }
  //Viereck
  fill(200, 250, 200);
  rect(400, 100, 50, 50);
}

function mousePressed() {
  if (mausGedrückt) {
    mausGedrückt = false;
  } else {
    mausGedrückt = true;
  }
}