class Game {
    constructor() {
        this.map = document.querySelector('.map');
        this.instances = [];
    }

    addObject(instance) {
        this.map.insertAdjacentElement('beforeend', instance.element);
        this.instances.push(instance);
    }

    update() {
        for (let obj of this.instances) {
            if (obj instanceof Npc) {
                const player = this.instances.find(o => o instanceof Player);
                obj.update(player);
            } if(obj instanceof Npc1) {
                const player = this.instances.find(o => o instanceof Player);
                obj.update(player);
            } else {
                obj.update()
             }
    
        requestAnimationFrame(() => this.update());
    }
}
}
