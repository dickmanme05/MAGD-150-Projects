function setup() {
  createCanvas(400, 400);
}

function draw() {
  colorMode(RGB);
  let a=color(4,10,41);
  background(a);
  
  
  //rocket top
  push();
  let b=color('#4588bf');
  fill(b);
  triangle(200,50,100,110,150,140);
  pop();
  
  //rocket sides
  push();
  colorMode(HSB);
  fill(0,101,100);
  noStroke();
  quad(100,110,150,140,140,220,20,140);
  pop();
  
  //fire
  push(0);
  colorMode(RGB);
  fill(255,128,0);
  beginShape();
  vertex(60,165);
  vertex(10,190);
  vertex(100,240);
  vertex(100,190);
  endShape(CLOSE);
  pop();
  
  //rocket body
  push();
  colorMode(RGB);
  fill(69,136,191);
  beginShape();
  vertex(100,110);
  vertex(60,165);
  vertex(100,190);
  vertex(150,140);
  endShape(CLOSE);
  pop();
  
  //rocket window
  push();
  fill(234,255,8);
  ellipse(102,150,40,40);
  pop();
  
 

  //planet
  push();
  fill('#da6cf0');
  ellipse(280,290,160,160);
  pop(); 
  
  //planet rings
  push();
  colorMode(RGB);
  fill(107,255,48);
  ellipse(280,300,225,50)
  pop();
  
  //cover planet rings
  push();
  fill('#da6cf0');
  noStroke();
  ellipse(280,278,158,50);
  pop();
  
  //stars
  push();
  strokeWeight(5);
  stroke(255);
  point(10,10);
  point(40,45);
  point(50,25);
  point(65,60);
  point(100,15);
  point(120,40);
  point(200,30);
  point(250,100);
  point(280,150);
  point(300,50);
  point(350,120);
  point(50,300);
  point(100,350);
  point(25,250);
  point(100,280);
  point(175,175);
  point(200,200);
  point(20,90);
  point(350,25);
  point(380,380);
  point(360,360);
  point(40,370);
  pop();
  
}
