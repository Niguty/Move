class Player {

    constructor(horizontal, vertical) {
        this.horizontal = horizontal
        this.vertical = vertical
        this.size = 50
        this.element = this.createElement
    }

    createElement(){
        const player = document.createElement('div')
        player.classList.add('player')
        return player
    }

    update(){
        this.move()
        this.draw()
    }

    move(){}

    colisionWall(){}

    draw(){}
}