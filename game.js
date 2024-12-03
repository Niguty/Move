class Game {
    constructor(){
        this.map = document.querySelector('.map')
        this.elements = []
    }

    addElement(element) {
        this.map.insertAdjacentElement('beforeend', element)
        this.elements.push(element)
    }

    update(){
        const _this = this;

        requestAnimationFrame((ev) => {
        for(let el of _this.elements) {
            el.update()
        }
    }, this.update)
    }
}