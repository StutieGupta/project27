
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	var bob1 = new bob(100, 50)
	var bob2 = new bob(200, 50)
	var bob3 = new bob(300, 50)
	var bob4 = new bob(400, 50)
	var bob5 = new bob(500, 50)

	var Roof = new roof(300, 300)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  Roof.display()

  drawSprites();
 
}



