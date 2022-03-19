class Star{
    constructor(x,y,w,h){
        var star_options = {
            isStatic: true 
        }
        this.body = Bodies.rectangle(x,y,w,h,star_options);
        World.add(world,this.body);
        this.w = w;
        this.h = h;
    }

    show(){
        var pos = this.body.position;

        push();
        rectMode(CENTER);
        stroke(255);
        fill("yellow");
        rect(pos.x,pos.y,this.w,this.h)
        pop();
    }
}