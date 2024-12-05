const cW = window.innerWidth
const cH = window.innerHeight

class Npc {
    constructor(initial){
        this.x = initial.x
        this.y = initial.y
        this.size = initial.size
        this.speed = initial.speed
        this.element = this.createElement();
    }

createElement(){
    const npc = document.createElement('div')
    npc.classList.add('npc')
    npc.style.width = `${this.size}px`
    npc.style.height = `${this.size}px`
    document.body.appendChild(npc);
    return npc
}

update(){
    this.move()
    /*this.colisionWall()*/
    /*this.checkCollision()*/
    this.draw()
}

move(){

    const randomX = Math.random() > 0.5 ? 1 : -1;
    const randomY = Math.random() > 0.5 ? 1 : -1;

    this.x += this.speed * randomX;
    this.y += this.speed * randomY;

    if(this.x <= 0 || this.x + this.size >= cW) {
        this.x = Math.max(0, Math.min(this.x, cW - this.size));
        this.speed =- this.speed;
    } 

    if(this.y <= 0 || this.y + this.size >= cH) {
        this.y = Math.max(0, Math.min(this.y, cH - this.size));
        this.speed =- this.speed;
    } 
}

/*colisionWall(){
    if(this.x < 0) this.x = 0
    if(this.y < 0) this.y = 0

    if((this.x - this.size)> cW) this.x = cW - this.x
    if((this.y + this.size)> cH) this.y = cH - this.y
}*/

/*checkCollision(player){
    return (
        this.x < player.x + player.size &&
        this.x + this.size > player.x &&
        this.y < player.y + player.size &&
        this.y + this.size > player.y
    );
}*/

draw(){
    this.element.style.left = `${this.x}px`
    this.element.style.top = `${this.y}px`
}

}