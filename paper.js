class Paper{
    constructor(x, y,r) {
        var options = {
            'isStaticfalse':false,
            'restitution':0.3,
            'friction':0,
            'density':1.2
        }
        this.x=x;
		    this.y=y;
	    
        
        this.r=r;
        this.body = Bodies.circle(x, y,(this.r-20)/2, options );
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
       // var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
       // var paper=this.body.position;		
        //rotate(angle);
       imageMode(CENTER);
       image(this.image, 0, 0, this.r, this.r);
        pop();
      }
    
}