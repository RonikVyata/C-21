
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var engine, world
var groundObj
var leftSide
var rightSide

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Matter.Bodies.circle(100,100,30,ball_options);
	World.add(world,ball);

	Engine.run(engine);
  
	groundObj = new Ground (width/2, height-20,width,20);
	leftSide = new Ground (1100,height-80,20,120)
	rightSide = new Ground (1300,height-80,20,120)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 30, 30);

  groundObj.display();
  leftSide.display();
  rightSide.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:250,y:-160})
	}
}


