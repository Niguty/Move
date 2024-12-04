class Npc {
    constructor(initial){
        this.x = initial.x
        this.y = initial.y
        this.size = initial.size
        this.step = initial.step
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
    move()
    colisionWall()
    draw()
}

move(){
    this.x += this.step;

    if(this.x <= 0 || this.x >= this.size >= window.innerWidth){
        this.step =- this.step
    }
}

colisionWall(){

    const cW = window.innerWidth
    const cH = window.innerHeight

    if(this.x < 0) this.x = 0
    if(this.y < 0) this.y = 0

    if((this.x + this.size)> cW) this.x = cW - this.x
    if((this.y + this.size)> cH) this.y = cH - this.y
}

draw(){
    this.element.style.left = `${this.x}px`
    this.element.style.top = `${this.y}px`
}

}