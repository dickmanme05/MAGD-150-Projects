function setup() {
  createCanvas(500,400);
}

function draw() {
  background(40);
  
  //buildings
  stroke(0);
  strokeWeight(5);
  rectMode(CORNER);
  fill(125);
  rect(50,250,150,150);
  rect(150,80,100,320);
  rect(250,200,100,200);
  rect(350,300,100,100);
  rectMode(RADIUS);
  fill(125);
  rect(0,400,50,350);
  rectMode(CORNER);
  rect(450,100,50,300);
  
  //stars
  stroke(200);
  strokeWeight(5);
  point(10,10);
  point(50,30);
  point(70,200);
  point(60,100);
  point(85,25);
  point(100,50);
  point(120,180);
  point(150,20);
  point(200,25);
  point(220,45);
  point(250,70);
  point(300,30);
  point(350,150);
  point(400,75);
  point(375,170);
  point(425,25);
  point(450,40);
  point(480,35);
  point(270,150);
  point(400,270);
  point(425,230);
  point(100,125);
  
  //moon
  ellipseMode(RADIUS);
  noStroke();
  fill(250);
  ellipse(370,70,50,50);
  
  //moon shadow
  ellipseMode(CENTER);
  fill(220);
  ellipse(375,70,90,90);
  
  //building antenna
  stroke(20);
  strokeWeight(5);
  line(180,40,180,75);
  line(165,40,165,75);
  line(175,40,185,40);
  line(160,40,170,40);
  line(175,50,185,50);
  line(160,50,170,50);
  line(175,60,185,60);
  line(160,60,170,60);
  line(175,70,185,70);
  line(160,70,170,70);

   
}