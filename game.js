class Game {
    constructor() {
        this.objects = [];
    }

    addObject(obj) {
        this.objects.push(obj);
    }

    update() {
        this.objects.forEach((obj) => {
            try {
                obj.update();
            } catch (error) {
                console.error('Erro ao atualizar objeto:', error);
            }
        });

        requestAnimationFrame(() => this.update());
    }
}
