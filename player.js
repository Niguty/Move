class Player {

    constructor(horizontal, vertical) {
        this.horizontal = horizontal
        this.vertical = vertical
        this.size = 50
    }

    update(){
        this.move()
        this.draw()
    }

    move(){}

    colisionWall(){}

    draw(){}
}