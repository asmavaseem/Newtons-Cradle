class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.offsetX,y:this.offsetY}
       
        }
        this.Rope = Constraint.create(options);
        World.add(world, this.Rope);
        }
        display(){
            var pointA= this.Rope.bodyA.position;
            var pointB= this.Rope.bodyB.position;
  
            stroke(255);
            strokeWeight (1)
            
            var anchor1X = pointA.x
            var anchor1Y = pointA.y
            
            var anchor2X = pointB.x+this.offsetX
            var anchor2Y = pointB.y+this.offsetY
            
            line (anchor1X, anchor1Y, anchor2X, anchor2Y);
            
        }
        
  }
  
