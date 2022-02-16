function setup() {
  createCanvas(400, 400, WEBGL);
}

let snow;

function preload() {
  snow = loadModel("snowman.obj");
}

var angle = 0;
var mode = 1;

function draw() {
  background(0);
  
  fill(angle,angle,angle,0);
  stroke(0,255,0);
  strokeWeight(5);
  
  angle+=0.01;
  
  
  rotateX(angle/2);
  rotateY(angle*2);
  sphere(1000);
  
  switch (mode) {
    case 0: normalMaterial(); break;
    case 1: strokeWeight(1); break;
    case 2: fill(0,255,0); stroke(0); strokeWeight(1); break;
  }
  scale(75);
  translate(0,-1);
  model(snow);
}

function keyPressed() {
  if (keyCode == ENTER) {
    mode++;
    if (mode==3) mode=0;
  }
}
