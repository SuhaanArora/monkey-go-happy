var score = 0 
var PLAY = 1;
var END =0;
var gameState = PLAY;
var ground;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
 obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,300); 
 
  ground = createSprite (300,270,700,10)
  
  monkey = createSprite (100,240,40,40)
  monkey.addAnimation("monkey",monkey_running)
  monkey.scale=0.1
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  
}


function draw() {
  background(1180);
  
 text ("score:"+score,550,50)
  
  if (gameState===PLAY){
    
    
     
  if (frameCount % 70 === 0){
      fruitsss();
      
 }
  if (frameCount % 110 === 0){
      obstaclesss();
      
 }
  
  if (keyDown("space")&&monkey.y >=220 ){
   
    monkey.velocityY = -13
      
 }  
   if (FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach(); 
     score= score+5
   }
    
    if (obstacleGroup.isTouching(monkey)){
       gameState=END
    }
      monkey.velocityY = monkey.velocityY + 0.8
  
   monkey.collide(ground)
    
}else if (gameState===END){
    textSize (30)
  
  text("gameover",250,150);
  textSize(15)
  text("press r to restart",250,180)
  

  
 obstacleGroup.setVelocityEach(0);
   FoodGroup.setVelocityEach(0);
   obstacleGroup.destroyEach();
   FoodGroup.destroyEach();

  
  if (keyDown ("r")){
   
     monkey = createSprite (100,240,40,40)
  monkey.addAnimation("monkey",monkey_running)
  monkey.scale=0.1
   
  gameState=PLAY 
   
   score=0

 }
}
  
   

  drawSprites();
  
}
 
function fruitsss (){
  
   
  banana = createSprite (700,random (110,200),20,20)
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-10
  banana.lifetime = 170 
  
  FoodGroup.add(banana);
  
}
function obstaclesss (){
  
  obstacle = createSprite (700,230,20,20)
  obstacle.addImage(obstacleImage)
  obstacle.scale=0.2
  obstacle.velocityX=-5
  obstacle.lifetime = 190  
  
  obstacleGroup.add(obstacle);
}  


 
  
  




