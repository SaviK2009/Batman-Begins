

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

  var engine, world;
  var drops = [];
  var umbrella




function setup(){
    createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    for(var i = 0; i < drops.length; i++){
        drops.push(new Drops(random(0,500), random(0,500)));
     }
      umbrella = new Umbrella(200,500);
    ground = new Ground(400,800,800,20);
}

function draw(){
    background("black")

    Engine.update(engine);
    ground.display();

    
    for(var j = 0; j< drops.length; j++){
        drops[j].display();
        drops[j].update();
      }

      drawSprites();
}   

