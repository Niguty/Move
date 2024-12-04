class Npc {
    constructor(initial){
        this.x = initial.x
        this.y = initial.y
        this.size = initial.size
        this.step = initial.step
    }

createElement(){
    const npc = document.createElement('div')
    npc.classList.add('npc')
    npc.style.width = `${this.size}px`
    npc.style.height = `${this.size}px`
    return npc
}

}