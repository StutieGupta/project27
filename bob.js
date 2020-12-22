class bob {
    constructor(x, r){
    var options={
        'density': 1,
        'friction': 1,
        'restitution': 0.8 
    };

    this.x = x
    this.r = r
    this.body = Bodies.circle(this.x, 500, this.r, options)
   
    World.add(world,this.body)
    };
    display()
    {
     var pos = this.body.position

      push()
      translate(pos.x)
      rectMode(CENTER)
      fill("pink")
      ellipse(x, 500,this.r,this.r)
      pop()
    };
};