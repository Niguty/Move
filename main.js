const player = new Player({
    x: 0,
    y: 0,
    size: 50,
    speed: 10,
})

const npc = new Npc({
    x: 100,
    y: 100,
    size: 50,
    speed: 10
})

const game = new Game()

game.addObject(player)
game.addObject(npc)

requestAnimationFrame((t) => game.update(game))