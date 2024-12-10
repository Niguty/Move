class Npc1 extends Npc {
    constructor(initial) {
        super(initial)
        this.element.style.backgroundColor = 'pink'
    }

    move(){
        this.x += this.stepX;
        this.y += this.stepY;
    
        if (this.x <= 0 || this.x + this.size >= cW) {
            this.stepX *= -1;
            this.x = this.x <= 0 ? 0 : cW - this.size;
        }
    
        if (this.y <= 0 || this.y + this.size >= cH) {
            this.stepY *= -1;
            this.y = this.y <= 0 ? 0 : cH - this.size
        }
    }
}