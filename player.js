class Player {

    constructor(x, y, size) {
        this.x = x
        this.y = y
        this.size = size
        this.step = 1
        this.keyboardMove - { left: false, right: false, up: false, down: false }
        this.element = this.createElement();
        this.initEvents()
    }

    createElement(){
        const player = document.createElement('div')
        player.classList.add('player')
        player.style.width = `${this.size}px`
        player.style.height = `${this.size}px`
        return player
    }

    update(){
        this.move()
        this.colisionWall()
        this.draw()
    }

    move(){
        if(this.keyboardMove.left) this.x -= this.step
        if(this.keyboardMove.right) this.x += this.step
        if(this.keyboardMove.up) this.y -= this.step
        if(this.keyboardMove.down) this.y += this.step
    }

    colisionWall(){}

    draw(){
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
    }

    initEvents(){
        const p = this;
        document.body.addEventListener('keydown', (event) => {
            
            const key = event.key.toLowerCase()

            if(key == 'a') {p.keyboardMove.left = true}
            if(key == 'd') {p.keyboardMove.right = true}
            if(key == 'w') {p.keyboardMove.up = true}
            if(key == 's') {p.keyboardMove.down = true}

        })
    }
}