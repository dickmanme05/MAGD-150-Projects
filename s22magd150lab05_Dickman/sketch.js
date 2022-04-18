var rectX, rectY;     
var circleX, circleY;  
var circleSize = 25;
var circleOver = false; 
var rectSize = 25; 
var rectOver = false;      
var rectColor, circleColor, baseColor;
var rectHighlight, circleHighlight;
var currentColor;

var x = 25;
var y = 100;
var xspeed = 3;


function setup() {
  createCanvas(400, 400);
  rectColor = color(236,59,73);
  rectHighlight = color(152,39,48);
  circleColor = color(107,40,241);
  circleHighlight = color(66,37,125);
  baseColor = color(102);
  currentColor = baseColor;
  circleX = 250;
  circleY = 385;
  rectX = 150;
  rectY = 370;
  ellipseMode(CENTER);
}

function draw() {
  let color_a=color(243,193,228);
  background(color_a);
  
  //tv base and antenna
  push();
  fill(0);
  rect(100,200,200,200);
  line(200,200,0,100);
  line(400,100,200,200);
  pop();
  
  
 //buttons   
  push();
  fill(currentColor);
  stroke(255);
  rect(125,225,150,150);
  pop();
  
  push();
  update(mouseX, mouseY);
  
  if (rectOver) {
    fill(rectHighlight);
  } else {
    fill(rectColor);
  }
  stroke(255);
  rect(rectX, rectY, rectSize, rectSize);
  
  if (circleOver) {
    fill(circleHighlight);
  } else {
    fill(circleColor);
  }
  stroke(255);
  ellipse(circleX, circleY, circleSize, circleSize);
  pop();
  
  
  //button text
  push();
  text("on",155,385);
  pop();
  
  push();
  text("off", 243,390);
  pop();
  
  
  
  //antenna bubble signal
  push();
  ellipse(x,y,10,10);
  x += xspeed;
  
  if(x-10 <= 0 || x+10>width)
    {
      xspeed *= -1;
    }
  pop();
  
}

function update( x,  y) {
  if ( overCircle(circleX, circleY, circleSize) ) {
    circleOver = true;
    rectOver = false;
  } else if ( overRect(rectX, rectY, rectSize, rectSize) ) {
    rectOver = true;
    circleOver = false;
  } else {
    circleOver = rectOver = false;
  }
}

function mousePressed() {
  if (circleOver) {
    currentColor = color(0);
  }
  if (rectOver) {
    currentColor = color(255);
  }
}

function overRect( x,  y,  width,  height)  {
  if (mouseX >= x && mouseX <= x+width && 
      mouseY >= y && mouseY <= y+height) {
    return true;
  } else {
    return false;
  }
}

function overCircle( x,  y,  diameter) {
  var disX = x - mouseX;
  var disY = y - mouseY;
  if (sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
    return true;
  } else {
    return false;
  }
}