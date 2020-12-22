class roof {
    constructor(x, y){
        this.x = x
        this.y = y
        this.body = Bodies.rectangle(x, y, 100,40)
        World.add(world, this.body)

    }

    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
    }
}