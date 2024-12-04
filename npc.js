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

move(){}
colisionWall(){}

draw(){
    this.element.style.left = `${this.x}px`
    this.element.style.top = `${this.y}px`
}

}