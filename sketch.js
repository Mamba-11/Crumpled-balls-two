
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;

var dustbin;


function preload()
{
	
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	

		

	//Create the Bodies Here.
	 paper = new Paper(50,600,70);
	 dustbin = new Dustbin(690,590,150,170);
	 ground = new Ground(400,680,800,10);
	 
	 


	
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  
  paper.display();
  ground.display();
  dustbin.display();
  
  drawSprites();
 
}

function keyPressed(){


	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:910,y:-910});

	}
}

 



