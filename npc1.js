const cW = window.innerWidth
const cH = window.innerHeight

class Npc1 {
    constructor(initial){
       this.x = initial.x
       this.y = intial.y
       this.size = initial.size
       this.stepX = initial.stepX
       this.stepY = initial.stepY
       this.element = this.createElement()
    }

    createElement(){
        const npc1 = document.createElement('div')
        npc1.classList.add('npc1')
        npc1.style.width = `${this.size}px`
        npc1.style.height = `${this.size}px`
        npc1.style.position = 'absolute'
        document.body.appendChild(npc1)
        return npc1
    }

    update(player){
    }

    move(){
        this.x += this.stepX
        this.y += this.stepY

        if(this.x <= 0 || this.x + this.size >= cW){
            this.stepX *= -1
            this.x = this.x <= 0 ? 0: cW - this.size
        }
        if(this.y <= 0 || this.y + this.size >= cH){
            this.stepY *= -1
            this.y = this.y <= 0 ? 0: cH - this.size
        }
    }

}