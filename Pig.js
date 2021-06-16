class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility=255;
  }

  display(){

    if(this.body.speed<3){
      super.display();
    } else{
      World.remove(world,this.body);
      this.visibility -=3;
      push();
      tint(255,30,50,this.visibility);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }
    //console.log(this.body.speed);
  }

};