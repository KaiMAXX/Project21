
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,engine,world ;
var groundObj;

var ball_options ={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2
}


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  groundObj = new ground (width/2,670,width,20);
  leftSide = new ground (400,600,20,120);
  rightside= new ground (600,600,20,120);
  ball=Bodies.circle(100,100,20,ball_options);
  World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20);


  

  
  groundObj.display();
  leftSide.display();
  rightside.display();
  if (keyDown("UP_ARROW")){
    vhForce();
  
    }

  Engine.update(engine);
 
}


function vhForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.99,y:-0.99});

}



