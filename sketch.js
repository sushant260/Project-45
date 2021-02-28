var rps,rpsi,invisibleGround

function setup() {
  createCanvas(800,400);
  rpsi=loadAnimation("image/rps1.png","image/rps2.png","image/rps3.png","image/rps4.png");
  rps=createSprite(50, 350, 50, 50);
  rps.addAnimation("ru",rpsi);
  
  invisibleGround = createSprite(width/2,height-10,width,125);
  invisibleGround.visible = false;
  
  rps.scale=0.2;
 
}

function draw() {
  background("skyblue"); 
  
  if(keyDown("space") && rps.y >= height-330) {
    rps.y -=10.1;
  }
  
  
  drawSprites();
}
