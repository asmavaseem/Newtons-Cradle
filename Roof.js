class Roof {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      // fill(100, 45, 24);
      fill(96, 147, 227)
      rect(pos.x, pos.y, this.width, this.height);
    }
  };

  