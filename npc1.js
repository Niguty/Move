class Npc1 extends Npc {
    constructor(props) {
        super(props)
        this.element.style.backgroundColor = 'pink'
    }

    draw() {
        super.draw();
        console.log("Npc adicionado")
    }
}