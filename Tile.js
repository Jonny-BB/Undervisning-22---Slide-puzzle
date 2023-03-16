class Tile {
  constructor(x,y,sprite,width,height){
 this.x=x
 this.y=y
 this.sprite=sprite
 this.width=width
 this.height=height
  }
  display(){
      stroke(255)
      strokeWeight(3)
      noFill()
      image(this.sprite,this.x,this.y)
  }
}