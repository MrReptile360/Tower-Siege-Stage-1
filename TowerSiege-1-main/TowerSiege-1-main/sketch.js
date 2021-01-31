const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var polygon;

function preload() {
    polygonImage= loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,700,1000,20);
    box1=new Box(600,600,70,70);
    box2=new Box(680,600,70,70);
    box3=new Box(760,600,70,70);
    box4=new Box(840,600,70,70);
    box5=new Box(920,600,70,70);
    box6=new Box(680,680,70,70);
    box7=new Box(760,680,70,70);
    box8=new Box(840,680,70,70);
    box9=new Box(760,680,70,70);

    polygon= Bodies.circle(48,498,20);
    World.add(world,polygon);
    
    slingshot= new Slingshot(this.polygon,{x:100,y:200});
}
function draw(){
background("white");

Engine.update(engine);
text(mouseX+","+mouseY,mouseX,mouseY);

imageMode(CENTER);
image(polygonImage,polygon.position.x,polygon.position.y,40,40);


ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
slingshot.display();

}

function mouseDragged(){
    
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();

}