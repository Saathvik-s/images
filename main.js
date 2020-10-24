let three
function setup(){
  createCanvas(400,400)
}

function draw(){
  background(0)
  fill(200,0,200)
  if(mouseIsPressed){
    ellipse(mouseX,mouseY,200,200)  
  }
  else {
    rect(mouseX,mouseY,100,100)
  }
}
