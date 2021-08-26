var pathImg, Runner1, Runner2, coin, bomb, energyDrink;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  RunnerImg = loadAnimation( "Runner-1.png","Runner-2.png");
  coin = loadImage("coin.png");
  bomb = loadImage("bomb.png");
  energyDrink = loadImage("energyDrink.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  Runner = createSprite(100,300);
  path.addImage(pathImg);
  Runner.addAnimation("Runner", RunnerImg)
  Runner.scale = 0.1
  LeftWall = createSprite(0,0,100,800)
  RightWall = createSprite(400,0,100,800)

 
 
  }

 

function draw() {
  background(0);
  Runner.x = World.mouseX
  path.velocityY = 10
  if(path.y > 400){
    path.y = height/2

   
  }
  Runner.collide(LeftWall);
  Runner.collide(RightWall);
 
  RightWall.visible = false
  LeftWall.visible = false
  
  drawSprites()
}
 

