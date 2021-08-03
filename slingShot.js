class SlingShot {

    constructor(body1,body2){
var options = {
    bodyA : body1,
    bodyB : body2,
    length : 50,
    stiffness : 0.3
}
this.connection = Matter.Constraint.create(options)
World.add(world,this.connection) 

}

display(){
strokeWeight (3)
line(this.connection.bodyA.position.x,this.connection.bodyA.position.y,this.connection.bodyB.position.x,this.connection.bodyB.position.y)
}
}