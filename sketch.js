var ball
var star
var rotator1,rotator2,rotator3,rotator4,rotator5,rotator6,rotator7,rotator8,rotator9;
var angle1 = 20;
var angle2 = 20;
var angle3 = 20;
var angle4 = 40;
var angle5 = 40;
var angle6 = 40;
var angle7 = 60;
var angle8 = 60;
var angle9 = 60;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,leftWall,rightWall,top_ground,leftBorder,rightBorder;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12

function preload(){

}

function setup() {
	createCanvas(windowWidth,windowHeight);

	engine = Engine.create();
	world = engine.world;

	ground = new Walls(650,925,2500,15);
	top_ground = new Walls(650,25,2500,15);
	leftBorder = new Walls(25,550,15,1050);
	rightBorder = new Walls(1900,550,15,1050);
	wall1 = new Walls(700,350,100,15);
	wall2 = new Walls(70,450,15,200);
	wall3 = new Walls(300,850,250,10);
	wall4 = new Walls(1500,650,350,10);
	wall5 = new Walls(500,893,10,50);
	wall6 = new Walls(1040,675,175,15);
	wall7 = new Walls(1550,300,200,15);
	wall8 = new Walls(175,550,100,15);
	wall9 = new Walls(650,600,10,150);
	wall10 = new Walls(1000,860,10,120);
	wall11= new Walls(950,615,15,120);
	wall12 = new Walls(1130,615,15,120);
	star = new Star(1850,50,30,30);

	var ball_options = {
		restitution: 0.01,
		density: 5
	  }
	  ball = Bodies.circle(200,900,20,ball_options)
	  World.add(world,ball)

	Engine.run(engine);

	textSize(35);

	var rotator_options={
		isStatic:true
	   };
   
	   rotator1 = Bodies.rectangle(250,200,150,20,rotator_options);
	   World.add(world,rotator1);
   
	   rotator2 = Bodies.rectangle(250,200,150,20,rotator_options);
	   World.add(world,rotator2);
   
	   rotator3 = Bodies.rectangle(250,200,150,20,rotator_options);
	   World.add(world,rotator3);

	   rotator4 = Bodies.rectangle(1000,400,150,20,rotator_options);
	   World.add(world,rotator4);
   
	   rotator5 = Bodies.rectangle(1000,400,150,20,rotator_options);
	   World.add(world,rotator5);
   
	   rotator6 = Bodies.rectangle(1000,400,150,20,rotator_options);
	   World.add(world,rotator6);

	   rotator7 = Bodies.rectangle(1550,150,150,20,rotator_options);
	   World.add(world,rotator7);
   
	   rotator8 = Bodies.rectangle(1550,150,150,20,rotator_options);
	   World.add(world,rotator8);
   
	   rotator9 = Bodies.rectangle(1550,150,150,20,rotator_options);
	   World.add(world,rotator9);
   
}


function draw() {
  rectMode(CENTER);
  background(51);
  ground.show()
  top_ground.show()
  leftBorder.show()
  rightBorder.show()
  star.show()
  wall1.show()
  wall2.show()
  wall3.show()
  wall4.show()
  wall5.show()
  wall6.show()
  wall7.show()
  wall8.show()
  wall9.show()
  wall10.show()
  wall11.show()
  wall12.show()
  
  push()
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  pop()

  text("Get to the star!!",60,60)

  Matter.Body.rotate(rotator1,angle1)
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
  angle1 +=0.2;

  Matter.Body.rotate(rotator2,angle2)
  push();
  translate(rotator2.position.x,rotator2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop();
  angle2 +=0.3;

  Matter.Body.rotate(rotator3,angle3)
  push();
  translate(rotator3.position.x,rotator3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 +=0.4;

  Matter.Body.rotate(rotator4,angle4)
  push();
  translate(rotator4.position.x,rotator4.position.y);
  rotate(angle4);
  rect(0,0,150,20);
  pop();
  angle4 +=0.2;

  Matter.Body.rotate(rotator5,angle5)
  push();
  translate(rotator5.position.x,rotator5.position.y);
  rotate(angle5);
  rect(0,0,150,20);
  pop();
  angle5 +=0.3;

  Matter.Body.rotate(rotator6,angle6)
  push();
  translate(rotator6.position.x,rotator6.position.y);
  rotate(angle6);
  rect(0,0,150,20);
  pop();
  angle6 +=0.4;

  Matter.Body.rotate(rotator7,angle7)
  push();
  translate(rotator7.position.x,rotator7.position.y);
  rotate(angle7);
  rect(0,0,150,20);
  pop();
  angle7 +=0.2;

  Matter.Body.rotate(rotator8,angle8)
  push();
  translate(rotator8.position.x,rotator8.position.y);
  rotate(angle8);
  rect(0,0,150,20);
  pop();
  angle8 +=0.3;

  Matter.Body.rotate(rotator9,angle9)
  push();
  translate(rotator9.position.x,rotator9.position.y);
  rotate(angle9);
  rect(0,0,150,20);
  pop();
  angle9 +=0.4;
}

function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:40,y:-40})
	}
}

var d = dist(ball.position.x,ball.position.y,star.position.x,star.position.y);

if(d == 20){
	World.remove(world,star);
}