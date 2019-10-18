function setup() {
  CanvasGradient(800, 600);
  }
  function draw() {
  if(mousepressed) {
    fill (0); 
  }
  else {
    fill (255)
  } 
  
ellipse(mouseX, mouseY, 80, 80)
}