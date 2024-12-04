class Game {
    constructor() {
        this.objects = [];
    }

    addObject(obj) {
        this.objects.push(obj);
    }

    update() {
        
        this.objects.forEach((obj) => obj.update());

        requestAnimationFrame(() => this.update());
    }
}
