class Chain {
constructor(bodyA,bodyB) {
    var option = {

        bodyA:bodyA,
        bodyB:bodyB,
        length:10,
        stiffness:0.05

    }
    this.chain = Constraint.create(option)
    World.add(world,this.chain)

}   
display(){
    strokeWeight(4)
line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)

    
}


}
