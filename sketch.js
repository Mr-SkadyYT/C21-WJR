var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(100, 200, 50, 50);
  fixedRect.shapeColor = "yellow";
  movingRect = createSprite(700,200,70,70);
  movingRect.shapeColor = "yellow";
  fixedRect.velocityX = 2;
  movingRect.velocityX = -2;
}

function draw() {
  background(55,255,55);  

 
bounceOff(movingRect, fixedRect);
   
  drawSprites();
 }

 