var backgroundImg, balloonImg;
var balloon, balloonpos;
var database;

function preload(){
  backgroundImg = loadImage("backgroundImg.png");
  balloonImg = loadImage("balloon1.png");
}


function setup() {
  database = firebase.database();
  createCanvas(500,500);
 
  balloon = createSprite(300,100,20,20);
  balloon.addImage(balloonImg);
  balloon.scale = 0.20;

 //   balloonpos = database.ref('balloon/position');
  //  balloonpos.on("value",readpos,showError);

  
}

function draw() {
  background(backgroundImg);

  
  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x-10;
  }
  if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x + 10;
  }
  if(keyDown(UP_ARROW)){
    
    balloon.y = balloon.y-10;
  }
  if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y+10;
  }


  textSize(15);
  strokeWeight(2);
  fill("black");
  text("USE ARROW KEYS TO MOVE THE HOT-AIR BALLOON",50,20);
  drawSprites();
}
function readpos(data){
  position = data.val();
  
  balloon.x = position.x;
  balloon.y = position.y;

}

function updateHeight(x,y){
  database.ref('balloon/height').set({
    'x': height.x + x,
    'y': height.y + y

  })
}

function readHeight(data){
  height = data.val();
  balloon.x = height.x;
  balloon.y = height.y;

}

function showError(){
  console.log("Error in writing to database");
}