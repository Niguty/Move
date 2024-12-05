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
    if (
        this.x < player.x + player.size &&
        this.x + this.size > player.x &&
        this.y < player.y + player.size &&
        this.y + this.size > player.y
    ) {
        console.log("Colisão com o jogador!");
    } else {
        console.log("Sem colisão.");
    }
}

draw(){
    this.element.style.left = `${this.x}px`
    this.element.style.top = `${this.y}px`
}
}