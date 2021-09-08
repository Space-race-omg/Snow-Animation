const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var snowBG;
var snowFlakes = []

function preload()
{
  snowBG = loadImage("snow2.jpg")
}

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(1000,600);

  if(frameCount % 50 === 0)
  {
    for(var i = 0; i<200; i++)
    {
        snowFlakes.push(new SnowFlakes(random(0,800), random(0,800)))
    }

  }

}

function draw() {
  background(snowBG);  
Engine.update(engine)

  for(var i = 0; i<200; i++)
  {
      snowFlakes[i].display();
      snowFlakes[i].updateY();
  }

}