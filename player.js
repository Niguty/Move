class Player {

    constructor(horizontal, vertical) {
        this.horizontal = horizontal
        this.vertical = vertical
        this.size = 50
        this.keyboardMove - { left: false, right: false, up: false, down: false }
        this.element = this.createElement
        this.initEvents()
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

    draw(){
        this.element.style.left = `${this.horizontal}px`
        this.element.style.left = `${this.vertical}px`
    }

    initEvents(){
        document.body.addEventListener('keydown', (event) => {
            
            console.log(event.key)

        })
    }
}