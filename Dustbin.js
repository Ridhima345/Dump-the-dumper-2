class Dustbin{
    constructor(x, y, width, height) {
        var options = {
        isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

        this.image=loadImage("dustbingreen.png");
      }
      display(){
        push();
        fill("white");
        rect(this.body.position.x,this.body.position.y, this.width, this.height);
        image(this.image,568,450, 200,200);
        pop();
      }
}