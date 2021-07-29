var ship, ship_floating, edges
var sea

function preload(){
ship_floating = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
sea = loadImage("sea.png")

}

function setup(){
  createCanvas(400,400);
  
  ship = createSprite(150,162,20,50);
 // ship.addAnimation("floating", ship_floating)
  //sea = createSprite(300,180,600,20)
 // ship.scale = 0.5;
 // ship.x = 50  
}

function draw() {
  background("blue");
 //sea.velocityX = -2
 console.log(ship.y)
 /*if(ground.x<0){
   ship.velocityX = -10;
 }
 ship.velocityY = ship.velocityY + 0.5;*/
 drawSprites
}