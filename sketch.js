var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  
  thickness=random(22,83);

  wall=createSprite(1500,200,thickness,200);
  wall.shapeColor=color(80,80,80);
 
  speed=random(223,321);
  weight=random(30,52);

  bullet=createSprite(50,200,30,10);
  bullet.shapeColor="white";
  bullet.velocityX=speed;
}

function draw() {
  background("black"); 
  
  if(wall.x-bullet.x<wall.width/2+bullet.width/2){
    var damage=0.5*speed*speed*weight/(thickness*thickness*thickness);

    if(damage<10){
      wall.shapeColor="green";
    }

    if(damage>10){
      wall.shapeColor="red";
    }
  }
  
  drawSprites();
}