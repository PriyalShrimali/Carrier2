var helicopterIMG, helicopterSprite, packageSprite,packageIMG,redbox1,redbox2,redbox3;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	
	
	


	var optitions = {
	isStatic: true,
	
	}

	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	fill("red");
	redbox1 = Bodies.rectangle(400, 655, 100, 10, optitions);
	redbox2 = Bodies.rectangle(350, 610, 10, 100, optitions);
	redbox3 = Bodies.rectangle(450, 610, 10, 100, optitions);

	


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	World.add(world, redbox1);
	World.add(world, redbox2);
	World.add(world, redbox3);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});

	
    
	World.add(world, packageBody);
	
	

    packageSprite.x = packageBody.position.x;
	packageSprite.y = packageBody.position.y; 
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

    console.log(packageSprite.x);
	console.log(packageSprite.y);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

	
  

  rect(redbox1.position.x,redbox1.position.y,100,10);
  rect(redbox2.position.x,redbox2.position.y,10,100);
  rect(redbox3.position.x,redbox3.position.y,10,100);

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
	

  }


}



