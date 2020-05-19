var car , wall ;
var speed,weight;
var damage=0;

function setup() {
  createCanvas(1400,400);
 car= createSprite(10, 200, 50, 50);
 wall=createSprite(1200,200,60,200);
  weight=random(400,1500);
  speed=random(55,90);
}

function draw() {

  background(100,155,255);  

  car.velocityX=random(5,9);

  damage=(0.5*weight*speed*speed)/22500 ;

  if (car.isTouching(wall)){
    car.bounceOff(wall);
    car.velocityX=0;
  }
   else if(damage<=100){
      car.shapeColor='green';
    }
     
   else if(damage>100 && damage<=180){
      car.shapeColor='yellow';
    }
    
   else if(damage>180){
      car.shapeColor='red';
    }
  

  drawSprites();
}