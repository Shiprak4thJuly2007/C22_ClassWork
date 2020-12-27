//namespacing or referencing
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine, world, ground, ball;

function setup() {
  createCanvas(400,400);
  engine= Engine.create();
  world= engine.world;

var options={
  isStatic:true
}
ground= Bodies.rectangle(200,380,400,10,options);
  World.add(world,ground);

  console.log(ground);
 
 var ball_options={

  restitution:0.9
 }
 
 
 
 
 
  ball= Bodies.circle(200,100,20,ball_options);
World.add(world,ball);

}

function draw() {
  background(255);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);  
 
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
  
 
 
 
 
 
 
  drawSprites();
}