const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;
var strike;
var Wring1,Wring2,Wring3,Wring4,Wring5,Wring6,Wring7,Wring8,Wring9;
var Bring1,Bring2,Bring3,Bring4,Bring5,Bring6,Bring7,Bring8,Bring9;
var Pring;
var hole1,hole2,hole3,hole4;
var s1,s2,s3,s4,s5,s6,s7,s8;
var slingshot;



function setup() {
  createCanvas(500,500);
  engine = Engine.create();
  world = engine.world;

  strike = new Striker(250,400,20);
  
  Pring = new PurpleRing(250,250,10);

  Wring1 = new WhiteRing(230,250,10);
  Wring2 = new WhiteRing(260,232,10);
  Wring3 = new WhiteRing(260,268,10);
  Wring4 = new WhiteRing(272,218,10);
  Wring5 = new WhiteRing(215,250,10);
  Wring6 = new WhiteRing(272,285,10);
  Wring7 = new WhiteRing(230,285,10);
  Wring8 = new WhiteRing(291,253,10);
  Wring9 = new WhiteRing(233,215,10);
  
  
  Bring1 = new BlackRing(270,250,10);
  Bring2 = new BlackRing(240,232,10);
  Bring3 = new BlackRing(240,268,10);
  Bring4 = new BlackRing(250,285,10);
  Bring5 = new BlackRing(220,268,10);
  Bring6 = new BlackRing(280,268,10);
  Bring7 = new BlackRing(282,234,10);
  Bring8 = new BlackRing(220,230,10);
  Bring9 = new BlackRing(253,215,10);

  hole1 = new Holes(450,40,30);
  hole2 = new Holes(40,460,30);
  hole3 = new Holes(40,40,30);
  hole4 = new Holes(450,460,30)

  s1 = new Stopper(385,400,10);
  s2 = new Stopper(400,385,10);
  s3 = new Stopper(400,118,10);
  s4 = new Stopper(384,105,10);
  s5 = new Stopper(116,400,10);
  s6 = new Stopper(105,385,10);
  s7 = new Stopper(120,105,10);
  s8 = new Stopper(105,118,10);

  slingshot = new Slingshot(strike.body,{x:300,y:300});

  
  
 
}


function draw() {  
background(255,255,255);
Engine.update(engine);

fill(255,215,0);
rectMode(CENTER);
rect(250,250,400,400);

fill(255,215,0);
rectMode(CENTER);
rect(250,250,300,300);

line(400,400,330,330);
line(400,105,330,175);
line(105,105,175,175);
line(105,400,175,330);

strike.display();

Pring.display();

Wring1.display();
Wring2.display();
Wring3.display();
Wring4.display();
Wring5.display();
Wring6.display();
Wring7.display();
Wring8.display();
Wring9.display();

Bring1.display();
Bring2.display();
Bring3.display();
Bring4.display();
Bring5.display();
Bring6.display();
Bring7.display();
Bring8.display();
Bring9.display();

hole1.display();
hole2.display();
hole3.display();
hole4.display();

s1.display();
s2.display();
s3.display();
s4.display();
s5.display();
s6.display();
s7.display();
s8.display();

slingshot.display();
}

function mouseDragged(){
 
      Matter.Body.applyForce(strike.body,strike.position,{x:100,y:100});
      console.log("moused");
  
}


function mouseReleased(){
  slingshot.fly();
  console.log("mouser");
  
}

