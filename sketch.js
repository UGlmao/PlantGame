const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;
var backgroundImg;
var ground,player;
var plant1,plant2;


function preload(){
  backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    plant1 = new Plant(100,370,40,40);
    plant2 = new Plant(200,370,40,40);
    ground = new Ground(600,380,1200,200);
    player = new Player(200,250, 300, 275,0);
  
  
}

function draw(){
  background(backgroundImg);

  ground.display();
  plant1.display();
  player.display();

 plantPlanted();
 keyPressed();
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    player.body.position.x = player.body.position.x+5;
  }

  if(keyCode === LEFT_ARROW){
    player.body.position.x = player.body.position.x-5;
  }
}

function plantPlanted(){
if(keyCode === DOWN_ARROW){
  plant2.display();
  
}
else {
 plant2.isStatic = true;
}
}

