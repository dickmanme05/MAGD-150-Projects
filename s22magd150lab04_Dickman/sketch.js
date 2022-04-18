
x = 0;
let value = 0;
var pressed = 0;
var pressedState = 0;
function setup() {
  createCanvas(500, 500);
}

function draw() 
{
  //change background color
  if(keyIsPressed==true)
    {
      background(255);
    }
  else
    {
      background(200);
    }
  
  
  //pizza base
  push();
  //change pizza base color
  if(mouseIsPressed == true)
  {
    let color_y=color(220,168,110);
    fill(color_y);
    ellipse(250,250,300,300);
  }
  else
    {
      let color_a=color(235,212,114);
      fill(color_a);
      ellipse(250,250,300,300);
    } 
  pop();
  
  
  //crust
  push();
  for(let y=1; y<2; y++)
    {
      noFill();
      ellipse(250,250,(y*250),(y*250))
    }
  pop();
  
  //moving pizza sauce
  push();
  let color_c=color(223,67,67);
  fill(color_c);
  ellipse(x, height/2, 250,250);
  if(x<=250)
    {
      x++;
    }
  else
    {
      x=250;
      noLoop();
    }
  pop();
  
}


//remove pizza slice
function keyPressed()
{
  triangle(250,100,300,107,270,230);
  fill(value);
  if(value == 0)
    {
      value = 255;
    }
  else
    {
      value = 0;
    }
}


//add toppings
function mousePressed()
{
  push();
  pressed=pressed+1;
  pressedState = (pressed % 2);
  if( pressedState == 1)
    {
      
      let color_c=color(143,7,7);
  fill(color_c);
  noStroke();
  ellipse(mouseX, mouseY, 20,20);
    }
  else
    {
      let color_z=color(31,92,44);
      fill(color_z);
      noStroke();
      ellipse(mouseX, mouseY, 20,20);
    }
  pop();
}



