
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var boundry1,boundry2,boundry3;

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
	var canvas = createCanvas(800, 700);
	//rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


     	var option = {
        'restitution':0.8,
		'friction':0.3,
		'density':1.0
   }

	  packageBody = Bodies.circle(width/2 , 200 , 5 ,option);
	 World.add(world, packageBody);

	//  var option1 = {
	// 	isStatic: true
	// }

	//Create a Ground
	// ground = Bodies.rectangle(width/2, 650, width, 10 , option1,{
	// 	restitution:3,isStatic:true
	//  } );	 
	//   var option2 = {
	//  	isStatic: true
	// }
	//  ground1 = Bodies.rectangle(ground.position.x,ground.position.y,200,20 ,option2,{
	// 	restitution:3,isStatic:true
	//  } );	 
	//  ground2 = Bodies.rectangle(500,615,20,100,{
	// 	restitution:3,isStatic:true
	//  } );

    box1 = new Box(400,640,200,20);
    box2 = new Box(300,600,20,100);
    box3 = new Box(500,600,20,100);
 	//World.add(world, ground);
	Engine.run(engine);
}
function draw() {
  background(0);
  box1.display();
  box2.display();
  box3.display();
  packageSprite.x= packageBody.position.x 
   packageSprite.y= packageBody.position.y 
 drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

  }
}



