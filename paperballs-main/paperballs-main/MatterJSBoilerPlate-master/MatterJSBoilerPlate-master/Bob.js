class Bob{
  constructor(x,y,radius){
  var options = {
      friction:0,
      density:1,
      restitution:1
  }
  this.radius = radius;
  this.body = Bodies.circle(x,y,radius,options);
  World.add(world,this.body)
  }
  display(){
    push();
    ellipseMode(RADIUS);
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    fill("green")
    ellipse(0,0,this.radius,this.radius);
    pop();  
  }
  }