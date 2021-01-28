var bullet,wall;
var speed,weight;
var thickness,damage;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83)
  speed=random(223,321);
  weight=random(30,52);

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="orange"

  bullet=createSprite(100,200,10,20);
  bullet.velocityX=speed;
  bullet.shapeColor="white"
}

function draw() {
  background(0);
  if (hasCollided (bullet,wall)) {
    bullet.velocityX=0;
    damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if (damage>10) {
      wall.shapeColor=color(255,0,0);
    }
    if (damage>10) {
      wall,shapeColor=color(0,255,0);
    }
  }
  hasCollided();
  drawSprites();
}

function hasCollided(bullet,wall){
  if (bulletRightEdge=bullet.x+bullet.width){
    wallLeftEdge>=wall.x
    if (bulletRightEdge>=wallLeftEdge) {
      return true    
  }
    return false;
  }
}


