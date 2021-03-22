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

	//Create the Bodies Here.
    side1= new Dustbin(width/1.2, 640, 130, 20 );
	side2= new Dustbin(width/2+200, 610, 20, 90 );
	side3= new Dustbin(width/2+340, 610, 20, 90);
	paperObject= new Paper(200,100,50);


	Engine.run(engine);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	fill("red");

}

function draw() {
  rectMode(CENTER);
  background("white");

  rect(ground.position.x,ground.position.y,width,10)  
  side1.display();
  side2.display();
  side3.display();
  paperObject.display();

  drawSprites();
 
}

function keyPressed() {
   if (keyCode === UP_ARROW) {

  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:300,y:-500});
	   
	 }
   }