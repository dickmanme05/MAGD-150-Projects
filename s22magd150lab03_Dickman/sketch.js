let a;
let b;
let c;
let d;
let e;
let f;
let g;


function setup() {
  createCanvas(500, 500);
  a=500;
  b=450.2222;
  c=width+10.5555;
  d=height+45.5555;
  e=470.2222;
  f=500;
  g=475; 
  
  //print
  print("The center point of the canvas is " + width/2 + " pixels by " + height/2 + " pixels.");
  
  print("The maximum width of one of these bubbles is " + max(50,75,40,80,50,35,60,70) + " pixels.");
  
  print("The minimum width of one of these bubbles is " + min(50,75,40,80,50,35,60,70) + " pixels.");
  
  print("There are a total of " + 4*2 + " bubbles displayed on the screen, including the bubble that follows your cursor.");
  
  print("The distance between the first and last bubble is " + dist(50,500,420,475) + " pixels.");
}

function draw() {
  let color_a = color(87,56,110);
  background(color_a);
  
  //bubbles
  push();
  let color_b=color(252,187,238);
  fill(color_b);
  noStroke();
  ellipse(width-450,a,50,50);
  a--;
  pop();
  
  push();
  let color_c=color(187,228,252);
  fill(color_c);
  noStroke();
  ellipse(100,b,75,75);
  b--;
  pop();
  
  push();
  let color_d=color(148,247,141);
  fill(color_d);
  noStroke();
  ellipse(150,c,40,40);
  c--;
  pop();
  
  push();
  let color_e=color(248,222,149);
  fill(color_e);
  noStroke();
  ellipse(230,d,80,80);
  d--;
  pop();
  
  push();
  let color_f=color(238,179,252);
  fill(color_f);
  noStroke();
  ellipse(300,e,50,50);
  e--;
  pop();
  
  push();
  let color_g=color(247,247,161);
  fill(color_g);
  noStroke();
  ellipse(350,f,35,35);
  f--;
  pop();
  
  push();
  let color_h=color(201,247,210);
  fill(color_h);
  noStroke();
  ellipse(height-80,g,60,60);
  g--;
  pop();
  
  //mouse bubble
  push();
  fill(255);
  ellipse(mouseX,mouseY,70,70);
  pop();
  
 
}