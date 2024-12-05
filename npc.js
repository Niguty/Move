const cW = window.innerWidth;
const cH = window.innerHeight;

class Npc {
    constructor(initial){
        this.x = initial.x
        this.y = initial.y
        this.size = initial.size
        this.stepX = initial.stepX
        this.stepY = initial.stepY
        this.element = this.createElement();
    }

createElement(){
    const npc = document.createElement('div')
    npc.classList.add('npc')
    npc.style.width = `${this.size}px`
    npc.style.height = `${this.size}px`
    npc.style.position = 'absolute'
    document.body.appendChild(npc)
    return npc
}

update(player) {
    if (player) {
        this.checkCollision(player);
    }
    this.move();
    this.draw();
}

move(){
    this.x += this.stepX;
    this.y += this.stepY;

    if (this.x <= 0 || this.x + this.size >= cW) {
        this.stepX *= -1;
        this.stepY = Math.random() > 0.5 ? this.stepY : -this.stepY;
    }
    if (this.y <= 0 || this.y + this.size >= cH) {
        this.stepY *= -1;
        this.stepX = Math.random() > 0.5 ? this.stepX : -this.stepX;
    }
}

checkCollision(player) {
    const colisao =
        this.x < player.x + player.size &&
        this.x + this.size > player.x &&
        this.y < player.y + player.size &&
        this.y + this.size > player.y;

    if (colisao) {
        const profundidadeX =
            this.x < player.x
                ? (this.x + this.size) - player.x
                : (player.x + player.size) - this.x;

        const profundidadeY =
            this.y < player.y
                ? (this.y + this.size) - player.y
                : (player.y + player.size) - this.y;

        if (profundidadeX < profundidadeY) {
            if (this.x < player.x) {
                this.x -= profundidadeX / 2;
                player.x += profundidadeX / 2;
            } else {
                this.x += profundidadeX / 2;
                player.x -= profundidadeX / 2;
            }
        } else {
            if (this.y < player.y) {
                this.y -= profundidadeY / 2;
                player.y += profundidadeY / 2;
            } else {
                this.y += profundidadeY / 2;
                player.y -= profundidadeY / 2;
            }
        }

        console.log("Colisão com ação e reação!");
    }
}


    draw(){
        this.element.style.left = `${this.x}px`
        this.element.style.top = `${this.y}px`
    }
}


