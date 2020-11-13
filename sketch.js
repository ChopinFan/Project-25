const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, dustbin, ground;


function setup() {
	createCanvas(1600,700);
  engine = Engine.create();
  world = engine.world;
    

	engine = Engine.create();
	world = engine.world;
  ground = new Ground(800,670,1600,20);
  dustbin = new Dustbin(1200,650);
	paper = new Paper(200,450,70);


	Engine.run(engine);
  
}


function draw() {
  
  rectMode(CENTER);
  background(255);
  
  paper.display();
  dustbin.display();
  ground.display();

  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper.body,paper.body.position,{x:140,y:-140});
  
  }
}



