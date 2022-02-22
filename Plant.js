class Plant{
    constructor(x,y,width,height){
     var options={
         restitution:0.5,
         density:0.1
     }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.image = loadImage("sprites/planta.png");
    this.width = width;
    this.height = height;
    World.add(world,this.body)
    }
    display(){
        var pos =this.body.position;
        push();
        imageMode(CENTER);
        fill("brown");
        image(this.image,pos.x, pos.y, this.width, this.height);
        pop();
      }

      remove(){
          World.remove(world,this.body);
      }
}