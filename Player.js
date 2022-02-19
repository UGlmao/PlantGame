class Player{
    constructor(x,y,height,width,angle){
        var options ={
            restitution: 0.1,
            friction: 0.5
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.humano1 = loadImage("sprites/humano.png");
        this.humano2 = loadImage("sprites/humano2.png");
        this.humano3 = loadImage("sprites/humano3.png");
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.humano3, 0, 0, this.width, this.height);
    
          
        
        
        pop();
    }

}