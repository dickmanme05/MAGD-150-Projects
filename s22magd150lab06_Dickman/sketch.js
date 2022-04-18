var x = 25;
var y = 350;
var xspeed = 1;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(25);
  dots();
  pacman();
  barriers();
  ghost();
}

//This function contains the yellow base ellipse and the background color triangle for the mouth to create the pacman that follows the mouse.

function pacman() {
  push();
  let color_pacman=color(231,235,21);
  fill(color_pacman);
  ellipse(mouseX,mouseY,50,50);
  pop();
  
  push();
  let color_mouth=color(25);
  fill(color_mouth);
  noStroke();
  triangle(mouseX,mouseY,mouseX+50,mouseY+50,mouseX+90,mouseY);
  pop();
}


//This function uses two ellipses to create the base ghost color and the cut-out bottom of the ghost, as well as two circles for the eye base and pupil color.

function ghost() {
  push();
  let color_ghost=color(236,54,60);
  fill(color_ghost);
  ellipse(x,y,35,45);
  x += xspeed;
  
  if(x-10 <= 0 || x+10>width)
    {
      xspeed *= -1;
    }
  pop();
  
   push();
  let color_ghostshadow=color(25);
  noStroke();
  fill(color_ghostshadow);
  ellipse(x-1,y+15,35,15);
  x += xspeed;
  
  if(x-10 <= 0 || x+10>width)
    {
      xspeed *= -1;
    }
  pop();
  
  push();
  let color_eyes=color(255);
  fill(color_eyes);
  circle(x,y-12,10);
  x += xspeed;
  
  if(x-10 <= 0 || x+10>width)
    {
      xspeed *= -1;
    }
  pop();
  
  push();
  let color_eye=color(54,39,177);
  fill(color_eye);
  noStroke();
  circle(x,y-12,5);
  x += xspeed;
  
  if(x-10 <= 0 || x+10>width)
    {
      xspeed *= -1;
    }
  pop();
  
}


//This function uses translate, scale, and rotate to create the rectangle walls.

function barriers() {
  push();
  translate(width/2,height/2);
  strokeWeight(4);
  fill(25);
  stroke(54,39,177);
  rect(75,30,50,80,55,20);
  pop(); 
  
  push();
  translate(width/2,height/2);
  rotate(PI / 1.0);
  strokeWeight(4);
  fill(25);
  stroke(54,39,177);
  rect(20,80,150,50,55,20);
  scale(0.8);
  rect(100,-55,65,40,55,20);
  pop();
}


//This function creates all of the dots on the screen that pacman eats.

function dots() {
  fill(255);
  circle(15,15,15);
  circle(65,15,15);
  circle(115,15,15);
  circle(165,15,15);
  circle(210,15,15);
  circle(260,15,15);
  circle(310,15,15);
  circle(360,15,15);
  
  circle(15,50,15);
  circle(65,50,15);
  circle(115,50,15);
  circle(165,50,15);
  circle(210,50,15);
  circle(260,50,15);
  circle(310,50,15);
  circle(360,50,15);
  
  circle(15,100,15);
  circle(210,100,15);
  circle(260,100,15);
  circle(310,100,15);
  circle(360,100,15);
  
  circle(15,155,15);
  circle(65,155,15);
  circle(115,155,15);
  circle(165,155,15);
  circle(210,155,15);
  circle(260,155,15);
  circle(310,155,15);
  circle(360,155,15);
  
  circle(15,200,15);
  circle(65,200,15);
  circle(115,200,15);
  circle(165,200,15);
  circle(210,200,15);
  circle(260,200,15);
  circle(310,200,15);
  circle(360,200,15);
  
  circle(15,255,15);
  circle(65,255,15);
  circle(115,255,15);
  circle(165,255,15);
  circle(210,255,15);
  circle(260,255,15);
  circle(360,255,15);
  
  circle(15,300,15);
  circle(65,300,15);
  circle(115,300,15);
  circle(165,300,15);
  circle(210,300,15);
  circle(260,300,15);
  circle(360,300,15);
}