const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;
var backgroundImg;
var ground,player;
var plant1,plant2;
var timer = 0;

function preload(){
  backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    plant1 = new Plant(100,370,40,40);
    ground = new Ground(600,380,1200,200);
    player = new Player(1000,250, 300, 275,0);
    plant2 = new Plant(player.body.position.x,370,40,40);
  
  
}

function draw(){
  background(backgroundImg);

  ground.display();
  plant1.display();
  player.display();

  timer += 1;
  if(timer%200 === 0){
    plant1.height = plant1.height + 50;           
    plant1.width = plant1.width + 10;    
    plant1.body.position.y = plant1.body.position.y - 15;                                                        
  }
  else if(timer === 2000){
    timer = timer;
  }

console.log(timer)
keyPressed();
 plantPlanted();
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
  var position = [plant2.body.position.x, plant2.body.position.y]
//  plant2.push(position);
 if(timer%1 === 0){
  plant2.height = plant2.height + 50;           
  plant2.width = plant2.width + 10;    
  plant2.body.position.y = plant2.body.position.y - 15;                                                        
}

} 
}



