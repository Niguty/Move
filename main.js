const player = new Player({
    x: 50,
    y: 50,
    size: 50,
    speed: 5,
});

const npc = new Npc({
    x: 100,
    y: 100,
    size: 50,
    stepX: 3,
    stepY: 3,
});

const npc1 = new Npc({
    x: 200,
    y: 200,
    size: 50,
    stepX: 3,
    stepY: 3,
});

const game = new Game();

game.addObject(player);
game.addObject(npc);
game.addObject(npc1);

game.update();
