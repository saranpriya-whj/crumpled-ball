
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball;
var ground;
var bar1,bar2,bar3;
function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,670,width,20);

	paperball = new paper(20,50,20);
	
	bar1 = new bar(400,648,200,20);
	bar2 = new bar(500,648,20,100);
	bar3 = new bar(300,648,20,100);


	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bar1.display();
  bar2.display();
  bar3.display();

  ground.display();
  paperball.display();
  

 // drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:paperball.body.position.x,y:-85});
	}
}



