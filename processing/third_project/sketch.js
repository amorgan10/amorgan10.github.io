function setup() {
  createCanvas(500, 500)
}

let value = 0;
function draw() {
  fill(value);
  ellipse(200, 200, 300, 300);
}
function keyPressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}
  if (mouseIsPressed){
    c = color(random(0, 255), random(0, 255), random(0, 255));
    fill (c);
    rect(250, 250, 300, 300)
  }


