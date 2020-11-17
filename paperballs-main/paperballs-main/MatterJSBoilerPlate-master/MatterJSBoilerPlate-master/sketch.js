const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine, world;

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	Bob1 = new Bob(100,220,40);
	Bob2 = new Bob(179,220,40);
	Bob3 = new Bob(258,220,40);
	Bob4 = new Bob(337,220,40);
	Bob5 = new Bob(916,220,40);
	Roof1 = new Roof(100,100,80,30)
	Roof2 = new Roof(179,100,80,30)
	Roof3 = new Roof(258,100,80,30)
	Roof4 = new Roof(337,100,80,30)
	Roof5 = new Roof(416,100,80,30)
	Thread1 = new Chain(Bob1.body,Roof1.body)
	Thread2 = new Chain(Bob2.body,Roof2.body)
	Thread3 = new Chain(Bob3.body,Roof3.body)
	Thread4 = new Chain(Bob4.body,Roof4.body)
	Thread5 = new Chain(Bob5.body,Roof5.body)
		Engine.run(engine);
  
}

function draw() {
  background(255);
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();

  Roof1.display();
  Roof2.display();
  Roof3.display();
  Roof4.display();
  Roof5.display();
  Thread1.display();
  Thread2.display();
  Thread3.display();
  Thread4.display();
  Thread5.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:140,y:-400})
	}
}