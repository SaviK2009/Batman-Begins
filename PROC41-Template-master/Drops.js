class Drops{
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.radius = 5;
        World.add(world, this.body);

    }

    update(){
        if(this.body.position.y > height){
          Matter.Body.setPosition(this.body,{x:random(0, 500), y:random(0, 650)});
        }
      }

    display() {
        noStroke();
        fill(0,0,255);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius); 
    }

  
  };
  