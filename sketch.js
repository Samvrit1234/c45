var trackimg;
var infiniteroad, infiniteroad2;
var car;
var stone;
var invisibleline, invisibleline2;
var count = 0;
function preload(){

  trackimg = loadImage("images/track.png");
  carimg = loadImage("images/car.png");
  stoneimg = loadImage("images/stone.jpg");

}

function setup() {
  createCanvas(displayWidth,displayHeight);

  infiniteroad = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  infiniteroad.scale = 2;
  infiniteroad.y = infiniteroad.height/2;
  infiniteroad.addImage("track",trackimg);

  infiniteroad2 = createSprite(displayWidth/2 + 3000,displayHeight/2 + 5000,displayWidth,displayHeight);
  infiniteroad2.scale = 2;
  infiniteroad2.y = infiniteroad.height/2;
  infiniteroad2.addImage("track",trackimg);

 

car = createSprite(displayWidth - 780,displayHeight - 100,20,20);
car.addImage("car",carimg);

invisibleline = createSprite(displayWidth -180,displayHeight - 430,10,displayHeight);
invisibleline.shapeColor = "red";
invisibleline.visible = false;

invisibleline2 = createSprite(displayWidth - 1340,displayHeight - 430,10,displayHeight);
invisibleline2.shapeColor = "red";
invisibleline2.visible = false;



  
}

function draw() {
  background("white");  
  if (infiniteroad.y < 0) {
    infiniteroad.y = infiniteroad.height/2;
  } 
  /*if(infiniteroad2.y < 0){
    infiniteroad2.y = infiniteroad2.height/2;
  }*/
  infiniteroad.velocityY = 3;
  infiniteroad2.velocityY = 3;
  count = Math.round(getFrameRate()/60);
  //image(trackimg, 0,-displayHeight*4,displayWidth, displayHeight*5);
  /*if(keyDown(UP_ARROW)){
    car.velocityY = -8;
    car.velocityX = 0;
  }*/
  if(keyDown(RIGHT_ARROW)){
    car.velocityY = 0;
    car.velocityX = 8;
  }
  if(keyDown(LEFT_ARROW)){
    car.velocityY = 0;
    car.velocityX = -8;
  }
  car.collide(invisibleline);
  car.collide(invisibleline2);
  spawnStones();
  camera.position.x = displayWidth/2;
  camera.position.y = car.y;
  drawSprites();
  fill("white");
  textSize(30);
  text("Score : " + count,displayWidth - 250,50);
}

function spawnStones(){
  if(frameCount % 200 === 0){
 stone = createSprite(Math.round(random(displayWidth - 180,displayWidth - 1340)),Math.round(random(displayHeight - 430,displayHeight - 100)));
    stone.addImage("stone",stoneimg);
    stone.scale = 0.15;
  }
}
