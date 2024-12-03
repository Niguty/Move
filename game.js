class Game {
    constructor(){
        this.map = document.querySelector('.map')
        this.elements = []
    }

    addElement(element) {
        this.map.insertdjacentElement('beforeend', element)
        this.elements.push(element)
    }

    run(){

        for(let el of this.elements) {
            el.update()
        }

        requestAnimationFrame(this.run())
    }
}