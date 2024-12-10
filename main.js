const player = new Player({
    x: 0,
    y: 0,
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
    x: 100,
    y: 100,
    size: 50,
    stepX: 3,
    stepY: 3
});

const game = new Game();

game.addObject(player);
game.addObject(npc);
game.addObject(npc1);

player.draw();
npc.draw();
npc1.draw();

requestAnimationFrame(() => game.update());
