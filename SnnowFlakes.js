class SnowFlakes
{
    constructor(x,y)
    {
        var options = {
            'restitution':0.1,
            'friction':0.001,
            'density':1.0
        }

        this.snow = Bodies.circle(x,y,5,options)
        this.radius = 5
        var img;
        var ran = Math.round(random(1,2))
        if(ran === 1)
        {
            img = "snow4.webp"
        }
        else
        {
            img = "snow5.webp"
        }
        this.image = loadImage(img)
        //this.Visibility = 255
        World.add(world, this.snow)
    }

    updateY()
    {
        if(this.snow.position.y > height)
        {
            Matter.Body.setPosition(this.snow, {x: random(0,800), y: random(0,800)})
        }
    }

    display(){
        //var angle = this.body.angle;
        //push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        fill("blue")
        imageMode(CENTER);
        image(this.image, this.snow.position.x, this.snow.position.y, 10, 10);
        //pop();
      }

}