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

    checkCollision(player){
        const colisao = 
            this.x < player.x + player.size &&
            this.x + this.size > player.x &&
            this.y < player.y + player.size &&
            this.y +this.size > player.y
        
        if(colisao){
            const profundidadeX = Math.abs(this.x + this.size - player.x) < Math.abs(this.x - (player.x + player.size))
                ? (this.x + this.size) - player.x
                : (player.x + player.size) - this.x

            const profundidadeY = Math.abs(this.y + this.size - player.y) < Math.abs(this.y - (player.y + player.size))
                ? (this.y + this.size) - player.y
                : (player.y + player.size) - this.y
            
            if(profundidadeX < profundidadeY){
                if(this.x < player.x) {
                    this.x -= profundidadeX /2
                    player.x += profundidade /2
                } else {
                    this.x += profundidadeX /2
                    player.x -= profundidade /2
                }
            } else {
                if(this.y < player.y){
                    this.y -= profundidadeY /2
                    player.y += profundidadeY /2
                } else {
                    this.y += profundidadeY /2
                    player.y -= ptofundidadeY /2
                }
            }
            console.log("Colisão com ação e reação!")
        }
    }

    chanceDirection(){

        if((this.x <= 0 || this.x + this.size)>= cW){
            this.stepY *= -1
        }
        if((this.y <= 0 || this.y + this.size)>= cH){
            this.stepY *= -1
        }

        if(Math.random() < 0.05){
            this.stepX += (Math.random() - 10) * 0.3
            this.stepY += (Math.random() - 10) * 0.3
        }
    }

    draw(){
        this.element.style.left = `${this.x}px`
        this.element.style.top = `${this.y}px`
    }
}